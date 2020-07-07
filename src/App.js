import React, { Component } from 'react';
import NoDropdownSelector from './NoDropdownSelector/NoDropdownSelector';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import minions from './minions';
import './App.css';

const tribes = ['Beasts', 'Demons', 'Dragons', 'Mechs', 'Murlocs', 'Pirates'];
const tiers = [1, 2, 3, 4, 5, 6]

class App extends Component {
  state = {
    missingTribe: tribes[0],
    currentTier: tiers[0],
    rollCount: 1,
    buyableCards: []
  }

  componentDidMount() {
    this.changeBuyableCards(this.state.currentTier, this.state.missingTribe);
  }

  changeMissingTribeHandler = (tribeType) => {
    this.setState({missingTribe: tribeType});
    this.changeBuyableCards(this.state.currentTier, tribeType);
  }

  changeCurrentTierHandler = (tier) => {
    this.setState({currentTier: tier});
    this.changeBuyableCards(tier, this.state.missingTribe);
  }

  changeBuyableCards(tier, tribeType) {
    let tierAppropriateMinions = minions.filter(item => {
      return parseInt(item.Tier) <= tier;
    });

    this.setState({ buyableCards: tierAppropriateMinions });
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
          missingTribe={this.state.missingTribe}/>

        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
