import "./style/Nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const closeMobileNav = () => {
    if (mobileNavVisible) {
      showMobileNav(false);
    }
  };

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

  const showMobileNav = () => {
    const target = document.getElementById("navMenu");
    const burger = document.querySelector(".navbar-burger");

    burger.classList.toggle("is-active");
    target.classList.toggle("is-active");
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <button
            className="navbar-item"
            onClick={goToHome}
          >
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
          </button>
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={showMobileNav}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            {inBlog ? (
              <Link
                to="/"
                className={`Nav-link navbar-item has-text-weight-normal`}
                onClick={goToHome}
              >
                Back to Main Site
              </Link>
            ) : (
              <>
                <a
                  href="/"
                  className={`Nav-link navbar-item has-text-weight-normal`}
                  onClick={(e) => scrollTo(e, "about-me")}
                >
                  About Me
                </a>
                <a
                  href="/"
                  className={`Nav-link navbar-item has-text-weight-normal`}
                  onClick={(e) => scrollTo(e, "work")}
                >
                  Work
                </a>
                <a
                  href="/"
                  className={`Nav-link navbar-item has-text-weight-normal`}
                  onClick={(e) => scrollTo(e, "projects")}
                >
                  Projects
                </a>
                <a
                  href="/"
                  className={`Nav-link navbar-item has-text-weight-normal`}
                  onClick={(e) => scrollTo(e, "contact")}
                >
                  Contact
                </a>
                <Link
                  to="/blog"
                  className={`Nav-link navbar-item has-text-weight-normal`}
                  onClick={goToBlog}
                >
                  Blog
                </Link>
              </>
            )}

            <div className="Nav-link navbar-item">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </div>
      </div>
      <UpArrow darkMode={darkMode} isArrowVisible={isArrowVisible} />
    </nav>
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
