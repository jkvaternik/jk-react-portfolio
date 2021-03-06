import React from 'react';

import Button from '../common/Button/Button';

import styles from './About.module.css';
import img from '../../assets/images/jk-picture.png';

const about = (props) => {
  return (
    <section style={{ backgroundColor: '#E7BC85', float: 'clear' }}>
      <div className={styles.About}>
        <h4>about me</h4>
        <div className={styles.Container}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
            <img src={img} alt='jk_profile_image' className={styles.ProfileImage} />
          </div>
          <div className={styles.Details}>
            <p>
              Hi! I’m Jaime Kvaternik, a computer science and interactive design student at Northeastern University. In my work, I hope to create unique user experiences in software solutions. I am currently seeking software developer and UI/UX designer positions for Fall 2021.
            </p>
            <p>
              When I’m not coding or designing, you can find me biking around town, making music, brewing kombucha, or traveling the world looking for new adventures.
            </p>
            <p>
              Want to see what else I do? Check out the links below!
            </p>
            <Button link='medium'>What I'm thinking about</Button>
            <Button link='spotify'>What I'm listening to</Button>
            <Button link='soundcloud'>What I'm singing</Button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default about;