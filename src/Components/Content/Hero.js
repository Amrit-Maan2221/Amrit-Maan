import React from 'react';
import Blogs from './Blogs/Blogs';
import './Hero.css';

function Hero(props) {

    return (
        props.main === "main" ?
            <div className='hero_container section'>
                <h2 className='section_title'>Hi, I'm Amrit <br />Your Software Engineer</h2>
                <p className='section_text'>
                    Second Year Software Engineering Technology Student at Conestoga College who gets a genuine kick out of leveraging technology.
                </p>
                <button className='hero_button' onClick={() => window.location.href = "/Resume_Amrit.pdf"}> Get Resume </button>
            </div>
            :
            <>
                <div className='hero_container section'>
                    <h2 className='section_title'>The Blogs <br />that never fails to amaze</h2>
                    <p className='section_text'>
                        I write blogs related to development. I am sure these blogs will add value to your life.
                    </p>
                    <a href="#blogs">
                        <button className='hero_button' > Scroll </button>
                    </a>
                </div>
                <div id="blogs">
                    <Blogs />
                </div>
            </>
    );
}

export default Hero;
