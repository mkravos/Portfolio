import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import Nav from './components/Nav'
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function Home({ darkMode }) {
  return (
    <>
      <div id='introduction'><Introduction darkMode={darkMode} /></div>
      <div id='about-me'><AboutMe darkMode={darkMode} /></div>
      <div id='work'><Work darkMode={darkMode} /></div>
      <div id='projects'><Projects darkMode={darkMode} /></div>
      <div id='contact'><Footer darkMode={darkMode} /></div>
    </>
  );
}

function PostRoute({ darkMode }) {
  const { slug } = useParams();
  return <BlogPost slug={slug} darkMode={darkMode} />;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pendingScroll = useRef(null);

  const scrollToComponent = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On the home route, run any scroll queued while we were on another route.
  // On blog routes, jump to the top.
  useEffect(() => {
    if (location.pathname === '/') {
      if (pendingScroll.current) {
        const target = pendingScroll.current;
        pendingScroll.current = null;
        requestAnimationFrame(() => scrollToComponent(target));
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname]);

  // navigate to a static section, returning to the home route first if needed
  const goToSection = (target) => {
    if (location.pathname !== '/') {
      pendingScroll.current = target;
      navigate('/');
    } else {
      scrollToComponent(target);
    }
  };

  const openBlog = () => navigate('/blog');

  const goHome = () => {
    pendingScroll.current = null;
    navigate('/');
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

  const inBlog = location.pathname.startsWith('/blog');

  return (
    <div className='App'>
      <div id="navbar"><Nav darkMode={darkMode} setDarkMode={handleSetDarkMode} inBlog={inBlog} goToSection={goToSection} openBlog={openBlog} goHome={goHome} /></div>
      <div className='App-content'>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} />} />
          <Route path="/blog/:slug" element={<PostRoute darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}
