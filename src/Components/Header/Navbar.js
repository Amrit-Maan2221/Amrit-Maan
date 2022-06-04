import React, { useState } from 'react';
import './Navbar.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function openCloseMenu() {
        if (toggleMenu === true) {
            setToggleMenu(false);
        }
        else {
            setToggleMenu(true);
        }
    }

    return (
        <nav className='navbar_container'>
            <div>
                <Link to="/" className='navbar_logo'>
                    <DiCssdeck className='navbar_logo_icon' /> <span>Amrit</span>
                </Link>
            </div>
            <ul className='navbar_links'>
                <li><a href="/#projects">Projects</a></li>
                {/* <li><Link to="/blogs">Blogs</Link></li> */}
                <li><a href="/#Tech">Technologies</a></li>
                <li><a href="/#about">About</a></li>
            </ul>
            <div className='navbar_socialLinks'>
                <a href="https://github.com/Amrit-Maan2221">
                    <AiFillGithub className='navbar_socialIcons' color='black' />
                </a>
                <a href="https://www.linkedin.com/in/amritpal-singh-11212001/">
                    <AiFillLinkedin className='navbar_socialIcons' color='black' />
                </a>
                <a href="https://www.instagram.com/amrit_maan.21/">
                    <AiFillInstagram className='navbar_socialIcons' color='black' />
                </a>
            </div>
            <div className="navbar_smallScreen">
                <GiHamburgerMenu color="#000" fontSize={27} onClick={() => openCloseMenu()} />
                {toggleMenu && (
                    <div className='navbar_smallScreenMenu'>
                        <GiHamburgerMenu className="navbar_smallScreen_openClose_icon" color="#FFF" onClick={() => openCloseMenu()} />
                        <ul className='navbar_smallScreen_links'>
                            <li><a onClick={() => openCloseMenu()} href="/#projects">Projects</a></li>
                            {/* <li><Link onClick={() => openCloseMenu()} to="/blogs">Blogs</Link></li> */}
                            <li><a onClick={() => openCloseMenu()} href="/#Tech">Technologies</a></li>
                            <li><a onClick={() => openCloseMenu()} href="/#about">About</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
