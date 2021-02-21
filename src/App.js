import React, { Component } from 'react';
import NoDropdownSelector from './NoDropdownSelector/NoDropdownSelector';
import NoDropdownMultiSelector from './NoDropdownMultiSelector/NoDropdownMultiSelector';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import Header from './Header/Header';
import Results from './Results/Results'
import minions from './minions';
import { tierCardCounts, tavernCardCounts } from './config';
import './App.css';
import SelectedCards from './SelectedCards/SelectedCards';
import ReactGA from 'react-ga';

const tribes = ['Beast', 'Demon', 'Dragon', 'Mech', 'Murloc', 'Pirate', 'Elemental'];
const tiers = [1, 2, 3, 4, 5, 6]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      missingTribes: [tribes[0], tribes[1]],
      currentTier: tiers[0],
      rollCount: 1,
      buyableCards: [],
      selectedCards: {},
      takenCards: {},
      longestSelectedCardCharCount: 0,
      simulationCount: 100000,
      isAnd: true
    }
    this.minionToAttributesMap = {};
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
    this.changeBuyableCards(this.state.currentTier, this.state.missingTribes);
  }

  changeMissingTribeHandler = (e) => {
    this.setState({missingTribes: e});
    this.changeBuyableCards(this.state.currentTier, e);
  }

  changeCurrentTierHandler = (e) => {
    let tier = e.target.value;
    this.setState({currentTier: tier});
    this.changeBuyableCards(tier, this.state.missingTribes);
  }

  calculateLongestSelectedCardCharCount(selectedCards) {
    let max = 0;

    for (let key of Object.keys(selectedCards)) {
      if (key.length > max) {
        max = key.length;
      }
    }

    return max;
  }

  addSelectedCardHandler = (newSelected) => {
    this.setState(prevState => {
      let selectedCards =  {...prevState.selectedCards};
      let takenCards =  {...prevState.takenCards};

      if (!selectedCards[newSelected]) {
        selectedCards[newSelected] = 1;
      }

      if (!takenCards[newSelected]) {
        takenCards[newSelected] = 0;
      }

      let newCharMax = this.calculateLongestSelectedCardCharCount(selectedCards);

      return { selectedCards, takenCards, longestSelectedCardCharCount: newCharMax };
    });
  }

  deleteSelectedCardHandler = (toDelete) => {
    this.setState(prevState => {
      let selectedCards =  {...prevState.selectedCards};
      let takenCards = {...prevState.takenCards};

      delete selectedCards[toDelete];
      delete takenCards[toDelete];

      this.calculateLongestSelectedCardCharCount(selectedCards);

      let newCharMax = this.calculateLongestSelectedCardCharCount(selectedCards);

      return { selectedCards, takenCards, longestSelectedCardCharCount: newCharMax };
    });
  }

  changeSelectedCardAmountHandler = (name, value) => {
    this.setState(prevState => {
      let selectedCards = {...prevState.selectedCards};
      let takenCards = {...prevState.takenCards};

      selectedCards[name] = value;

      let maxTakenAmount = tierCardCounts[this.minionToAttributesMap[name]] - value;
      takenCards[name] = Math.min(maxTakenAmount, takenCards[name]);

      return { selectedCards };
    });
  }

  changeTakenCardAmountHandler = (name, value) => {
    this.setState(prevState => {
      let takenCards = {...prevState.takenCards};
      takenCards[name] = value;

      return { takenCards };
    });
  }

  changeRollsHandler = (value) => {
    this.setState({ rollCount: value});
  }

  clearSelectionsHandler = () => {
    this.setState({
      selectedCards: {},
      takenCards: {},
      rollCount: 1
    });
  }

  changeAndModeHandler = (checked) => {
    this.setState({'isAnd': checked});
  }


  changeBuyableCards(
    tier,
    tribeTypes) {
    let tierAppropriateMinions = minions.filter(item => {
      if (parseInt(item.Tier) > tier) {
        this.deleteSelectedCardHandler(item.Name);
      }

      return parseInt(item.Tier) <= tier;
    });

    let tribeAppropriateMinions = tierAppropriateMinions.filter(item => {
      let synergies = item.Combined.split(',');
      if (synergies[0] === "") {
        if (tribeTypes.indexOf(item.Type) >= 0) {
          this.deleteSelectedCardHandler(item.Name);
          return false;
        } else {
          return true;
        }
      } else if (synergies.length > 1) {
        return true;
      } else {
        if (tribeTypes.indexOf(synergies[0]) >= 0) {
          this.deleteSelectedCardHandler(item.Name);
          return false;
        } else {
          return true;
        }
      }
    });

    this.setState({ buyableCards: tribeAppropriateMinions });
  }

  initializeReactGA() {
    ReactGA.initialize('UA-173232340-1');
    ReactGA.pageview('/home-page');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NoDropdownMultiSelector
          collection={tribes}
          currentSelected={this.state.missingTribes}
          changed={this.changeMissingTribeHandler}
          prefixText="The missing tribe is:" />

        <NoDropdownSelector
          collection={tiers}
          currentSelected={this.state.currentTier}
          changed={this.changeCurrentTierHandler}
          prefixText="The current tavern tier is:" />

        <DropdownSelector
          collection={this.state.buyableCards}
          currentTier={this.state.currentTier}
          missingTribes={this.state.missingTribes}
          selectedCards={this.state.selectedCards}
          changed={this.addSelectedCardHandler} />

        <SelectedCards
          selectedCards={this.state.selectedCards}
          takenCards={this.state.takenCards}
          changeCard={this.changeSelectedCardAmountHandler}
          changeTaken={this.changeTakenCardAmountHandler}
          changeRolls={this.changeRollsHandler}
          delete={this.deleteSelectedCardHandler}
          minionsMap={this.minionToAttributesMap}
          longestSelectedCardCharCount={this.state.longestSelectedCardCharCount}
          isAnd = {this.state.isAnd}
          rollCount={this.state.rollCount}
          changeAndMode={this.changeAndModeHandler}
          tierCardCounts={tierCardCounts}/>

        <Results
          minionsMap={this.minionToAttributesMap}
          rollCount = {this.state.rollCount}
          tierCardCounts={tierCardCounts}
          tavernCardCounts={tavernCardCounts}
          buyableCards={this.state.buyableCards}
          currentTier={this.state.currentTier}
          selectedCards={this.state.selectedCards}
          takenCards={this.state.takenCards}
          isAnd={this.state.isAnd}
          clear={this.clearSelectionsHandler}
          simulationCount={this.state.simulationCount}/>
      </div>
    );
  }
}

export default App;
