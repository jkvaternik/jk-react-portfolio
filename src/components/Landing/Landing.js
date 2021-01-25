import React from 'react';

import Projects from '../Projects/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import styles from './Landing.module.css';

const projects = [
        {
            title: 'Kript',
            time: 'Jan. 2020',
            desc: 'Lorem ipsum dolor sit amet, ',
            skills: ['React.js', 'HTML', 'CSS', 'REST APIs']
        },
        {
            title: 'Burger Builder',
            time: 'Jan. 2020',
            desc: 'Lorem ipsum dolor sit amet, ',
            skills: ['React.js', 'HTML', 'CSS', 'REST APIs']
        },
        {
            title: 'Type Is Information Poster',
            time: 'Sept. - Dec. 2020',
            desc: 'Lorem ipsum dolor sit amet, ',
            skills: ['Adobe InDesign', 'Adobe Illustrator']
        },
        {
            title: 'NEU Contact Tracing App',
            time: 'Oct. - Dec. 2020',
            desc: 'Lorem ipsum dolor sit amet, ',
            skills: ['Figma', 'User Research', 'Usability Testing']
        },
        {
            title: 'Spreadsheets.ood',
            time: 'Nov. - Dec. 2019',
            desc: 'Lorem ipsum dolor sit amet, ',
            skills: ['Java', 'Object-Oriented Design']
        },
        {
            title: 'explore',
            time: 'Nov. - Dec. 2019',
            desc: 'Lorem ipsum dolor sit amet, ',
            skills: ['Adobe XD', 'Story-telling', 'Prototyping']
        },
    ];
    


const landing = (props) => {
    return (
        <section className={styles.Grid}>
            <div style={{ float: 'left' }}>
                <div style={{ position: 'relative', top: '-100px', left: '-14px', gridArea: 'svg' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="561" height="1789" viewBox="0 0 561 1789">
                        <text id="jaime_" data-name="jaime " transform="translate(322) rotate(90)" fill="#606da3" fontSize="254" fontFamily="MuseoSans-500, Museo Sans" fontWeight="500" letterSpacing="0.1em"><tspan x="0" y="0">Jaime </tspan></text>
                        <text id="Kvaternik" transform="translate(66 492) rotate(90)" fill="#606da3" fontSize="254" fontFamily="MuseoSans-500, Museo Sans" fontWeight="500" letterSpacing="0.1em"><tspan x="0" y="0">Kvaternik</tspan></text>
                    </svg>
                </div>
            </div>
            <div className={styles.Background}></div>
            <div style={{ float: 'left' }}>
                <div className={styles.Landing}>
                    <h1>Hello!</h1>
                    <h4>I'm Jaime, a developer + designer seeking to humanize technology in a user-centric manner.</h4>
                    <div className={styles.Scroll}>
                        <span>scroll down to learn more!</span>
                        <FontAwesomeIcon icon={faArrowDown} style={{ margin: '20px 0px' }} />
                    </div>
                </div>
                <Projects projects={projects} />
            </div>
        </section>
    );
}

export default landing;