import React, { Component } from 'react';
import NoDropdownSelector from './NoDropdownSelector/NoDropdownSelector';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import minions from './minions';
import './App.css';
import SelectedCards from './SelectedCards/SelectedCards';

const tribes = ['Beast', 'Demon', 'Dragon', 'Mech', 'Murloc', 'Pirate'];
const tiers = [1, 2, 3, 4, 5, 6]

class App extends Component {
  state = {
    missingTribe: tribes[0],
    currentTier: tiers[0],
    rollCount: 1,
    buyableCards: [],
    selectedCards: {},
    selectedCard: null,
  }

  componentDidMount() {
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
      if (!selectedCards[newSelected]) {
        selectedCards[newSelected] = 1;
      }

      return { selectedCards };
    });
  }

  deleteSelectedCardHandler = (toDelete) => {
    this.setState(prevState => {
      let selectedCards = Object.assign({}, prevState.selectedCards);
      delete selectedCards[toDelete];

      return { selectedCards };
    });
  }

  changeSelectedCardAmountHandler = (name, value) => {
    this.setState(prevState => {
      let selectedCards = Object.assign({}, prevState.selectedCards);
      selectedCards[name] = value;
      return { selectedCards };
    });
  }

  changeBuyableCards(
    tier = this.state.currentTier, 
    tribeType = this.state.tribeType) {

    let tierAppropriateMinions = minions.filter(item => {
      return parseInt(item.Tier) <= tier;
    });

    let tribeAppropriateMinions = tierAppropriateMinions.filter(item => {
      let synergies = item.Synergy.split(',');
      if (synergies[0] === "") {
        if (item.Type === tribeType) {
          return false;
        } else {
          return true;
        }
      } else if (synergies.length > 1) {
        return true;
      } else {
        if (synergies[0] === tribeType) {
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
          changeCard={this.changeSelectedCardAmountHandler}
          delete={this.deleteSelectedCardHandler}/>

        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
