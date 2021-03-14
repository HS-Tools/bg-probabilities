import React, { Component } from 'react';
import { Select } from 'antd'
import minions from '../minions';
import './DropdownSelector.module.css';
import classes from './DropdownSelector.module.css';
const { Option } = Select;

class Selector extends Component {
    render() {
        let names = this.props.collection.map(item => {
            const card = minions.find(card => card['Name'] === item.Name);
            const image = card && (<img className={classes.Clip} src={`https://art.hearthstonejson.com/v1/orig/${card.ID}.png`} alt={item.Name}/>);

            return <Option key={item.Name} disabled={Object.keys(this.props.selectedCards).indexOf(item.Name) >= 0} value={item.Name}>
                {image}
                {item.Name}
            </Option>;
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