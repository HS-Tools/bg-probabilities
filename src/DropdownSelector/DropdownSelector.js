import React, { useState, useEffect } from 'react';
import classes from './DropdownSelector.module.css';

const Selector = (props) => {
    // Filter out the missing tribe/missing items due to tier level
    const [value, setValue] = useState(props.collection);

    useEffect(() => {
        setValue(props.collection)
    }, [props.collection]);

    return props.collection.map(item => {
        return <div key={item.Name}>{item.Name}</div>
    });
};

export default Selector;