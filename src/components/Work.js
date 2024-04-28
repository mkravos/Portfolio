import './style/Figure.css';
import React from 'react';
import viva from '../assets/projects/viva.png';
import latitude from '../assets/projects/latitude.png';
import asarconnect from '../assets/projects/asarconnect.png';

export default function Work({ darkMode }) {
    return (
        <section className="section work is-medium is-transparent has-text-centered">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
                <h2 className="Work-subtitle subtitle is-size-5-desktop">Here are a few products I've worked on. Want other examples? <a href="mailto:contact@majkravos.com?subject=Hello, I'd like to see more of your work!">Email me.</a></h2>
                <div className="project-grid">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <figure className="image is-3by2"><img className="project-thumb" src={viva} alt="Percipia's VIVA Product" />
                                <figcaption>
                                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                                        Guided the project from an early stage of development to completion.
                                    </h1>
                                    <a className={`button ${darkMode ? 'is-info' : 'is-white'} is-outlined is-rounded`} href="https://percipia.com/viva" target="_blank noopener noreferrer">
                                        <span className="Figure-link-text">Visit Product Page&nbsp;&nbsp;&gt;</span>
                                    </a>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </div>
                    </div>
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <figure className="image is-3by2"><img className="project-thumb" src={asarconnect} alt="ASAR Digital's ASARConnect Web App" />
                                <figcaption>
                                    <h1 className="title has-text-white is-size-6 is-size-6-widescreen">
                                        Created an AWS-hosted internal web app called ASARConnect, providing ASAR Digital the capability to onboard, keep track of, and manage their freelancers and offshore employees seamlessly.
                                    </h1>
                                    <a className={`button ${darkMode ? 'is-info' : 'is-white'} is-outlined is-rounded`} href="https://asardigital.com/" target="_blank noopener noreferrer">
                                        <span className="Figure-link-text">Visit Company&nbsp;&nbsp;&gt;</span>
                                    </a>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </div>
                    </div>
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <figure className="image is-3by2"><img className="project-thumb" src={latitude} alt="Percipia's Latitude Product" />
                                <figcaption>
                                    <h1 className="title has-text-white is-size-5 is-size-4-widescreen">
                                        Developed customized versions of the application for end customers, with new API integrations to boot.
                                    </h1>
                                    <a className={`button ${darkMode ? 'is-info' : 'is-white'} is-outlined is-rounded`} href="https://percipia.com/mobilesolution" target="_blank noopener noreferrer">
                                        <span className="Figure-link-text">Visit Product Page&nbsp;&nbsp;&gt;</span>
                                    </a>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}