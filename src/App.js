import React, { Component } from 'react';
import NoDropdownSelector from './NoDropdownSelector/NoDropdownSelector';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import minions from './minions';
import tierCardCounts from './config';
import './App.css';
import SelectedCards from './SelectedCards/SelectedCards';

const tribes = ['Beast', 'Demon', 'Dragon', 'Mech', 'Murloc', 'Pirate'];
const tiers = [1, 2, 3, 4, 5, 6]

class App extends Component {
  minionToAttributesMap = {};

  state = {
    missingTribe: tribes[0],
    currentTier: tiers[0],
    rollCount: 1,
    buyableCards: [],
    selectedCards: {},
    takenCards: {},
    selectedCard: null,
  }

  mapNameToObjectOfAttributes() {
    const nameMap = {}
    for (let minion of minions) {
      nameMap[minion.Name] = minion;
    }

    return nameMap;
  }

  componentDidMount() {
    this.minionToAttributesMap = this.mapNameToObjectOfAttributes();
    this.changeBuyableCards();
  }

  changeMissingTribeHandler = (tribeType) => {
    this.setState({missingTribe: tribeType});
    this.changeBuyableCards(undefined, tribeType);
  }

  changeCurrentTierHandler = (tier) => {
    this.setState({currentTier: tier});
    this.changeBuyableCards(tier, undefined);
  }

  addSelectedCardHandler = (newSelected) => {
    this.setState(prevState => {
      let selectedCards = Object.assign({}, prevState.selectedCards);
      let takenCards = Object.assign({}, prevState.takenCards);

      if (!selectedCards[newSelected]) {
        selectedCards[newSelected] = 1;
      }

      if (!takenCards[newSelected]) {
        takenCards[newSelected] = 0;
      }

      return { selectedCards, takenCards };
    });
  }

  deleteSelectedCardHandler = (toDelete) => {
    this.setState(prevState => {
      let selectedCards = Object.assign({}, prevState.selectedCards);
      let takenCards = Object.assign({}, prevState.takenCards);
      delete selectedCards[toDelete];
      delete takenCards[toDelete];

      return { selectedCards };
    });
  }

  changeSelectedCardAmountHandler = (name, value) => {
    this.setState(prevState => {
      let selectedCards = Object.assign({}, prevState.selectedCards);
      let takenCards = Object.assign({}, prevState.takenCards);

      selectedCards[name] = value;

      let maxTakenAmount = tierCardCounts[this.minionToAttributesMap[name]] - value;
      takenCards[name] = Math.min(maxTakenAmount, takenCards[name]);

      return { selectedCards };
    });
  }

  changeTakenCardAmountHandler = (name, value) => {
    this.setState(prevState => {
      let takenCards = Object.assign({}, prevState.takenCards);
      takenCards[name] = value;

      return { takenCards };
    });
  }

  changeBuyableCards(
    tier = this.state.currentTier, 
    tribeType = this.state.tribeType) {

    let tierAppropriateMinions = minions.filter(item => {
      if (parseInt(item.Tier) > tier) {
        this.deleteSelectedCardHandler(item.Name);
      }

      return parseInt(item.Tier) <= tier;
    });

    let tribeAppropriateMinions = tierAppropriateMinions.filter(item => {
      let synergies = item.Synergy.split(',');
      if (synergies[0] === "") {
        if (item.Type === tribeType) {
          this.deleteSelectedCardHandler(item.Name);
          return false;
        } else {
          return true;
        }
      } else if (synergies.length > 1) {
        return true;
      } else {
        if (synergies[0] === tribeType) {
          this.deleteSelectedCardHandler(item.Name);
          return false;
        } else {
          return true;
        }
      }
    });

    this.setState({ buyableCards: tribeAppropriateMinions });
  }

  render() { 
    return (
      <div className="App">
        <NoDropdownSelector 
          collection={tribes} 
          currentSelected={this.state.missingTribe}
          changed={this.changeMissingTribeHandler}
          prefixText="The missing tribe is:" />

        <NoDropdownSelector
          collection={tiers}
          currentSelected={this.state.currentTier}
          changed={this.changeCurrentTierHandler}
          prefixText="The current tier is:" />

        <DropdownSelector 
          collection={this.state.buyableCards}
          currentTier={this.state.currentTier}
          missingTribe={this.state.missingTribe}
          changed={this.addSelectedCardHandler}
          selectedCard={this.state.selectedCard} />

        <SelectedCards
          selectedCards={this.state.selectedCards}
          takenCards={this.state.takenCards}
          changeCard={this.changeSelectedCardAmountHandler}
          changeTaken={this.changeTakenCardAmountHandler}
          delete={this.deleteSelectedCardHandler}
          minionsMap={this.minionToAttributesMap}
          tierCardCounts={tierCardCounts}/>

        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
