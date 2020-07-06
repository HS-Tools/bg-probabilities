import React from 'react';
import classes from './DropdownSelector.module.css';

const selector = (props) => {
    return props.collection.map(item => {
        return <div>{item.Name}</div>
    });
};

export default selector;