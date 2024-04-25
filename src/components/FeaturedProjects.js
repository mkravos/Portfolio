import "./style/FeaturedProjects.css";
import vmt from "../assets/VMT-Dashboard.png";
import gotodo from "../assets/Go-todo-1.png";
import notsudoku from "../assets/Notsudoku.png";
import pd from "../assets/PD.png";
import React from "react";
import { isMobile } from "react-device-detect";

export default function FeaturedProjects() {
    if (!isMobile) {
        return (
            <div className="App-body Content-page">
                <div className="Project-content-desktop">
                    <center>
                        <div className="Featured-heading">
                            <div className="Project-category">
                                Personal Projects
                            </div>
                        </div>
                    </center>
                    <div className="Project-col">
                        <div className="Project-tile-desktop">
                            <center><a href={vmt} target="_blank" rel="noopener noreferrer"><img src={vmt} alt="Garage" className="Project-image-desktop" /></a></center>
                            <div className="Project-header-mobile-withimage">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Garage</div>
                                    <div className="Muted-mobile-text">Stack: PostgreSQL, Express, React, Node</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/Vehicle-Maintenance-Tracker" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">An application for tracking vehicle maintenance items such as oil changes, filter changes, or any other services performed on a vehicle. Notifies the user of upcoming service intervals for each tracked vehicle and service item. Each user has an account so they can easily manage their records.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-tile-desktop">
                            <center><a href={gotodo} target="_blank" rel="noopener noreferrer"><img src={gotodo} alt="Go-Todo" className="Project-image-desktop" /></a></center>
                            <div className="Project-header-mobile-withimage">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Go-Todo</div>
                                    <div className="Muted-mobile-text">Stack: PostgreSQL, Go, React</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/go-todo" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">An easy-to-use, Dockerized todo list app I wrote while learning Golang.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-col">
                        <div className="Project-tile-desktop">
                            <center><a href={notsudoku} target="_blank" rel="noopener noreferrer"><img src={notsudoku} alt="Not Sudoku" className="Project-image-desktop" /></a></center>
                            <div className="Project-header-mobile-withimage">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Not-Sudoku</div>
                                    <div className="Muted-mobile-text">Language: C#</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/not-sudoku" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">A Sudoku-like game developed in Visual Studio as a C# Windows Form.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-tile-desktop">
                            <center><a href={pd} target="_blank" rel="noopener noreferrer"><img src={pd} alt="Prisoner's Dilemma" className="Project-image-desktop" /></a></center>
                            <div className="Project-header-mobile-withimage">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Prisoner's Dilemma</div>
                                    <div className="Muted-mobile-text">Language: Java</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/prisoners-dilemma" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">A rendition of the Prisoner's Dilemma thought experiment in the form of a game, developed using Java and JSwing.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                        <div className="Featured-heading">
                            <div className="Project-category">
                                Professional Contributions
                            </div>
                        </div>
                    </center>
                    <div className="Project-col">
                        <div className="Project-tile-2-desktop">
                            <div className="Project-header-mobile">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Viva</div>
                                    <div className="Muted-mobile-text">Employer: Percipia</div>
                                    <div className="Muted-mobile-text">Technologies: Go, Amazon Lex SDK, Docker</div>
                                    <div className="Muted-mobile-text"><a href="https://percipia.com/viva" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">Took the lead and guided the project from an early stage of development to completion. Implemented a wide range of guest room capabilities and advanced hospitality API integrations, CMS configurability, and a fully automated pipeline that leverages Docker and GitLab CI/CD.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-tile-2-desktop">
                            <div className="Project-header-mobile">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Latitude</div>
                                    <div className="Muted-mobile-text">Employer: Percipia</div>
                                    <div className="Muted-mobile-text">Technologies: Gradle, Java-Android and/or iOS</div>
                                    <div className="Muted-mobile-text"><a href="https://percipia.com/mobiledevices" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">Developed customized versions of the application for end customers, completed numerous hospitality-focused API integrations, and kept the codebase up to date and free of bugs. Developed new features and components for the Latitude/Viva Content Management System web app.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-col">
                        <div className="Project-tile-2-desktop">
                            <div className="Project-header-mobile">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Frequency PBX</div>
                                    <div className="Muted-mobile-text">Employer: Percipia</div>
                                    <div className="Muted-mobile-text">Technologies: Go, PostgreSQL</div>
                                    <div className="Muted-mobile-text"><a href="https://percipia.com/frequencystratus" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">Developed new endpoints for the API. Integrated Viva with Frequency PBX to allow hotel guests to initiate outgoing phone calls using an Alexa Echo device. Helped maintain and keep the project up to date.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-tile-2-desktop">
                            <div className="Project-header-mobile">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Latitude Weather Proxy</div>
                                    <div className="Muted-mobile-text">Employer: Percipia</div>
                                    <div className="Muted-mobile-text">Technologies: Go, BoltDB, Docker</div>
                                    <div className="Muted-mobile-text"><a href="https://percipia.com/mobiledevices" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">Developed a proxy server for fetching weather forecasts and serving them to the Latitude mobile application, which pulls real-time weather data from the weather.gov API. Took the project from an early stage of development to completion.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-col">
                        <div className="Project-tile-2-desktop">
                            <div className="Project-header-mobile">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">ASARConnect</div>
                                    <div className="Muted-mobile-text">Employer: ASAR Digital</div>
                                    <div className="Muted-mobile-text">Technologies: Python, Flask, PostgreSQL, React, Amazon Web Services</div>
                                    <div className="Muted-mobile-text"><a href="https://www.linkedin.com/company/asar-digital/" target="_blank" rel="noopener noreferrer">Company Information</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">Led the design, development, and deployment of a new, cloud-hosted internal tool providing the company with the capability to onboard, keep track of, and manage their freelancers and offshore employees seamlessly. Containerized the application using Docker and deployed it to AWS's Lightsail service.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="App-body Content-page">
                <div className="Project-content-mobile">
                    <center>
                        <div className="Featured-heading">
                            <div className="Project-category">
                                Personal Projects
                            </div>
                        </div>
                    </center>
                    <div className="Project-tile">
                        <a href={vmt} target="_blank" rel="noopener noreferrer"><img src={vmt} alt="Garage" className="Project-image-mobile" /></a>
                        <div className="Project-header-mobile-withimage">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Garage</div>
                                <div className="Muted-mobile-text">Stack: PostgreSQL, Express, React, Node</div>
                                <div className="Muted-mobile-text"><a href="https://github.com/mkravos/Vehicle-Maintenance-Tracker" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">An application for tracking vehicle maintenance items such as oil changes, filter changes, or any other services performed on a vehicle. Notifies the user of upcoming service intervals for each tracked vehicle and service item. Each user has an account so they can easily manage their records.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <a href={gotodo} target="_blank" rel="noopener noreferrer"><img src={gotodo} alt="Go-Todo" className="Project-image-mobile" /></a>
                        <div className="Project-header-mobile-withimage">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Go-Todo</div>
                                <div className="Muted-mobile-text">Stack: PostgreSQL, Go, React</div>
                                <div className="Muted-mobile-text"><a href="https://github.com/mkravos/go-todo" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">An easy-to-use, Dockerized todo list app I wrote while learning Golang.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <a href={notsudoku} target="_blank" rel="noopener noreferrer"><img src={notsudoku} alt="Not Sudoku" className="Project-image-mobile" /></a>
                        <div className="Project-header-mobile-withimage">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Not-Sudoku</div>
                                <div className="Muted-mobile-text">Language: C#</div>
                                <div className="Muted-mobile-text"><a href="https://github.com/mkravos/not-sudoku" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">A Sudoku-like game developed in Visual Studio as a C# Windows Form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <a href={pd} target="_blank" rel="noopener noreferrer"><img src={pd} alt="Prisoner's Dilemma" className="Project-image-mobile" /></a>
                        <div className="Project-header-mobile-withimage">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Prisoner's Dilemma</div>
                                <div className="Muted-mobile-text">Language: Java</div>
                                <div className="Muted-mobile-text"><a href="https://github.com/mkravos/prisoners-dilemma" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">A rendition of the Prisoner's Dilemma thought experiment in the form of a game, developed using Java and JSwing.</div>
                            </div>
                        </div>
                    </div>
                    <center>
                        <div className="Featured-heading">
                            <div className="Project-category">
                                Professional Contributions
                            </div>
                        </div>
                    </center>
                    <div className="Project-tile">
                        <div className="Project-header-mobile">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Viva</div>
                                <div className="Muted-mobile-text">Employer: Percipia</div>
                                <div className="Muted-mobile-text">Technologies: Go, Amazon Lex SDK, Docker</div>
                                <div className="Muted-mobile-text"><a href="https://percipia.com/viva" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">Took the lead and guided the project from an early stage of development to completion. Implemented a wide range of guest room capabilities and advanced hospitality API integrations, CMS configurability, and a fully automated pipeline that leverages Docker and GitLab CI/CD.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <div className="Project-header-mobile">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Latitude</div>
                                <div className="Muted-mobile-text">Employer: Percipia</div>
                                <div className="Muted-mobile-text">Technologies: Gradle, Java-Android and/or iOS</div>
                                <div className="Muted-mobile-text"><a href="https://percipia.com/mobiledevices" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">Developed customized versions of the application for end customers, completed numerous hospitality-focused API integrations, and kept the codebase up to date and free of bugs. Developed new features and components for the Latitude/Viva Content Management System web app.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <div className="Project-header-mobile">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Frequency PBX</div>
                                <div className="Muted-mobile-text">Employer: Percipia</div>
                                <div className="Muted-mobile-text">Technologies: Go, PostgreSQL</div>
                                <div className="Muted-mobile-text"><a href="https://percipia.com/frequencystratus" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">Developed new endpoints for the API. Integrated Viva with Frequency PBX to allow hotel guests to initiate outgoing phone calls using an Alexa Echo device. Helped maintain and keep the project up to date.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <div className="Project-header-mobile">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Latitude Weather Proxy</div>
                                <div className="Muted-mobile-text">Employer: Percipia</div>
                                <div className="Muted-mobile-text">Technologies: Go, BoltDB, Docker</div>
                                <div className="Muted-mobile-text"><a href="https://percipia.com/mobiledevices" target="_blank" rel="noopener noreferrer">Product Information</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">Developed a proxy server for fetching weather forecasts and serving them to the Latitude mobile application, which pulls real-time weather data from the weather.gov API. Took the project from an early stage of development to completion. </div>
                            </div>
                        </div>
                    </div>
                    <div className="Project-tile">
                        <div className="Project-header-mobile">
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">ASARConnect</div>
                                <div className="Muted-mobile-text">Employer: ASAR Digital</div>
                                <div className="Muted-mobile-text">Technologies: Python, Flask, PostgreSQL, React, Amazon Web Services</div>
                                <div className="Muted-mobile-text"><a href="https://www.linkedin.com/company/asar-digital/" target="_blank" rel="noopener noreferrer">Company Information</a></div>
                            </div>
                        </div>
                        <div className="Project-description">
                            <div className="Profile-header-text">
                                <div className="Muted-mobile-description-text">Led the design, development, and deployment of a new, cloud-hosted internal tool providing the company with the capability to onboard, keep track of, and manage their freelancers and offshore employees seamlessly. Containerized the application using Docker and deployed it to AWS's Lightsail service.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}