import React from 'react';

import styles from './Footer.module.css';

const footer = (props) => {
    return (
        <footer id='contact' className={styles.Footer}>
            <div style={{ margin: '0 auto', width: '50%', padding: '75px 0' }}>
                <h3 style={{ textAlign: 'center', margin: '0 0 50px 0'}}>want to say hello? let's connect!</h3>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a href="mailto:jaime.kvaternik17@gmail.com?Subject=Hello%20Jaime">Email</a>
                    <a href="https://www.linkedin.com/in/jkvaternik/">LinkedIn</a>
                    <a href="https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/resume.v3.pdf">Resume</a>
                </div>
            </div>
        </footer>
    );
}

export default footer;