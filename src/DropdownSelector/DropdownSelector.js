import React from 'react';
import classes from './DropdownSelector.module.css';

const selector = (props) => {
    // Filter out the missing tribe/missing items due to tier level
    return props.collection.map(item => {
        return <div key={item.Name}>{item.Name}</div>
    });
};

export default selector;