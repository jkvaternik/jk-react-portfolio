import React from 'react';

import styles from './Footer.module.css';

const footer = (props) => {
    return (
        <footer id='contact' className={styles.Footer}>
            <div style={{ margin: '0 auto', width: '50%', padding: '75px 0' }}>
                <h3 style={{ textAlign: 'center', margin: '0 0 50px 0'}}>want to say hello? let's connect!</h3>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a href='/'>Email</a>
                    <a href='/'>LinkedIn</a>
                    <a href='/'>Resume</a>
                </div>
            </div>
        </footer>
    );
}

export default footer;