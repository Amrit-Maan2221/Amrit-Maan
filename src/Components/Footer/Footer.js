import React from 'react';
import "./Footer.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <div className='footer_wrapper section'>
            <ul>
                <div className='personal_conatact_container'>
                    <h4>Call</h4>
                    <a className='contact_personal' href="tel:+1-226-988-3850">+1 226 988 3850</a>
                </div>
                <div className='personal_conatact_container'>
                    <h4>E-Mail</h4>
                    <a className='contact_personal' href="mailto:AmritMaan2001@gmail.com">AmritMaan2001@gmail.com</a>
                </div>
            </ul>
            <div className='social_icon_container'>
                <div className='slogan'>Process - It's Like Heaven!</div>
                <div className='media_conatacts'>
                    <a href="https://github.com/Amrit-Maan2221">
                        <AiFillGithub size="3rem" color='black' />
                    </a>
                    <a href="https://www.linkedin.com/in/amritpal-singh-11212001/">
                        <AiFillLinkedin size="3rem" color='black' />
                    </a>
                    <a href="https://www.instagram.com/amrit_maan.21/">
                        <AiFillInstagram size="3rem" color='black' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer