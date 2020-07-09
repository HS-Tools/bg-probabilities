import React from 'react';

const SelectedCards = (props) => {
    const entries = Object.keys(props.selectedCards).map(key => {
        return (
        <div>
            {key}: {props.selectedCards[key]}
        </div>
    )});

    return entries
}

export default SelectedCards;