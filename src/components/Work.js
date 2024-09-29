import "./style/Figure.css";
import React from "react";
import viva from "../assets/projects/viva.png";
import vivaplus from "../assets/projects/vivaplus.png";
import latitude from "../assets/projects/latitude.png";
import percipia from "../assets/clients/percipia-logo.png";
import asar from "../assets/clients/asar-logo.png";
import niu from "../assets/clients/niu-logo.png";
import niuDark from "../assets/clients/niu-logo-dark.png";

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
                  <img
                    className="project-thumb"
                    style={{
                      width: "75%",
                      height: "85%",
                      marginTop: "10%",
                    }}
                    src={viva}
                    alt="Percipia's VIVA Product"
                  />
                  <p className="product-title viva">VIVA</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                      Guided Percipia's voice integration project from an early
                      stage of development to completion.
                    </h1>
                    <a
                      className={`button ${darkMode ? "is-info" : "is-white"} is-outlined is-rounded`}
                      href="https://percipia.com/viva"
                      target="_blank noopener noreferrer"
                    >
                      <span className="Figure-link-text">
                        Visit VIVA Product Page&nbsp;&nbsp;&gt;
                      </span>
                    </a>
                  </figcaption>
                  <div className="overlay"></div>
                </figure>
              </div>
              <div className="column is-12-mobile is-half-tablet is-one-half-desktop">
                <figure className="Project-figure image is-3by2">
                  <img
                    className="project-thumb"
                    style={{
                      width: "70%",
                      marginTop: "2.5%",
                    }}
                    src={vivaplus}
                    alt="Percipia's VIVA+ Product"
                  />
                  <p className="product-title vivaplus">VIVA+</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                      Collaborated with Amazon's A4H team to create Percipia's
                      hospitality-integrated multimodal skill for Alexa.
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
                  <img
                    className="project-thumb"
                    style={{
                      width: "70%",
                      height: "70%",
                      marginTop: "15%",
                    }}
                    src={latitude}
                    alt="Percipia's Latitude Product"
                  />
                  <p className="product-title latitude">LATITUDE</p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                      Developed customized versions of the application for
                      Percipia's end customers, with new API integrations to
                      boot.
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
                  <p className="product-title asarconnect">
                    <span className="asar">ASAR</span>
                    <span className="connect">Connect</span>
                  </p>
                  <figcaption>
                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
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
                  <img
                    className="client-logo"
                    src={percipia}
                    alt="Logo of Percipia"
                  ></img>
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    className="client-logo"
                    src={asar}
                    alt="Logo of ASAR Digital"
                  ></img>
                </figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1">
                  <img
                    className="client-logo"
                    src={darkMode ? niu : niuDark}
                    alt="Logo of Northern Illinois University"
                  ></img>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
