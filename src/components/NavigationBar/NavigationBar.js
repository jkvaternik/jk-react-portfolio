import React from 'react';

import styles from './NavigationBar.module.css';

const navigationBar = (props) => {
    return (
        <div className={styles.NavigationBar}>
            <a href='#projects'>work+play</a>
            <a href='#about'>about me</a>
            <a href='#contact'>contact</a>
        </div>
    );
}

export default navigationBar;