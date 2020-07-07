import React from 'react';
import classes from './DropdownSelector.module.css';
import Select from 'react-select';

const Selector = (props) => {
    const options = props.collection.map(item => { 
        return { value: item.Name, label: item.Name } 
    });

    return <Select options={options} />;

    // return props.collection.map(item => {
    //     return <div key={item.Name}>{item.Name}</div>
    // });
};

export default Selector;