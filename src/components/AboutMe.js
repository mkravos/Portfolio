import "./style/Skills.css";
import React from "react";
import frontend from "../assets/style/frontend.png";
import backend from "../assets/style/backend.png";
import mobile from "../assets/style/mobile.png";

export default function AboutMe({ darkMode }) {
  return (
    <div>
      <section className="About-me section is-medium has-text-centered is-long">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title has-text-white is-spaced is-size-3-desktop is-size-4-mobile">
                Hi, I’m Maj Kravos.
              </h1>
              <h2 className="subtitle has-text-white-muted is-size-5-desktop has-text-weight-normal">
                An experienced Software Engineer specializing in full-stack and
                mobile app development, with a track record in creating quality
                software for businesses and consumers. Driven by a passion for
                innovation and a commitment to excellence, I thrive in dynamic
                environments, leveraging my skills to develop impactful
                technology.
              </h2>
              <div className="My-stack title has-text-white-muted is-spaced is-size-4-desktop is-size-4-mobile">
                My Stack
              </div>
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
                  <img
                    src={backend}
                    alt="Backend Development"
                    className="Skill-image"
                  />
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
                  <p className="Skills-paragraph">Go, JavaScript, Python</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Tools &amp; Frameworks:
                  </p>
                  <ul className="Skills-list">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Flask</li>
                  </ul>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Database Management Systems:
                  </p>
                  <ul className="Skills-list">
                    <li>PostgreSQL</li>
                    <li>MariaDB / MySQL</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div className="column Middle-column">
                  <img
                    src={frontend}
                    alt="Frontend Development"
                    className="Skill-image"
                  />
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
                    Libraries &amp; Frameworks:
                  </p>
                  <ul className="Skills-list">
                    <li>React.js</li>
                    <li>Bulma</li>
                    <li>Bootstrap</li>
                  </ul>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Tools:
                  </p>
                  <ul className="Skills-list">
                    <li>Figma</li>
                    <li>Affinity Designer</li>
                    <li>Affinity Publisher</li>
                  </ul>
                </div>
                <div className="column">
                  <img
                    src={mobile}
                    alt="Mobile Development"
                    className="Skill-image"
                  />
                  <h1 className="title is-size-4 is-spaced">Mobile</h1>
                  <p className="Skills-intro-paragraph">
                    I craft intuitive and responsive user experiences that
                    seamlessly integrate functionality across platforms.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">Java, JavaScript</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Tools:
                  </p>
                  <ul className="Skills-list">
                    <li>Android Studio</li>
                    <li>Gradle</li>
                  </ul>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Libraries:
                  </p>
                  <ul className="Skills-list">
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
              <div className="Bottom-column column">
                <h1 className="title is-size-4 is-spaced">
                  What I use to bring it all together:
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
