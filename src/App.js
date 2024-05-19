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

  // listens for dark mode or light mode and updates as necessary based on system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = event => {
      const colorScheme = event.matches ? "dark" : "light";
      setDarkMode(colorScheme === 'dark');
    };

    mediaQuery.addEventListener('change', handleChange);
    setDarkMode(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className='App'>
      <div id="navbar"><Nav darkMode={darkMode} scrollToComponent={(e, target) => scrollToComponent(e, target)} /></div>
      <div className='App-content'>
        <div id='introduction'><Introduction darkMode={darkMode} /></div>
        <div id='about-me'><AboutMe darkMode={darkMode} /></div>
        <div id='work'><Work darkMode={darkMode} /></div>
        <div id='projects'><Projects darkMode={darkMode} /></div>
        <div id='socials'><Footer darkMode={darkMode} /></div>
      </div>
    </div>
  );
}
