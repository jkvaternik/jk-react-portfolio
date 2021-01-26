import React from 'react';
import Aux from '../../hoc/Aux/Aux';

import Project from './Project.js/Project';

import styles from './Projects.module.css';
import data from './projects.json';

const projects = (props) => {
    const projs = data.map((data, i) => {
        return <Project project={data} key={'pK' + i} />
    });

    return (
        <Aux>
            <div id='#projects' className={styles.Projects}>
                <h4 style={{ textAlign: 'center', marginBottom: '35px' }}>work+play</h4>
                <div className={styles.ProjectsView}>
                    {projs}
                </div>
            </div>
            <div style={{ float: 'right', marginTop: '20px', marginBottom: '65px' }}>
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
        </Aux>
    )
}

export default projects;