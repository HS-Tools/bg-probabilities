import React from 'react';
import { Checkbox } from 'antd';

const Selector = (props) => {
    // console.log({props})
    let buttons = props.collection.map(item => {
        return <Checkbox value={item}>{item}</Checkbox>
    });

    return (
        <div>
            {props.prefixText} &nbsp;
            <Checkbox.Group onChange={props.changed} defaultValue={props.currentSelected}>
                {buttons}
            </Checkbox.Group>
        </div>
    );
};

export default Selector;