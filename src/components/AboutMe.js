import "./style/Skills.css";
import React from "react";
import frontendPng from "../assets/style/frontend.png";
import backendPng from "../assets/style/backend.png";
import frontendWebp from "../assets/style/frontend.webp";
import backendWebp from "../assets/style/backend.webp";

export default function AboutMe({ darkMode }) {
  return (
    <div>
      <section className="About-me section is-medium has-text-centered is-long">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title has-text-white is-spaced is-size-3-desktop is-size-4-mobile">
                Hi, I'm Maj Kravos.
              </h1>
              <h2 className="subtitle has-text-white-muted is-size-5-desktop has-text-weight-normal">
                I'm a software engineer with expertise in full-stack web and mobile development, and DevOps.
                Innovation and crafting great experiences keep me motivated, and I enjoy building software
                that creates real impact for both businesses and everyday users.
                Working with collaborative teams inspires me to turn ideas into technology that matters.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section skills has-text-centered">
        <div className="container Skills-container is-narrow">
          <div className="box">
            <div className="content">
              <div className="columns is-centered">
                <div className="column">
                  <picture>
                    <source srcSet={backendWebp} type="image/webp" />
                    <img
                      src={backendPng}
                      alt="Backend Development"
                      className="Skill-image"
                    />
                  </picture>
                  <h1 className="title is-size-4 is-spaced">
                    Backend &amp; DB
                  </h1>
                  <p className="Skills-intro-paragraph">
                    I value lightweight, maintainable, and scalable solutions to
                    complex problems.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">Go, Java, JavaScript</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks & Libraries:
                  </p>
                  <div className="Skills-list">
                    <span>Node</span>
                    <span>Express</span>
                    <span>Axios</span>
                    <span>Gin</span>
                  </div>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Databases:
                  </p>
                  <div className="Skills-list">
                    <span>PostgreSQL</span>
                    <span>BoltDB</span>
                    <span>SQLite</span>
                  </div>
                </div>
                <div className="column-divider" />
                <div className="column">
                  <picture>
                    <source srcSet={frontendWebp} type="image/webp" />
                    <img
                      src={frontendPng}
                      alt="Frontend Development"
                      className="Skill-image"
                    />
                  </picture>
                  <h1 className="title is-size-4 is-spaced">Frontend</h1>
                  <p className="Skills-intro-paragraph">
                    I leverage my skills to create clean user interfaces that
                    provide a rich feature set.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">HTML, CSS, JavaScript</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks &amp; Libraries:
                  </p>
                  <div className="Skills-list">
                    <span>React</span>
                    <span>React Native</span>
                    <span>Redux</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Material UI</span>
                    <span>Bulma</span>
                    <span>React Router</span>
                    <span>Alexa Presentation Language</span>
                  </div>
                </div>
              </div>
              <div className="Bottom-column column">
                <h1 className="title is-size-4 is-spaced">
                  DevOps &amp; Infrastructure:
                </h1>
                <p className="Skills-intro-paragraph">
                  Docker, GitLab CI/CD, AWS, Heroku, Netlify, Vultr, Git, Linux
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
