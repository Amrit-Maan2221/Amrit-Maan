import React from 'react';
import './Skills.css';
import { DiFirebase, DiReact, DiJava, DiNodejs, DiBootstrap } from 'react-icons/di';
import { SiAzuredevops, SiFramer } from 'react-icons/si';

function Skills() {
    return (
        <div id="Tech" className='section'>
            <div className='section_divider' />
            <h2 className='section_title'>Skills</h2>
            <p className='section_text'>
                I've worked with a range a technologies in the development world.
            </p>
            <ul className='skillset'>
                <li>
                    <div className='skill_list_container'>
                        <DiJava size="3rem" />
                        <h4 className='skill_title'>Programming Languages</h4>
                        <p className='skill_paragraph'>Java, C/C++, Python, C#, JavaScript</p>
                    </div>
                </li>
                <li>
                    <div className='skill_list_container'>
                        <DiNodejs size="3rem" />
                        <h4 className='skill_title'>Backend Technologies</h4>
                        <p className='skill_paragraph'>NodeJs, PHP, ExpressJS, .NET Core</p>
                    </div>
                </li>
                <li>
                    <div className='skill_list_container'>
                        <DiReact size="3rem" />
                        <h4 className='skill_title'>Fronend Technologies</h4>
                        <p className='skill_paragraph'>ReactJs, jQuery, Bootstrap, NextJs</p>
                    </div>
                </li>
                <li>
                    <div className='skill_list_container'>
                        <DiFirebase size="3rem" />
                        <h4 className='skill_title'>Databases</h4>
                        <p className='skill_paragraph'>MySQL, MongoDB</p>
                    </div>
                </li>
                <li>
                    <div className='skill_list_container'>
                        <SiFramer size="3rem" />
                        <h4 className='skill_title'>Other Frameworks</h4>
                        <p className='skill_paragraph'>.NET</p>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Skills