import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToComponent = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSetDarkMode = (darkMode) => {
    setDarkMode(darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }

  // listens for dark mode or light mode and updates as necessary based on system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = event => {
      const colorScheme = event.matches ? "dark" : "light";
      handleSetDarkMode(colorScheme === 'dark');
    };

    if (localStorage.getItem('darkMode') !== null) {
      handleSetDarkMode(localStorage.getItem('darkMode') === 'true');
    } else {
      mediaQuery.addEventListener('change', handleChange);
      handleSetDarkMode(mediaQuery.matches);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className='App'>
      <div id="navbar"><Nav darkMode={darkMode} setDarkMode={handleSetDarkMode} scrollToComponent={(e, target) => scrollToComponent(e, target)} /></div>
      <div className='App-content'>
        <div id='introduction'><Introduction darkMode={darkMode} /></div>
        <div id='about-me'><AboutMe darkMode={darkMode} /></div>
        <div id='work'><Work darkMode={darkMode} /></div>
        <div id='projects'><Projects darkMode={darkMode} /></div>
        <div id='contact'><Footer darkMode={darkMode} /></div>
      </div>
    </div>
  );
}
