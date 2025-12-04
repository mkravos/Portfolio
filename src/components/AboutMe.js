import "./style/Skills.css";
import React from "react";
import frontendPng from "../assets/style/frontend.png";
import backendPng from "../assets/style/backend.png";
import mobilePng from "../assets/style/mobile.png";
import frontendWebp from "../assets/style/frontend.webp";
import backendWebp from "../assets/style/backend.webp";
import mobileWebp from "../assets/style/mobile.webp";

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
                I'm a Software Engineer who builds full-stack and
                mobile applications. I've created software that makes
                a real difference for both businesses and everyday users.
                I'm passionate about innovation and crafting
                excellent experiences. I thrive in collaborative teams,
                where I can leverage my skills to build technology that matters.
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
                  <p className="Skills-paragraph">Go, Java, JavaScript, Python</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks:
                  </p>
                  <ul className="Skills-list">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Flask</li>
                  </ul>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Databases:
                  </p>
                  <ul className="Skills-list">
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div className="column Middle-column">
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
                    I leverage my skills to create simple user interfaces that
                    provide a rich feature set.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">HTML, CSS, JavaScript</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks &amp; Libraries:
                  </p>
                  <ul className="Skills-list">
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Material UI</li>
                  </ul>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Tools:
                  </p>
                  <ul className="Skills-list">
                    <li>Figma</li>
                    <li>Affinity Designer</li>
                    <li>Sass</li>
                  </ul>
                </div>
                <div className="column">
                  <picture>
                    <source srcSet={mobileWebp} type="image/webp" />
                    <img
                      src={mobilePng}
                      alt="Mobile Development"
                      className="Skill-image"
                    />
                  </picture>
                  <h1 className="title is-size-4 is-spaced">Mobile</h1>
                  <p className="Skills-intro-paragraph">
                    I craft intuitive and responsive user experiences that
                    seamlessly integrate functionality across platforms.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">Java, Swift, JavaScript</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks:
                  </p>
                  <ul className="Skills-list">
                    <li>Android</li>
                    <li>iOS</li>
                    <li>React Native</li>
                  </ul>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Tools:
                  </p>
                  <ul className="Skills-list">
                    <li>Android Studio</li>
                    <li>Gradle</li>
                    <li>Xcode</li>
                  </ul>
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
