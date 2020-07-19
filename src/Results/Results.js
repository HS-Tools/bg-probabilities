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

    runOneSimulationWithAnd() {
        let totalCards = this.getCountOfAvailableMinions();
        let cardsDrawn = this.getCountOfMinionsInTavern();

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
        return <p>Hi</p>;
    }
}

export default Results;