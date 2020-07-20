import React from 'react';
import { InputNumber } from 'antd';
import classes from './SelectedCards.module.css';

const SelectedCards = (props) => {

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

        // Objective is to make the cardName class be dynamic and be as wide as the widest cardName in the list
        return (
            <div key={key}>
                <span> at least &nbsp; </span>
                {cardAmountInput}
                &nbsp;
                
                <span style={{display: 'inline-block', width: `${props.longestSelectedCardCharCount * 8}px`}}>
                {key}
                </span>
                <span> when </span>
                {takenAmountInput}
                &nbsp; <span>are taken already</span> &nbsp;
                <img className={classes.Trashcan} src={require('../assets/trash.svg')} alt="Remove" onClick={() => props.delete(key)}/>
            </div>
        )});

    const rollCountInput = 
        <div> in &nbsp;
            <InputNumber
                min={0}
                defaultValue={1}
                onChange={(value) => props.changeRolls(value)} /> 
            &nbsp; rolls
        </div>;

    return <div>
        {entries}
        {entries.length > 0 ? rollCountInput : null}
    </div>
}

export default SelectedCards;