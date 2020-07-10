import React from 'react';
import { InputNumber } from 'antd';
import classes from './SelectedCards.module.css';
import minions from '../minions';

const SelectedCards = (props) => {
    const entries = Object.keys(props.selectedCards).map(key => {
        return (
        <div key={key}>
            {key}: 
            <InputNumber min={0}
                         max={props.tierCardCounts[props.minionsMap[key].Tier]}
                         defaultValue={props.selectedCards[key]}
                         onChange={(value) => props.changeCard(key, value)} />
            <img className={classes.trashcan} src={require('../assets/trash.svg')} onClick={() => props.delete(key)}/>
        </div>
    )});

    return entries
}

export default SelectedCards;