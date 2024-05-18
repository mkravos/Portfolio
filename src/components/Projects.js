import './style/Projects.css'
import React from 'react';

export default function Projects({ darkMode }) {
    return (
        <div>
            <section className="Projects section is-medium has-text-centered is-long">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title has-text-white is-spaced is-size-3-desktop is-size-4-mobile">My Personal Projects</h1>
                            <h2 className="subtitle has-text-white-muted is-size-5-desktop has-text-weight-normal">
                                a dedicated Software Engineer with a solid two-year foundation in full-stack and mobile app development.
                                I specialize in crafting quality software solutions for businesses and consumers alike. Passionate about
                                innovation and committed to excellence, I thrive in dynamic environments where I can leverage my skills
                                to create impactful digital experiences.
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
                                            &#x1F517; &nbsp; github.com
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
                                            &#x1F517; &nbsp; github.com
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
                                            &#x1F517; &nbsp; github.com
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