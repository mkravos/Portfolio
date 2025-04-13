import './style/Nav.css'
import React, { useState, useEffect } from 'react';
import logoPng from '../assets/logo.png';
import logoWebp from '../assets/logo.webp';
import ThemeToggle from './ThemeToggle';

export default function Nav({ darkMode, setDarkMode, scrollToComponent }) {
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
                        <picture>
                            <source srcSet={logoWebp} type="image/webp" />
                            <img className="logo" src={logoPng} alt="logo" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                        </picture>
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
                        <a href="/" className={`Nav-link navbar-item has-text-weight-normal`} onClick={(e) => scrollTo(e, 'socials')}>Social</a>

                        <div className="Nav-link navbar-item">
                            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </div>
                    </div>
                </div>
            </div>
            <UpArrow darkMode={darkMode} isArrowVisible={isArrowVisible} setIsArrowVisible={(yesno) => setIsArrowVisible(yesno)} />
        </nav>
    );
}

function UpArrow({ darkMode, isArrowVisible, setIsArrowVisible }) {
    const handleScrollUp = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsArrowVisible(false)
    };

    if (isArrowVisible) {
        return (
            <div i className={`Up-arrow-btn ${darkMode ? 'has-text-info' : 'has-text-link'}`}><button onClick={handleScrollUp}>^</button></div>
        );
    }
}