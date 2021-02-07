import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import styles from './Landing.module.css';

const landing = (props) => {
  return (
    <section className={styles.LandingSection}>
      <div className={styles.Background}></div>
      <div className={styles.Landing}>
        <h1>Hello!</h1>
        <h4>I'm Jaime, a developer + designer seeking to humanize technology in a user-centric manner.</h4>
        <div className={styles.Scroll}>
          <span>scroll down to learn more!</span>
          <FontAwesomeIcon icon={faArrowDown} style={{ margin: '20px 0px' }} />
        </div>
      </div>
    </section >
  );
}

export default landing;