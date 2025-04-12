import "./style/Figure.css";
import React from "react";
import parallaxLogoPng from "../assets/projects/parallax-logo.png";
import vivaplusPng from "../assets/projects/vivaplus.png";
import latitudePng from "../assets/projects/latitude.png";
import percipiaPng from "../assets/clients/percipia-logo.png";
import asarPng from "../assets/clients/asar-logo.png";
import niuPng from "../assets/clients/niu-logo.png";
import niuDarkPng from "../assets/clients/niu-logo-dark.png";
import parallaxLogoWebp from "../assets/projects/parallax-logo.webp";
import vivaplusWebp from "../assets/projects/vivaplus.webp";
import latitudeWebp from "../assets/projects/latitude.webp";
import percipiaWebp from "../assets/clients/percipia-logo.webp";
import asarWebp from "../assets/clients/asar-logo.webp";
import niuWebp from "../assets/clients/niu-logo.webp";
import niuDarkWebp from "../assets/clients/niu-logo-dark.webp";

export default function Work({ darkMode }) {
  return (
    <div>
      <section className="section work is-medium is-transparent has-text-centered">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
            My Recent Work
          </h1>
          <h2 className="Work-subtitle subtitle is-size-5-desktop">
            Here are a few products I've worked on. Want to see other
            examples?&nbsp;
            <a href="mailto:contact@majkravos.com?subject=Maj, I'd like to see more of your work!">
              Email me.
            </a>
          </h2>
          <div className="project-grid">
            <div className="columns is-multiline is-mobile">
              <div className="column is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <picture>
                    <source srcSet={parallaxLogoWebp} type="image/webp" />
                    <img
                      className="project-thumb"
                      style={{
                        width: "50%",
                        height: "65%",
                        marginTop: "12.5%",
                        marginLeft: "15%"
                      }}
                      src={parallaxLogoPng}
                      alt="Percipia's Parallax Product"
                    />
                  </picture>
                  <p className="product-title has-text-light viva">PARALLAX</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                      Developed a completely redesigned frontend for the Parallax platform in React,
                      replacing its legacy Java Server Pages interface. This modern implementation
                      delivers enhanced user experience with responsive design and optimal
                      compatibility across all devices and displays.
                    </h1>
                    <a
                      className={`button ${darkMode ? "is-info" : "is-white"} is-outlined is-rounded`}
                      href="https://percipia.com/parallax"
                      target="_blank noopener noreferrer"
                    >
                      <span className="Figure-link-text">
                        Visit PARALLAX Product Page&nbsp;&nbsp;&gt;
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <picture>
                    <source srcSet={vivaplusWebp} type="image/webp" />
                    <img
                      className="project-thumb"
                      style={{
                        width: "70%",
                        marginTop: "2.5%",
                      }}
                      src={vivaplusPng}
                      alt="Percipia's VIVA+ Product"
                    />
                  </picture>
                  <p className="product-title has-text-light vivaplus">VIVA+</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                      Spearheaded the development of Percipia's hospitality-integrated Alexa skill,
                      partnering with Amazon's A4H team to create an intuitive multimodal solution that
                      enhances the guest experience in hotel rooms.
                    </h1>
                    <a
                      className={`button ${darkMode ? "is-info" : "is-white"} is-outlined is-rounded`}
                      href="https://percipia.com/viva+"
                      target="_blank noopener noreferrer"
                    >
                      <span className="Figure-link-text">
                        Visit VIVA+ Product Page&nbsp;&nbsp;&gt;
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <picture>
                    <source srcSet={latitudeWebp} type="image/webp" />
                    <img
                      className="project-thumb"
                      style={{
                        width: "70%",
                        height: "70%",
                        marginTop: "15%",
                      }}
                      src={latitudePng}
                      alt="Percipia's Latitude Product"
                    />
                  </picture>
                  <p className="product-title has-text-light latitude">LATITUDE</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                      Engineered and delivered client-specific versions of the Latitude mobile application
                      for hotel guests, implementing custom UI/UX designs, feature sets, and third-party API
                      integrations deployed across numerous hotel properties to enhance the guest experience
                      and meet the unique requirements of Percipia's hospitality clients.
                    </h1>
                    <a
                      className={`button ${darkMode ? "is-info" : "is-white"} is-outlined is-rounded`}
                      href="https://percipia.com/mobilesolution"
                      target="_blank noopener noreferrer"
                    >
                      <span className="Figure-link-text">
                        Visit LATITUDE Product Page&nbsp;&nbsp;&gt;
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <p className="product-title has-text-light asarconnect">
                    <span className="asar">ASAR</span>
                    <span className="connect">Connect</span>
                  </p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-6 is-size-4-widescreen">
                      Created an AWS-hosted internal web app called ASARConnect,
                      providing ASAR Digital the capability to onboard, keep
                      track of, and manage their freelancers and offshore
                      employees seamlessly.
                    </h1>
                    <a
                      className={`button ${darkMode ? "is-info" : "is-white"} is-outlined is-rounded`}
                      href="https://asardigital.com/"
                      target="_blank noopener noreferrer"
                    >
                      <span className="Figure-link-text">
                        Visit ASAR Digital's Website&nbsp;&nbsp;&gt;
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section clients is-medium is-transparent has-text-centered">
        <div className="container is-narrow">
          <div className="columns is-centered">
            <div className="Clients-title-column column is-half">
              <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                I'm proud to have worked at some impactful companies:
              </h1>
            </div>
          </div>
          <div className="client-grid">
            <div className="columns is-centered is-multiline is-mobile">
              <div className="column is-half-mobile is-one-quarter-tablet">
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
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
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
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
