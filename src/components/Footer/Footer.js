import React from 'react';

import styles from './Footer.module.css';

const footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Wrapper}>
                <h3>want to say hello? let's connect!</h3>
                <div className={styles.LinksContainer}>
                    <a href="mailto:jaime.kvaternik17@gmail.com?Subject=Hello%20Jaime">Email</a>
                    <a href="https://www.linkedin.com/in/jkvaternik/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/JaimeKvaternik_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                </div>
                <p style={{textAlign: 'center', marginTop: '50px', fontSize: '12px'}}>Copyright 2021 - Jaime Kvaternik</p>
            </div>
        </footer>
    );
}

export default footer;