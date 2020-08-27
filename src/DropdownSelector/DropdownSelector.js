import React, { Component } from 'react';
import { Select } from 'antd'
const { Option } = Select;
// import classes from './DropdownSelector.module.css';

class Selector extends Component {
    render() {
        let names = this.props.collection.map(item => {
            return <Option key={item.Name} disabled={Object.keys(this.props.selectedCards).indexOf(item.Name) >= 0} value={item.Name}>{item.Name}</Option>;
        });

        return (
            <div>
                <span>What is the probability to see and buy these minions in the tavern? &nbsp; </span>
                <Select 
                    showSearch
                    style={{width: '250px'}}
                    placeholder='Add a minion'
                    value={null}
                    autoFocus={true}
                    onChange={this.props.changed}>
                    {names}
                </Select>
            </div>
        );
    }
}

export default Selector;