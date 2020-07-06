import React, { Component } from 'react';
import Tribes from './Tribes';
import './App.css';

const tribes = ['Beasts', 'Demons', 'Dragons', 'Mechs', 'Murlocs', 'Pirates'];
const tiers = [1, 2, 3, 4, 5, 6]

class App extends Component {
  state = {
    missingTribe: tribes[0],
    tier: tiers[0],
    rollCount: 1,
  }

  changeMissingTribeHandler(tribeType) {
    this.setState({missingTribe: tribeType});
  }

  render() { 
    return (
      <div className="App">
        <Tribes tribes={tribes} 
                missingTribe={this.state.missingTribe}
                changed={this.changeMissingTribeHandler.bind(this)}/>
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
