import React from 'react';
import './Projects.css';

function Projects() {

    const projects = [
        {
            title: 'Personal Portfolio Website',
            description: "Using NextJs build this my own Personal Portfolio that you are seeing right now.",
            tags: ['NextJs', 'ReactStyledComponents'],
            source: 'https://github.com/Amrit-Maan2221/personal-portfolio',
            visit: 'https://personal-portfolio-bice-eight.vercel.app/',
            id: 0,
        },
        {
            title: 'E-Commerce Website',
            description: "A full Stack E-Commererce Website Built using MERN Stack, including building and updating user profiles, special admin facilities and making orders for buying products.",
            tags: ['React', 'MongoDB', 'NodeJs', 'ExpressJs'],
            source: 'https://github.com/Amrit-Maan2221/Storish--E-Commerce-Website',
            visit: 'https://under-work-1hivhbb69-amrit-maan2221.vercel.app/',
            id: 1,
        },
        {
            title: '.NET Text Editor Application',
            description: "A Text Editor Application just like Notepad built using WPF .NET, which allows you to Create, Read and Update your text files",
            tags: ['.NET', 'C#'],
            source: 'https://github.com/Amrit-Maan2221/Text-Editor-Application',
            visit: 'https://github.com/Amrit-Maan2221/Text-Editor-Application',
            id: 2,
        },
        {
            title: 'MAAN NEWS- News Website',
            description: "A News Website built using ReactJS styled with the help of Bootstrap. It loads news with the use of an Free API avaiable on the internet.",
            tags: ['ReactJs', 'Bootstrap'],
            source: 'https://github.com/Amrit-Maan2221/News-website-ReactJs',
            visit: 'https://github.com/Amrit-Maan2221/News-website-ReactJs',
            id: 3,
        },
        {
            title: 'Web Text Editor',
            description: "A Text Editor available on web used to manipulate the text with the features of dark and light mode.",
            tags: ['ReactJs', 'Bootstrap'],
            source: 'https://github.com/Amrit-Maan2221/Text-Editor-Using-React',
            visit: 'https://github.com/Amrit-Maan2221/Text-Editor-Using-React',
            id: 4,
        },
        {
            title: 'Amazon Clone',
            description: "Amazon Clone done using ReactJs with authetication system done with the help of firebase (Currently UnderWork)",
            tags: ['ReactJs', 'Firebase'],
            source: 'https://github.com/Amrit-Maan2221/Amazon-clone-using-React',
            visit: 'https://clone-by-amrit.web.app/',
            id: 5,
        },
        {
            title: 'iNotebook- Your Notes on Cloud',
            description: "A Web App which helps the user to make and store their Notes on the cloud.",
            tags: ['ReactJs', 'MongoDB', 'NodeJS', 'ExpressJS'],
            source: 'https://github.com/Amrit-Maan2221/iNotebook-MERN',
            visit: 'https://under-work.vercel.app/',
            id: 6,
        },
        {
            title: 'C# Client Server Model',
            description: "A Simple C# Game based on client server model in which a user has to guess the right number that matches the number guessed by the client based on TCP-IP Interprocess Communication.",
            tags: ['C#', 'TCP-IP', 'Sockets'],
            source: 'https://github.com/Amrit-Maan2221/C-game-based-on-client-server-model',
            visit: 'https://github.com/Amrit-Maan2221/C-game-based-on-client-server-model',
            id: 7,
        },


    ];




    return (
        <div id="projects" className='section'>
            <div className='section_divider' />
            <h2 className='section_title'>Projects</h2>
            <div className='cards_container'>
                {
                    projects.map(({ id, title, description, tags, source, visit }) => (
                        <div className='card_list' key={id}>
                            <div className='title_content'>
                                <h3>{title}</h3>
                                <hr />
                            </div>
                            <p className='card_description'>{description}</p>
                            <div>
                                <div className='tag_title'>Stack</div>
                                <ul className='tag_list'>
                                    {tags.map((tag, index) => (
                                        <li className='tag' key={index}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='utility_list'>
                                <a href={visit}>Code</a>
                                <a href={source}>Source</a>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div >
    )
}

export default Projects