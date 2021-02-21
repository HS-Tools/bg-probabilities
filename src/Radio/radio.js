import React from 'react';
import { Radio } from 'antd';

const Selector = (props) => {
    let buttons = props.collection.map(item => {
        return <Radio.Button value={item}>{item}</Radio.Button>
    });

    return (
        <div>
            {props.prefixText} &nbsp;
            <Radio.Group onChange={props.changed} defaultValue={props.currentSelected}>
                {buttons}
            </Radio.Group>
        </div>
    );
};

export default Selector;