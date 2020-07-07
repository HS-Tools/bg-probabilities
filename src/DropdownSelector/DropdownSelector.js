import React from 'react';
import classes from './DropdownSelector.module.css';

const Selector = (props) => {
    return props.collection.map(item => {
        return <div key={item.Name}>{item.Name}</div>
    });
};

export default Selector;