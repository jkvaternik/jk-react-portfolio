import React from 'react';

import styles from './Button.module.css';

const button = (props) => {
    let btn = null;

    switch (props.link) {
        case ('medium'):
            btn = <a href='https://medium.com/@jaimekvaternik' className={styles.Button}>{props.children}<span className="fab fa-medium-m fa-lg"></span></a>;
            break;
        case ('spotify'):
            btn = <a href='https://open.spotify.com/playlist/3BzSvzREWj6dWEIPJhKa9T' className={styles.Button}>{props.children}<span className="fab fa-spotify fa-lg"></span></a>;
            break;
        case ('soundcloud'):
            btn = <a href='https://soundcloud.com/wayloud-recorders/sets/jaime-kvaternik' className={styles.Button}>{props.children}<span className="fab fa-soundcloud fa-lg"></span></a>;
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