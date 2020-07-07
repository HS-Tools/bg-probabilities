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
    this.changeBuyableCards();
  }

  changeMissingTribeHandler(tribeType) {
    this.setState({missingTribe: tribeType});
    this.changeBuyableCards();
  }

  changeCurrentTierHandler(tier) {
    this.setState({currentTier: tier});
    this.changeBuyableCards();
  }

  changeBuyableCards() {
    let tierAppropriateMinions = minions.filter(item => {
      return parseInt(item.Tier) <= this.state.currentTier;
    });

    this.setState({buyableCards: tierAppropriateMinions});
  }

  render() { 
    return (
      <div className="App">
        <NoDropdownSelector 
          collection={tribes} 
          currentSelected={this.state.missingTribe}
          changed={this.changeMissingTribeHandler.bind(this)}
          prefixText="The missing tribe is:" />
        <NoDropdownSelector
          collection={tiers}
          currentSelected={this.state.currentTier}
          changed={this.changeCurrentTierHandler.bind(this)}
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
