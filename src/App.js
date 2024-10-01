import React, { Component } from 'react';
import NoDropdownSelector from './NoDropdownSelector/NoDropdownSelector';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import Radio from './Radio/radio';
import Header from './Header/Header';
import Results from './Results/Results'
import minions from './minions';
import { tierCardCounts, tavernCardCounts } from './config';
import './App.css';
import SelectedCards from './SelectedCards/SelectedCards';
import ReactGA from 'react-ga';
import { tribes } from './tribes';

const tiers = [1, 2, 3, 4, 5, 6, 7]
const modes = ['Solo', 'Duo']

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      availableTribes: tribes.slice(0, 5),
      currentTier: tiers[0],
      currentMode: modes[0],
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
    this.changeBuyableCards(this.state.currentTier, this.state.availableTribes, this.state.currentMode);
  }

  changeAvailableTribeHandler = (position, e) => {
    this.setState(prevState => {
      let availableTribes =  [...prevState.availableTribes];
      availableTribes[position] = e.target.value;
      this.changeBuyableCards(this.state.currentTier, availableTribes, this.state.currentMode);

      return { availableTribes };
    });
  }

  changeCurrentTierHandler = (e) => {
    let tier = e.target.value;
    this.setState({currentTier: tier});
    this.changeBuyableCards(tier, this.state.availableTribes, this.state.currentMode);
  }

  changeCurrentModeHandler = (e) => {
    let mode = e.target.value;
    this.setState({currentMode: mode});
    this.changeBuyableCards(this.state.currentTier, this.state.availableTribes, mode);
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
    availableTribes,
    mode) {
    let tierAppropriateMinions = minions.filter(item => {
      if (parseInt(item.Tier) > tier) {
        this.deleteSelectedCardHandler(item.Name);
      }

      return parseInt(item.Tier) <= tier;
    });

    let tribeAppropriateMinions = tierAppropriateMinions.filter(item => {
      let synergies = item.Combined.split(',').map(str => str.trim());

      // If a card has multiple type synergies with it, only remove it if all those type synergies are excluded from availableTribes
      let typeSynergies = synergies.filter(synergy => tribes.includes(synergy))

      const typesAreNotIncluded = typeSynergies.every(type => !availableTribes.includes(type));

      if (typeSynergies.length > 0 && typesAreNotIncluded) {
        this.deleteSelectedCardHandler(item.Name)
        return false;
      } else {
        return true;
      }
    });

    let modeAppropriateMinions = tribeAppropriateMinions.filter(item => {
      // If solo mode, remove duo minions
      if (mode === 'Solo' && item.ID.includes('BGDUO')) {
        this.deleteSelectedCardHandler(item.Name)
        return false;
      } else {
        return true;
      }
    })

    this.setState({ buyableCards: modeAppropriateMinions });
  }

  initializeReactGA() {
    ReactGA.initialize('UA-173232340-1');
    ReactGA.pageview('/home-page');
  }

  availableTribes() {
    let radioList = [];

    for (let i in Array.from(Array(5))) {
      let handler = this.changeAvailableTribeHandler.bind(this, i);
      let prefixText = `Available tribe # ${parseInt(i)+1}`;
      radioList.push(
          <Radio 
            key={i.toString()}
            collection={tribes}
            prefixText={prefixText}
            index={i}
            allSelected={this.state.availableTribes}
            currentSelected={this.state.availableTribes[i]}
            changed={handler} />
      );
    }

    return (
      <div>
        {radioList}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.availableTribes()}

        <NoDropdownSelector
          collection={tiers}
          currentSelected={this.state.currentTier}
          changed={this.changeCurrentTierHandler}
          prefixText="The current tavern tier is:" />

        <NoDropdownSelector
          collection={modes}
          currentSelected={this.state.currentMode}
          changed={this.changeCurrentModeHandler}
          prefixText="The current mode is:" />

        <DropdownSelector
          collection={this.state.buyableCards}
          currentTier={this.state.currentTier}
          availableTribes={this.state.availableTribes}
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
