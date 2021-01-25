import React from 'react';

import Project from './Project.js/Project';

import styles from './Projects.module.css';

const projects = (props) => {
    const projs = props.projects.map((proj, i) => {
        return <Project project={proj} key={'pK' + i}/>
    })

    return (
        <div id='#projects' className={styles.Projects}>
            <h4 style={{ textAlign: 'center', marginBottom: '35px' }}>work+play</h4>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '100px'}}>
                {projs}
            </div>

        </div>
    )
}

export default projects;