import "./style/Figure.css";
import React from "react";
import { Section, Container, Columns, Heading, Button } from "react-bulma-components";
import parallaxPng from "../assets/projects/parallax.png";
import vivaplusPng from "../assets/projects/vivaplus.png";
import latitudePng from "../assets/projects/latitude.png";
import percipiaPng from "../assets/clients/percipia-logo.png";
import asarPng from "../assets/clients/asar-logo.png";
import niuPng from "../assets/clients/niu-logo.png";
import niuDarkPng from "../assets/clients/niu-logo-dark.png";
import parallaxWebp from "../assets/projects/parallax.webp";
import vivaplusWebp from "../assets/projects/vivaplus.webp";
import latitudeWebp from "../assets/projects/latitude.webp";
import percipiaWebp from "../assets/clients/percipia-logo.webp";
import asarWebp from "../assets/clients/asar-logo.webp";
import niuWebp from "../assets/clients/niu-logo.webp";
import niuDarkWebp from "../assets/clients/niu-logo-dark.webp";

function ProjectButton({ darkMode, href, children }) {
  return (
    <Button
      renderAs="a"
      color={darkMode ? "info" : "white"}
      outlined
      rounded
      href={href}
      target="_blank noopener noreferrer"
    >
      <span className="Figure-link-text">{children}</span>
    </Button>
  );
}

export default function Work({ darkMode }) {
  return (
    <div>
      <Section size="medium" className="work is-transparent has-text-centered">
        <Container className="is-narrow">
          <Heading spaced className="is-size-3-desktop is-size-4-mobile">
            My Recent Work
          </Heading>
          <Heading subtitle renderAs="h2" className="Work-subtitle is-size-5-desktop">
            Here are a few products I've worked on. Want to see other
            examples?&nbsp;
            <a href="mailto:contact@majkravos.com?subject=Maj, I'd like to see more of your work!">
              Email me.
            </a>
          </Heading>
          <div className="project-grid">
            <Columns multiline className="is-mobile">
              <Columns.Column className="is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <picture>
                    <source srcSet={parallaxWebp} type="image/webp" />
                    <img
                      className="project-thumb"
                      style={{
                        width: "90%",
                        height: "auto",
                      }}
                      src={parallaxPng}
                      alt="Percipia's Parallax Product"
                    />
                  </picture>
                  <p className="product-title has-text-light parallax">
                    PARALLAX
                  </p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-6 is-size-4-widescreen">
                      Developed a completely redesigned frontend for the
                      Parallax platform in React, replacing its legacy Java
                      Server Pages interface. This modern implementation
                      delivers enhanced user experience with responsive design
                      and optimal compatibility across all devices and displays.
                    </h1>
                    <ProjectButton darkMode={darkMode} href="https://percipia.com/parallax">
                      Visit PARALLAX Product Page&nbsp;&nbsp;&gt;
                    </ProjectButton>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </Columns.Column>
              <Columns.Column className="is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <picture>
                    <source srcSet={vivaplusWebp} type="image/webp" />
                    <img
                      className="project-thumb"
                      style={{
                        width: "80%",
                        height: "auto",
                      }}
                      src={vivaplusPng}
                      alt="Percipia's VIVA+ Product"
                    />
                  </picture>
                  <p className="product-title has-text-light vivaplus">VIVA+</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-6 is-size-4-widescreen">
                      Spearheaded the development of Percipia's
                      hospitality-integrated Alexa skill, partnering with
                      Amazon's A4H team to create an intuitive multimodal
                      solution that enhances the guest experience in hotel
                      rooms.
                    </h1>
                    <ProjectButton darkMode={darkMode} href="https://percipia.com/viva+">
                      Visit VIVA+ Product Page&nbsp;&nbsp;&gt;
                    </ProjectButton>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </Columns.Column>
              <Columns.Column className="is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <picture>
                    <source srcSet={latitudeWebp} type="image/webp" />
                    <img
                      className="project-thumb"
                      style={{
                        width: "80%",
                        height: "auto",
                      }}
                      src={latitudePng}
                      alt="Percipia's Latitude Product"
                    />
                  </picture>
                  <p className="product-title has-text-light latitude">
                    LATITUDE
                  </p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-6 is-size-4-widescreen">
                      Engineered and delivered client-specific versions of the
                      Latitude mobile application for hotel guests, implementing
                      custom UI/UX designs, feature sets, and third-party API
                      integrations deployed across numerous hotel properties to
                      enhance the guest experience and meet the unique
                      requirements of Percipia's hospitality clients.
                    </h1>
                    <ProjectButton darkMode={darkMode} href="https://percipia.com/mobilesolution">
                      Visit LATITUDE Product Page&nbsp;&nbsp;&gt;
                    </ProjectButton>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </Columns.Column>
              <Columns.Column className="is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <p className="product-title has-text-light asarconnect">
                    <div style={{ width: "80%" }}>
                      <span className="asar">ASAR</span>
                      <span className="connect">Connect</span>
                    </div>
                  </p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-6 is-size-4-widescreen">
                      Created an AWS-hosted internal web app called ASARConnect,
                      providing ASAR Digital the capability to onboard, keep
                      track of, and manage their freelancers and offshore
                      employees seamlessly.
                    </h1>
                    <ProjectButton darkMode={darkMode} href="https://asardigital.com/">
                      Visit ASAR Digital's Website&nbsp;&nbsp;&gt;
                    </ProjectButton>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </Columns.Column>
            </Columns>
          </div>
        </Container>
      </Section>
      <Section size="medium" className="clients is-transparent has-text-centered">
        <Container className="is-narrow">
          <Columns centered>
            <Columns.Column className="Clients-title-column" size="half">
              <Heading className="is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                I'm proud to have worked at some impactful companies:
              </Heading>
            </Columns.Column>
          </Columns>
          <div className="client-grid">
            <Columns centered multiline className="is-mobile">
              <Columns.Column className="is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <picture>
                    <source srcSet={percipiaWebp} type="image/webp" />
                    <img
                      className="client-logo"
                      src={percipiaPng}
                      alt="Logo of Percipia"
                    />
                  </picture>
                </figure>
              </Columns.Column>
              <Columns.Column className="is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <picture>
                    <source srcSet={asarWebp} type="image/webp" />
                    <img
                      className="client-logo"
                      src={asarPng}
                      alt="Logo of ASAR Digital"
                    />
                  </picture>
                </figure>
              </Columns.Column>
              <Columns.Column className="is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <picture>
                    <source
                      srcSet={darkMode ? niuWebp : niuDarkWebp}
                      type="image/webp"
                    />
                    <img
                      className="client-logo"
                      src={darkMode ? niuPng : niuDarkPng}
                      alt="Logo of Northern Illinois University"
                    />
                  </picture>
                </figure>
              </Columns.Column>
            </Columns>
          </div>
        </Container>
      </Section>
    </div>
  );
}
