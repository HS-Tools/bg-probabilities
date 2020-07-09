import React from 'react';
import classes from './SelectedCards.module.css';

const SelectedCards = (props) => {
    const entries = Object.keys(props.selectedCards).map(key => {
        return (
        <div key={key}>
            {key}: {props.selectedCards[key]} 
            <img src={require('../assets/trash.svg')} onClick={() => props.delete(key)}/>
        </div>
    )});

    return entries
}

export default SelectedCards;