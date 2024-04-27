import React, { useRef, useState } from 'react';
import logo from '../assets/logo.png';

export default function Nav({ darkMode }) {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const myRef = useRef(null);

    const scrollToComponent = (e) => {
        e.preventDefault();
        if (myRef.current) {
            myRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const showMobileNav = () => {
        const target = document.getElementById('navMenu');
        const burger = document.querySelector('.navbar-burger');

        burger.classList.toggle('is-active');
        target.classList.toggle('is-active');
        setMobileNavVisible(!mobileNavVisible);
    };

    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <button className="navbar-item" onClick={() => window.location.reload()}>
                        <img className="logo" src={logo} alt="logo" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                    </button>
                    <button className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={showMobileNav}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-end">
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={scrollToComponent}>About Me</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={scrollToComponent}>Work</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={scrollToComponent}>Projects</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={scrollToComponent}>Contributions</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={scrollToComponent}>Socials</a>

                        <div className='navbar-item'>
                            <a style={{ marginLeft: `${mobileNavVisible ? 0 : 10}`, marginTop: `${mobileNavVisible ? 10 : 0}` }} className={`button is-rounded has-text-weight-normal ${darkMode ? 'is-info' : 'is-link'}`} href="mailto:contact@majkravos.com?subject=Hello, Maj!">Say Hello</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}