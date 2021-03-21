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
                <div><img src="https://avatars.githubusercontent.com/u/8205258?s=460&u=94f6aa84f3a81501b75c6813fe9abcbe7c91245c&v=4"/> <h2>Lii's Hearthstone Battlegrounds Probability Calculator</h2></div>
            </div>
        </div>
    );
}

export default Header;
