import React, { Component } from 'react';
import NoDropDownSelector from './NoDropdownSelector/NoDropdownSelector';
import './App.css';

const tribes = ['Beasts', 'Demons', 'Dragons', 'Mechs', 'Murlocs', 'Pirates'];
const tiers = [1, 2, 3, 4, 5, 6]

class App extends Component {
  state = {
    missingTribe: tribes[0],
    currentTier: tiers[0],
    rollCount: 1,
  }

  changeMissingTribeHandler(tribeType) {
    this.setState({missingTribe: tribeType});
  }

  changeCurrentTierHandler(tier) {
    this.setState({currentTier: tier});
  }

  render() { 
    return (
      <div className="App">
        <NoDropDownSelector 
          collection={tribes} 
          currentSelected={this.state.missingTribe}
          changed={this.changeMissingTribeHandler.bind(this)}
          prefixText="The missing tribe is:" />
        <NoDropDownSelector collection={tiers}
          collection={tiers}
          currentSelected={this.state.currentTier}
          changed={this.changeCurrentTierHandler.bind(this)}
          prefixText="The current tier is:" />

        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
