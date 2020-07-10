import React from 'react';
import { InputNumber } from 'antd';
import classes from './SelectedCards.module.css';
import minions from '../minions';

const SelectedCards = (props) => {

    const header = <div>
        What are the odds to hit
    </div>

    const entries = Object.keys(props.selectedCards).map(key => {
        return (
            <div key={key}>
                <InputNumber 
                            min={0}
                            max={props.tierCardCounts[props.minionsMap[key].Tier]}
                            style={{width: '60px'}}
                            defaultValue={props.selectedCards[key]}
                            onChange={(value) => props.changeCard(key, value)} />
                &nbsp; {key}
                <span> when </span>
                <InputNumber 
                            min={0}
                            max={5}
                            style={{width: '60px'}}
                            defaultValue={0} />
                &nbsp; <span>are taken already</span> &nbsp;
                <img className={classes.trashcan} src={require('../assets/trash.svg')} onClick={() => props.delete(key)}/>
            </div>
        )});

    return <div>
        {header}
        {entries}
    </div>
}

export default SelectedCards;