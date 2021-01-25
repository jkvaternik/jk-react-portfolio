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
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px'}}>
                {projs}
            </div>
            <div style={{float: 'right', marginBottom: '65px'}}>
                {/* <h4 marg>Want to see more?</h4>
                <a href='/' style={{display: 'inline-block'}}><i class="fab fa-github fa-lg"></i></a> */}
            </div>
        </div>
    )
}

export default projects;