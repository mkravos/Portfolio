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
                                Beyond my professional work, I enjoy applying my coding skills to personal projects that align with my interests and hobbies. Here is a showcase of some of my favorite applications I've built over the years.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section startups has-text-centered">
                <div class="container Projects-container is-narrow">
                    <div class="projects-grid">
                        <div class="columns is-multiline level">
                            <div class="column is-12-touch is-one-fourth level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Garage</h1>
                                    <p>Web-based maintenance tracking and upcoming service notifications for all of a user's vehicles.</p>
                                    <a class="link" href="https://github.com/mkravos/Vehicle-Maintenance-Tracker" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-one-fourth level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Go-Todo</h1>
                                    <p>An easy-to-use, Dockerized todo list web app I wrote while learning Golang.</p>
                                    <a class="link" href="https://github.com/mkravos/go-todo" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-one-fourth level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Prisoner's Dilemma</h1>
                                    <p>A thought experiment in the form of a GUI-based game, written in Java.</p>
                                    <a class="link" href="https://github.com/mkravos/prisoners-dilemma" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-one-fourth level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Not Sudoku</h1>
                                    <p>Sudoku-inspired game written for Windows in C#.</p>
                                    <a class="link" href="https://github.com/mkravos/not-sudoku" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-one-fourth level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Tic-Tac-Toe</h1>
                                    <p>Command-line tic-tac-toe game written in Java.</p>
                                    <a class="link" href="https://github.com/mkravos/tic-tac-toe" target="_blank noopener noreferrer">
                                        <span class="tag is-link is-light is-medium">
                                            <img style={{ height: 20, width: 20 }} src={link} alt="external link" /> &nbsp; github.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="column is-12-touch is-one-fourth level-item">
                                <div class="box">
                                    <h1 className="title is-size-4 is-spaced">Dungeon Crawler</h1>
                                    <p>Command-line dungeon crawler game written in C++.</p>
                                    <a class="link" href="https://github.com/mkravos/dungeon-crawler" target="_blank noopener noreferrer">
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