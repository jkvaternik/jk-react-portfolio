import React from 'react';

import Skill from './Skill/Skill';
import styles from './Project.module.css';

const project = (props) => {
    const skills = props.project.skills.map((skill, index) => {
        return <Skill key={skill + index} skill={skill} />;
    });

    return (
        <div className={styles.Project}>
            <a href={props.project.url} target='_blank' rel="noreferrer">
                <div className={styles.View} style={{ backgroundColor: props.project.backgroundColor }}>
                    <img src={props.project.img} alt={props.project.title + ' Image'}></img>
                    <span>View Source</span>
                </div>
            </a>


            <div className={styles.Details}>
                <h5>{props.project.title} <span style={{ marginLeft: '20px', color: '#B4B4B4' }}>{props.project.time}</span></h5>
                <p style={{ fontSize: '14px', lineHeight: '17px' }}>{props.project.desc}</p>
                <div className={styles.Skills}>
                    {skills}
                </div>
            </div>
        </div>
    )
}

export default project;