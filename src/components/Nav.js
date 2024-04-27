import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Nav({ darkMode, scrollToComponent }) {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [isArrowVisible, setIsArrowVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsArrowVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = (e, target) => {
        e.preventDefault();

        if (mobileNavVisible) {
            showMobileNav(false);
        }

        scrollToComponent(target);
        setIsArrowVisible(true);
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
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={(e) => scrollTo(e, 'about-me')}>About Me</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={(e) => scrollTo(e, 'work')}>Work</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={(e) => scrollTo(e, 'projects')}>Projects</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={(e) => scrollTo(e, 'contributions')}>Contributions</a>
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={(e) => scrollTo(e, 'socials')}>Socials</a>

                        <div className='navbar-item'>
                            <a style={{ marginLeft: `${mobileNavVisible ? 0 : 10}`, marginTop: `${mobileNavVisible ? 10 : 0}` }} className={`button is-rounded has-text-weight-normal`} href="mailto:contact@majkravos.com?subject=Hello, Maj!">Say Hello</a>
                        </div>
                    </div>
                </div>
            </div>
            <UpArrow isArrowVisible={isArrowVisible} setIsArrowVisible={(yesno) => setIsArrowVisible(yesno)} />
        </nav>
    );
}

function UpArrow({ isArrowVisible, setIsArrowVisible }) {
    const handleScrollUp = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsArrowVisible(false)
    };

    if (isArrowVisible) {
        return (
            <div i className='Up-arrow-btn has-text-link'><button onClick={handleScrollUp}>^</button></div>
        );
    }
}