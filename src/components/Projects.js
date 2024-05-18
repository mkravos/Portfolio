import './style/Projects.css'
import React from 'react';
import link from '../assets/style/link.png';

export default function Projects({ darkMode }) {
    return (
        <div>
            <section className="Projects section is-medium has-text-centered is-long">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title has-text-white is-spaced is-size-3-desktop is-size-4-mobile">My Personal Projects</h1>
                            <h2 className="subtitle has-text-white-muted is-size-5-desktop has-text-weight-normal">
                                Beyond my professional work, I enjoy applying my coding skills to personal projects that align with my interests and hobbies. Here is a showcase of some applications I've built over the years.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section startups has-text-centered">
                <div class="container Projects-container is-narrow">
                    <div class="startup-grid">
                        <div class="columns is-multiline level">
                            <div class="column is-12-touch is-half-desktop is-one-fifth-widescreen level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Garage</h1>
                                    <p>Maintenance tracking and upcoming service notifications for all of a user's vehicles.</p>
                                    <a class="link" href="https://github.com/mkravos/Vehicle-Maintenance-Tracker" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-half-desktop is-one-fifth-widescreen level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Go-Todo</h1>
                                    <p>An easy-to-use, Dockerized todo list app I wrote while learning Golang.</p>
                                    <a class="link" href="https://github.com/mkravos/go-todo" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-half-desktop is-one-fifth-widescreen level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Prisoner's Dilemma</h1>
                                    <p>A thought experiment in the form of a game, running in a Java+JSwing native app.</p>
                                    <a class="link" href="https://github.com/mkravos/prisoners-dilemma" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}