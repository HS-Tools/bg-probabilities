import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <div className={classes.Logos}>
                <a target="_blank" href="https://www.twitch.tv/liihs" rel="noopener noreferrer">
                    <img className={classes.Logo} src={require('../assets/twitch.png')} alt="Creator's twitch page"/>
                </a>
                <a target="_blank" href="https://github.com/JimLiu0/bg-probabilities" rel="noopener noreferrer">
                    <img className={classes.Logo} src={require('../assets/github.png')} alt="Page's source code"/>
                </a>
            </div>
            <div>
                <div><h2>Hearthstone Battlegrounds Probability Calculator</h2></div>
            </div>
        </div>
    );
}

export default Header;