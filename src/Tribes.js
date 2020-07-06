import React from 'react';
import classes from './Tribes.module.css';

const tribeSelector = (props) => {
    let buttons = props.tribes.map(tribe => {
        if (tribe == props.missingTribe) {
            return <button className={[classes.Button, classes.Missing].join(' ')}>{tribe}</button>
        } else {
            return <button className={classes.Button} onClick={props.changed.bind(this, tribe)}>{tribe}</button>
        }
    });

    return (
        <div>
            <div>The missing tribe is... {buttons}</div>
        </div>
    );
};

export default tribeSelector;