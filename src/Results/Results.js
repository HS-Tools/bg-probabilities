import React, { Component } from 'react';

class Results extends Component {
    getCountOfAvailableMinions() {
        let total = 0;

        for (let card of this.props.buyableCards) {
            total += this.props.tierCardCounts[card.Tier];
        }

        for (let value of Object.values(this.props.takenCards)) {
            total -= value;
        }

        return total;
    }

    // Returns a map where the key is the card name and the value is another object with fields that indicate needed and available amounts of that card
    getCardMap() {
        let cardMap = {};
        const { minionsMap, tierCardCounts, takenCards, selectedCards } = this.props;

        for (let key of Object.keys(selectedCards)) {
            let cardTier = parseInt(minionsMap[key].Tier);
            let availableAmount = tierCardCounts[cardTier] - takenCards[key];

            cardMap[key] = {
                'needed': selectedCards[key],
                'available': availableAmount
            }
        }

        return cardMap;
    }

    getXUniqueRandoms(min, max, x) {
        let arr = [];

        while(arr.length < x) {
            let randomInt = this.getRandomInRange(min, max);
            if (arr.indexOf(randomInt) === -1) {
                arr.push(randomInt);
            }
        }

        return arr;
    }

    getRandomInRange(min, max) {
        let delta = max-min;

        return Math.floor(Math.random() * delta) + min;
    }

    runOneSimulationWithAnd() {
        let totalCards = this.getCountOfAvailableMinions();
        let cardsDrawnPerRound = this.getCountOfMinionsInTavern();
        let cardMap = this.getCardMap();
        let rollCount = this.props.numRolls;

        while (rollCount > 0 && Object.keys(cardMap).length > 0) {

        }

        
        // let successCount = this.


    }

    getCountOfMinionsInTavern() {
        return this.props.tavernCardCounts[this.props.currentTier];
    }

    calculateOrOdds() {
        
    }

    // Calcuate odds of finding >= numDesired cards with 
                                // totalCards cards in the available pool and 
                                // cardsDrawn cards drawn and
                                // successCount of desiredCards
    // This is the odds of hitting at least numDesired cards in one tavern roll when there are successCount of desired cards
    calculateOddsToHit(numDesired) {

        // this.props.

    }

    calculateOdds(numDesiredCopies, numRolls) {
        if (numDesiredCopies === 0) {
            return 1
        }
        if (numRolls === 0) {
            return 0
        }

        let retVal = 0;

        for (let i = 0; i < this.getCountOfMinionsInTavern(); i++) {
            retVal += this.calculateOdds(numDesiredCopies - i, numRolls - 1);
        }

        return retVal
    }

    render() {
        console.log(this.getXUniqueRandoms(1, 10, 3));
        return (
            <div>
                <button>Calculate Odds</button>
            </div>
        );
    }
}

export default Results;