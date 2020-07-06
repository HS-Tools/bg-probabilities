import React from 'react';
import classes from './NoDropdownSelector.module.css';

const selector = (props) => {
    let buttons = props.collection.map(item => {
        if (item == props.currentSelected) {
            return <button className={[classes.Button, classes.Missing].join(' ')}>{item}</button>
        } else {
            return <button className={classes.Button} onClick={props.changed.bind(this, item)}>{item}</button>
        }
    });

    return (
        <div>
            <div>{props.prefixText} {buttons}</div>
        </div>
    );
};

export default selector;