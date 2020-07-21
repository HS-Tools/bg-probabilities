import React from 'react';
import { InputNumber, Switch } from 'antd';
import classes from './SelectedCards.module.css';

const SelectedCards = (props) => {
    const andOr = <Switch checkedChildren="and" unCheckedChildren="or" defaultChecked 
    checked={props.isAnd} onChange={props.changeAndMode} />

    const entries = Object.keys(props.selectedCards).map(key => {
        let isLastKey = (key === Object.keys(props.selectedCards)[Object.keys(props.selectedCards).length - 1]);
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
                <img className={classes.Trashcan} src={require('../assets/trash.svg')} alt="Remove" onClick={() => props.delete(key)}/>
                <span> at least &nbsp; </span>
                {cardAmountInput}
                &nbsp;
                
                <span style={{display: 'inline-block', width: `${props.longestSelectedCardCharCount * 8}px`}}>
                {key}
                </span>
                <span> if </span>
                {takenAmountInput}
                &nbsp; <span>are missing</span> &nbsp;
                {!isLastKey ? andOr : null}
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