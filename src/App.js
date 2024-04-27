import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Introduction from './components/Introduction';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      <Nav darkMode={darkMode} />
      <div className='App-content'>
        <Introduction darkMode={darkMode} />
      </div>
    </div>
  );
}
