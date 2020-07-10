import React, { Component } from 'react';
import { Select } from 'antd'
const { Option } = Select;
// import classes from './DropdownSelector.module.css';

class Selector extends Component {
    render() {
        let names = this.props.collection.map(item => {
            return <Option key={item.Name} value={item.Name}>{item.Name}</Option>;
        });

        return (
            <div>
                <span>What are the odds to hit.. &nbsp; </span>
                <Select 
                    showSearch
                    style={{width: '200px'}}
                    placeholder='Add a minion'
                    value={null}
                    onChange={this.props.changed}>
                    {names}
                </Select>
            </div>
        );
    }
}

export default Selector;