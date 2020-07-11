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
        let totalCards = this.getCountOfAvailableMinions();
        let cardsDrawn = this.getCountOfMinionsInTavern();
        let successCount = 0;

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
        console.log(this.getCountOfAvailableMinions());
        return <p>Hi</p>;
    }
}

export default Results;