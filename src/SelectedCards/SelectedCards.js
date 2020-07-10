import React from 'react';
import { InputNumber } from 'antd';
import classes from './SelectedCards.module.css';

const SelectedCards = (props) => {

    const rollCountInput = 
        <div> in &nbsp;
            <InputNumber
                min={0}
                defaultValue={1}
                onChange={(value) => props.changeRolls(value)} /> 
            &nbsp; rolls
        </div>

    const entries = Object.keys(props.selectedCards).map(key => {
        let maxCardsInCurrentTier = props.tierCardCounts[props.minionsMap[key].Tier];
        let currentAmount = props.selectedCards[key];
        let takenAmount = props.takenCards[key];

        const cardAmountInput = <InputNumber 
                                min={0}
                                max={maxCardsInCurrentTier}
                                style={{width: '60px'}}
                                value={currentAmount}
                                onChange={(value) => props.changeCard(key, value)} />

        let maxTakenAmount = maxCardsInCurrentTier - currentAmount;
        const takenAmountInput = <InputNumber 
                                min={0}
                                max={maxTakenAmount}
                                style={{width: '60px'}}
                                value={takenAmount}
                                onChange={(value) => props.changeTaken(key, value)}/>

        return (
            <div key={key}>
                <span> at least &nbsp; </span>
                {cardAmountInput}
                &nbsp; {key}
                <span> when </span>
                {takenAmountInput}
                &nbsp; <span>are taken already</span> &nbsp;
                <img className={classes.trashcan} src={require('../assets/trash.svg')} alt="Remove" onClick={() => props.delete(key)}/>
            </div>
        )});

    return <div>
        {entries}
        {rollCountInput}
    </div>
}

export default SelectedCards;