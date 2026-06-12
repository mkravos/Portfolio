import "./style/Skills.css";
import React from "react";
import { Section, Container, Columns, Box, Content, Heading } from "react-bulma-components";
import frontendPng from "../assets/style/frontend.png";
import backendPng from "../assets/style/backend.png";
import frontendWebp from "../assets/style/frontend.webp";
import backendWebp from "../assets/style/backend.webp";

export default function AboutMe({ darkMode }) {
  return (
    <div>
      <Section size="medium" className="About-me has-text-centered is-long">
        <Container>
          <Columns centered>
            <Columns.Column size="three-fifths">
              <Heading
                spaced
                className="has-text-white is-size-3-desktop is-size-4-mobile"
              >
                Hi, I'm Maj Kravos.
              </Heading>
              <Heading
                subtitle
                renderAs="h2"
                className="has-text-white-muted is-size-5-desktop has-text-weight-normal"
              >
                I'm an innovative engineer with 4+ years delivering full-stack
                web and mobile solutions in Go, Java, React, AWS, iOS, and
                Android. Skilled in databases, Docker, CI/CD, API integrations,
                and AI-assisted development to drive product growth and
                efficiency. Experienced with the entire software development
                lifecycle, from design to deployment and maintenance. Passionate
                about creating intuitive user experiences and solving complex
                problems with elegant, scalable solutions.
              </Heading>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
      <Section className="skills has-text-centered">
        <Container className="Skills-container is-narrow">
          <Box>
            <Content>
              <Columns centered>
                <Columns.Column>
                  <picture>
                    <source srcSet={backendWebp} type="image/webp" />
                    <img
                      src={backendPng}
                      alt="Backend Development"
                      className="Skill-image"
                    />
                  </picture>
                  <Heading spaced className="is-size-4">
                    Backend &amp; DB
                  </Heading>
                  <p
                    className="Skills-intro-paragraph"
                    style={{ marginLeft: 25, marginRight: 25 }}
                  >
                    I value lightweight, maintainable, and scalable solutions to
                    complex problems.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">Go, Java</p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks &amp; Libraries:
                  </p>
                  <div className="Skills-list">
                    <span>Node.js</span>
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
                </Columns.Column>
                <div className="column-divider" />
                <Columns.Column>
                  <picture>
                    <source srcSet={frontendWebp} type="image/webp" />
                    <img
                      src={frontendPng}
                      alt="Frontend Development"
                      className="Skill-image"
                    />
                  </picture>
                  <Heading spaced className="is-size-4">
                    Frontend &amp; Mobile
                  </Heading>
                  <p
                    className="Skills-intro-paragraph"
                    style={{ marginLeft: 25, marginRight: 25 }}
                  >
                    I leverage my skills to create clean user interfaces that
                    provide a rich feature set.
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Languages:
                  </p>
                  <p className="Skills-paragraph">
                    JavaScript, TypeScript, HTML, CSS
                  </p>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Frameworks &amp; Libraries:
                  </p>
                  <div className="Skills-list">
                    <span>React</span>
                    <span>Alexa Presentation Language</span>
                    <span>Gradle</span>
                  </div>
                  <p className="list-title has-text-link has-text-weight-normal">
                    Mobile:
                  </p>
                  <div className="Skills-list">
                    <span>React Native</span>
                    <span>Swift (iOS)</span>
                    <span>Kotlin (Android)</span>
                  </div>
                </Columns.Column>
              </Columns>
              <div className="Bottom-column column">
                <Heading spaced className="is-size-4">
                  DevOps &amp; Infrastructure:
                </Heading>
                <p
                  className="Skills-intro-paragraph"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span>
                    Docker, GitLab CI/CD &amp; GitHub Actions, AWS, Heroku,
                    Netlify, Vultr, Git, Linux, Fastlane
                  </span>
                  <span style={{ marginTop: 5 }}>
                    Ollama (self-hosted LLMs), Claude Code, GitHub Copilot,
                    OpenAI Codex, and other AI-assisted development tools
                  </span>
                </p>
              </div>
            </Content>
          </Box>
        </Container>
      </Section>
    </div>
  );
}
