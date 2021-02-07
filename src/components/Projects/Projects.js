import React from 'react';

import Project from './Project/Project';

import styles from './Projects.module.css';
import data from './projects.json';

const projects = (props) => {
  const projs = data.map((data, i) => {
    return <Project project={data} key={'pK' + i} />
  });

  return (
    <section className={styles.ProjectSection}>
      <div className={styles.Projects}>
        <h4 style={{ textAlign: 'center', marginBottom: '35px' }}>work+play</h4>
        <div className={styles.ProjectsView}>
          {projs}
        </div>
      </div>
      <div className={styles.Links}>
        <span style={{ display: 'inline-flex', alignItems: 'center', color: '#371e55' }}>
          Want to see more?
          <a className={styles.Link} href='https://github.com/jkvaternik' target="_blank" rel="noreferrer" style={{ display: 'inline', marginLeft: '10px' }}>
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a className={styles.Link} href='https://www.behance.net/jaimekvatea11c' target="_blank" rel="noreferrer" style={{ display: 'inline', marginLeft: '10px' }}>
            <i className="fab fa-behance fa-2x"></i>
          </a>
        </span>
      </div>
    </section>
  )
}

export default projects;