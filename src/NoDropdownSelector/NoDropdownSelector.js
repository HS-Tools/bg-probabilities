import React from 'react';
import classes from './NoDropdownSelector.module.css';

const Selector = (props) => {

    let buttons = props.collection.map(item => {
        if (item == props.currentSelected) {
            return <button key={item} className={[classes.Button, classes.Missing].join(' ')}>{item}</button>
        } else {
            return <button key={item} className={classes.Button} onClick={() => props.changed(item)}>{item}</button>
        }
    });

    return (
        <div>
            <div>{props.prefixText} {buttons}</div>
        </div>
    );
};

export default Selector;