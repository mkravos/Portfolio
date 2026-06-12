import "./style/Nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bulma-components";
import logoPng from "../assets/logo.png";
import logoWebp from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Nav({ darkMode, setDarkMode, inBlog, goToSection, openBlog, goHome }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileNav = () => setMobileNavVisible(false);

  const toggleMobileNav = () => setMobileNavVisible((visible) => !visible);

  const scrollTo = (e, target) => {
    e.preventDefault();
    closeMobileNav();
    goToSection(target);
  };

  const goToBlog = (e) => {
    e.preventDefault();
    closeMobileNav();
    openBlog();
  };

  const goToHome = (e) => {
    if (e) e.preventDefault();
    closeMobileNav();
    goHome();
  };

  return (
    <Navbar
      transparent
      active={mobileNavVisible}
      aria-label="main navigation"
    >
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs="button" onClick={goToHome}>
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                className="logo"
                src={logoPng}
                alt="logo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </picture>
          </Navbar.Item>
          <Navbar.Burger
            aria-label="menu"
            aria-expanded={mobileNavVisible}
            onClick={toggleMobileNav}
          />
        </Navbar.Brand>
        <Navbar.Menu id="navMenu">
          <Navbar.Container align="right">
            {inBlog ? (
              <Navbar.Item
                renderAs={Link}
                to="/"
                className="Nav-link has-text-weight-normal"
                onClick={goToHome}
              >
                Back to Main Site
              </Navbar.Item>
            ) : (
              <>
                <Navbar.Item
                  renderAs="a"
                  href="/"
                  className="Nav-link has-text-weight-normal"
                  onClick={(e) => scrollTo(e, "about-me")}
                >
                  About Me
                </Navbar.Item>
                <Navbar.Item
                  renderAs="a"
                  href="/"
                  className="Nav-link has-text-weight-normal"
                  onClick={(e) => scrollTo(e, "work")}
                >
                  Work
                </Navbar.Item>
                <Navbar.Item
                  renderAs="a"
                  href="/"
                  className="Nav-link has-text-weight-normal"
                  onClick={(e) => scrollTo(e, "projects")}
                >
                  Projects
                </Navbar.Item>
                <Navbar.Item
                  renderAs="a"
                  href="/"
                  className="Nav-link has-text-weight-normal"
                  onClick={(e) => scrollTo(e, "contact")}
                >
                  Contact
                </Navbar.Item>
                <Navbar.Item
                  renderAs={Link}
                  to="/blog"
                  className="Nav-link has-text-weight-normal"
                  onClick={goToBlog}
                >
                  Blog
                </Navbar.Item>
              </>
            )}

            <Navbar.Item renderAs="div" className="Nav-link">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
      <UpArrow darkMode={darkMode} isArrowVisible={isArrowVisible} />
    </Navbar>
  );
}

function UpArrow({ darkMode, isArrowVisible }) {
  const handleScrollUp = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`Up-arrow-btn ${darkMode ? "has-text-info" : "has-text-link"} ${isArrowVisible ? "Up-arrow-visible" : "Up-arrow-hidden"}`}
    >
      <button onClick={handleScrollUp}>
        <KeyboardArrowUpIcon sx={{ fontSize: "inherit" }} />
      </button>
    </div>
  );
}
