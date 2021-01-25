import React from 'react';

import Skill from './Skill/Skill';
import styles from './Project.module.css';

import img from '../../../assets/images/kript.png'

const project = (props) => {
    const skills = props.project.skills.map((skill, index) => {
        return <Skill key={skill + index} skill={skill} />;
    });

    return (
        <div className={styles.Project}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'salmon', width: '100%', height: '300px', borderRadius: '10px 10px 0 0'}}>
                <img src={img} alt={props.project.title + ' Image'}></img>
            </div>
            <div className={styles.Details}>
                <h5>{props.project.title} <span style={{marginLeft: '20px', color: '#B4B4B4'}}>{props.project.time}</span></h5>
                <p>This was a cool project!</p>
                <div className={styles.Skills}>
                    {skills}
                </div>
            </div>
        </div>
    )
}

export default project;