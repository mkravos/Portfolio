import "./style/FeaturedProjects.css";
import background from "../assets/SplashBackground.jpg";
import vmt from "../assets/VMT-Dashboard.png";
import gotodo from "../assets/Go-todo-1.png";
import React, {useState} from "react";
import { isMobile } from "react-device-detect";
import Profile from "./Profile";

export default function FeaturedProjects() {
    const [renderProfile, setRender] = useState(false);
    const onShow = React.useCallback(() => setRender(true), []);
    
    if(!renderProfile) {
        if(!isMobile) {
            return (
                <header className="App-header Content-page">
                    <div className="Location-bar">
                        <img className='Location-bar-background' alt='background' src={background}/>
                        <button className="Back-btn-desktop" onClick={onShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                        <div className="location">Projects</div>
                    </div>
                    <div className="Project-content-desktop">
                        <div className="Project-col">
                            <div className="Project-tile-desktop">
                                <a href={vmt} target="_blank" rel="noopener noreferrer"><img src={vmt} alt="Vehicle Maintenance Tracker" className="Project-image-desktop"/></a>
                                <div className="Project-header-mobile-withimage">
                                    <div className="Profile-header-text">
                                        <div className="Large-mobile-text">Vehicle Maintenance Tracker</div>
                                        <div className="Muted-mobile-text">Stack: PostgreSQL, Express, React, Node</div>
                                        <div className="Muted-mobile-text"><a href="https://github.com/mkravos/Vehicle-Maintenance-Tracker" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                    </div>
                                </div>
                                <div className="Project-description">
                                    <div className="Profile-header-text">
                                        <div className="Muted-mobile-description-text">A vehicle maintenance tracking web application that is currently under development. This project's goal is to simplify maintenance record keeping for hobbyist mechanics.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Project-tile-desktop">
                                <a href={gotodo} target="_blank" rel="noopener noreferrer"><img src={gotodo} alt="Go-Todo" className="Project-image-desktop"/></a>
                                <div className="Project-header-mobile-withimage">
                                    <div className="Profile-header-text">
                                        <div className="Large-mobile-text">Go-Todo</div>
                                        <div className="Muted-mobile-text">Stack: PostgreSQL, Go, React</div>
                                        <div className="Muted-mobile-text"><a href="https://github.com/mkravos/go-todo" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                    </div>
                                </div>
                                <div className="Project-description">
                                    <div className="Profile-header-text">
                                        <div className="Muted-mobile-description-text">A simple dockerized todo list app I wrote while learning Golang.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-col">
                            <div className="Project-tile-desktop">
                                <div className="Project-header-mobile">
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
                                <div className="Project-header-mobile">
                                    <div className="Profile-header-text">
                                        <div className="Large-mobile-text">Prisoner's Dilemma</div>
                                        <div className="Muted-mobile-text">Language: Java</div>
                                        <div className="Muted-mobile-text"><a href="https://github.com/mkravos/prisoners-dilemma" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                    </div>
                                </div>
                                <div className="Project-description">
                                    <div className="Profile-header-text">
                                        <div className="Muted-mobile-description-text">A Prisoner's Dilemma game developed using Java and JSwing.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            );
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return (
                <header className="App-header Content-page">
                    <div className="Location-bar">
                        <img className='Location-bar-background' alt='background' src={background}/>
                        <button className="Back-btn-mobile" onClick={onShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                        <div className="location">Projects</div>
                    </div>
                    <div className="Project-content-mobile">
                        <div className="Project-tile">
                            <a href={vmt} target="_blank" rel="noopener noreferrer"><img src={vmt} alt="Vehicle Maintenance Tracker" className="Project-image-mobile"/></a>
                            <div className="Project-header-mobile-withimage">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Vehicle Maintenance Tracker</div>
                                    <div className="Muted-mobile-text">Stack: PostgreSQL, Express, React, Node</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/Vehicle-Maintenance-Tracker" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">A vehicle maintenance tracking web application that is currently under development. This project's goal is to simplify maintenance record keeping for hobbyist mechanics.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-tile">
                            <a href={gotodo} target="_blank" rel="noopener noreferrer"><img src={gotodo} alt="Go-Todo" className="Project-image-mobile"/></a>
                            <div className="Project-header-mobile-withimage">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Go-Todo</div>
                                    <div className="Muted-mobile-text">Stack: PostgreSQL, Go, React</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/go-todo" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">A simple dockerized todo list app I wrote while learning Golang.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Project-tile">
                            <div className="Project-header-mobile">
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
                            <div className="Project-header-mobile">
                                <div className="Profile-header-text">
                                    <div className="Large-mobile-text">Prisoner's Dilemma</div>
                                    <div className="Muted-mobile-text">Language: Java</div>
                                    <div className="Muted-mobile-text"><a href="https://github.com/mkravos/prisoners-dilemma" target="_blank" rel="noopener noreferrer">GitHub Repository</a></div>
                                </div>
                            </div>
                            <div className="Project-description">
                                <div className="Profile-header-text">
                                    <div className="Muted-mobile-description-text">A Prisoner's Dilemma game developed using Java and JSwing.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
    } else {
        return (
            <Profile/>
        );
    }
}