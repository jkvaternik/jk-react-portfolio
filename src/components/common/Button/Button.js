import React from 'react';

import styles from './Button.module.css';

const button = (props) => {
    let btn = null;
    const btnClasses = [styles.Button];

    switch (props.link) {
        case ('medium'):
            btnClasses.push(styles.Medium);
            btn = <a href='https://medium.com/@jaimekvaternik' className={btnClasses.join(' ')}>{props.children}<span className="fab fa-medium-m fa-lg"></span></a>;
            break;
        case ('spotify'):
            btnClasses.push(styles.Spotify);
            btn = <a href='https://open.spotify.com/playlist/3BzSvzREWj6dWEIPJhKa9T' className={btnClasses.join(' ')}>{props.children}<span className="fab fa-spotify fa-lg"></span></a>;
            break;
        case ('soundcloud'):
            btnClasses.push(styles.SoundCloud);
            btn = <a href='https://soundcloud.com/wayloud-recorders/sets/jaime-kvaternik' className={btnClasses.join(' ')}>{props.children}<span className="fab fa-soundcloud fa-lg"></span></a>;
            break;
        default:
            btn = null;
            break;
    }

    return (
        btn
    );
}

export default button;