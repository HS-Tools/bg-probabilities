import React from 'react';
import { InputNumber, Switch } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import classes from './SelectedCards.module.css';

const SelectedCards = (props) => {
    const andOr = <Switch checkedChildren="and" unCheckedChildren="or" defaultChecked 
    checked={props.isAnd} onChange={props.changeAndMode} />
    const emptySpanForAlignment = props.isAnd ?
        <span style={{display: 'inline-block', width: '52px'}}></span> : 
        <span style={{display: 'inline-block', width: '44px'}}></span>;

    const entries = Object.keys(props.selectedCards).map(key => {
        let isLastKey = (key === Object.keys(props.selectedCards)[Object.keys(props.selectedCards).length - 1]);
        let maxCardsInCurrentTier = props.tierCardCounts[props.minionsMap[key].Tier];
        let currentAmount = props.selectedCards[key];
        let takenAmount = props.takenCards[key];

        const cardAmountInput = <InputNumber 
                                size="small"
                                min={0}
                                max={maxCardsInCurrentTier}
                                style={{width: '60px'}}
                                value={currentAmount}
                                onChange={(value) => props.changeCard(key, value)} />

        let maxTakenAmount = maxCardsInCurrentTier - currentAmount;
        const takenAmountInput = <InputNumber
                                size="small"
                                min={0}
                                max={maxTakenAmount}
                                style={{width: '60px'}}
                                value={takenAmount}
                                onChange={(value) => props.changeTaken(key, value)}/>

        // Objective is to make the cardName class be dynamic and be as wide as the widest cardName in the list
        return (
            <div key={key} className={classes.Entry}>
                <CloseCircleFilled className={classes.Close} alt="Remove" onClick={() => props.delete(key)}/>
                <span> at least &nbsp; </span>
                {cardAmountInput}
                &nbsp;
                
                <span style={{display: 'inline-block', width: `${props.longestSelectedCardCharCount * 8}px`}}>
                {key}
                </span>
                <span> if </span> &nbsp;
                {takenAmountInput}
                &nbsp; <span>are missing</span> &nbsp;
                {!isLastKey ? andOr : emptySpanForAlignment}
            </div>
        )});

    const rollCountInput = 
        <div> in &nbsp;
            <InputNumber
                size="small"
                min={0}
                value={props.rollCount}
                onChange={(value) => props.changeRolls(value)} /> 
            &nbsp; rolls
        </div>;

    return <div className={classes.Padding}>
        {entries}
        {entries.length > 0 ? rollCountInput : null}
    </div>
}

export default SelectedCards;