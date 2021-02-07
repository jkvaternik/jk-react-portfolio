import React, { Component } from 'react';

import Landing from '../../components/Landing/Landing';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Aux/Aux';

import styles from './Portfolio.module.css';

class Portfolio extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.GridContainer}>
          <div className={styles.Name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 561 1789">
              <text id="jaime_" data-name="jaime " transform="translate(322) rotate(90)" fill="#606da3" fontSize="254" fontFamily="museo-sans" fontWeight="500" letterSpacing="0.1em"><tspan x="0" y="0">Jaime </tspan></text>
              <text id="Kvaternik" transform="translate(66 492) rotate(90)" fill="#606da3" fontSize="254" fontFamily="museo-sans" fontWeight="500" letterSpacing="0.1em"><tspan x="0" y="0">Kvaternik</tspan></text>
            </svg>
          </div>
          <div className={styles.Landing}>
            <Landing />
          </div>
          <div className={styles.Projects}>
            <Projects />
          </div>
        </div>
        <About />
        <Footer />
      </Aux>
    );
  }
}

export default Portfolio;