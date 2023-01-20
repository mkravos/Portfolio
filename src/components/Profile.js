import "./style/Profile.css";
import background from "../assets/SplashBackground.jpg";
import profileImage from "../assets/MajProfile.png";
import React, {useState} from "react";
import { isMobile } from "react-device-detect";
import Welcome from "./Welcome";
// import ContactForm from "./ContactForm";
import FeaturedProjects from "./FeaturedProjects";

export default function Profile() {
    const [renderWelcome, setRender] = useState(false);
    // const [renderContactForm, setRenderContactForm] = useState(false);
    const [renderFeaturedProjects, setRenderFeaturedProjects] = useState(false);
    const onShow = React.useCallback(() => setRender(true), []);
    // const onShowContactForm = React.useCallback(() => setRenderContactForm(true), []);
    const onShowFeaturedProjects = React.useCallback(() => setRenderFeaturedProjects(true), []);

    if(!renderWelcome /*&& !renderContactForm*/ && !renderFeaturedProjects) {
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
                        <div className="location">Profile</div>
                    </div>
                    <div className="Home-content-desktop">
                        <div className="Header-image"/>
                        <div className="Profile-header-desktop">
                            <div className="Profile-header-main">
                                <img className="Profile-photo-desktop" alt="profile" src={profileImage}/>
                                <div className="Profile-header-text-desktop">
                                    <div className="Large-mobile-text">Maj Kravos</div>
                                    <div className="Muted-mobile-text">Chicago, IL, United States</div>
                                    <div className="Muted-mobile-text"><a href="https://www.linkedin.com/in/majkravos" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/mkravos" target="_blank" rel="noopener noreferrer">GitHub</a></div>
                                </div>
                            </div>
                            <div className="Profile-header-buttons-desktop">
                                    {/* <button className="Contact-button-desktop" onClick={onShowContactForm}>Contact Me</button> */}
                                    <button className="Projects-button-desktop" onClick={onShowFeaturedProjects}>View My Projects</button>
                            </div>
                        </div>
                        <div className="Profile-description-mobile">
                            <center>
                                <div className="Large-mobile-text">About Me</div>
                                <p className="Description-desktop-text">
                                    I am a Software Engineer with a background in creating web applications from concept to development and deployment, with expertise in front-end, back-end, 
                                    and database development. I enjoy teamwork, learning about new technology, solving problems, and fixing cars. I pride myself in troubleshooting bugs, 
                                    efficiently managing multiple tasks, and delivering quality results in a timely manner. 
                                </p>
                            </center>
                        </div>
                        <div className="Profile-description-mobile">
                            <center>
                                <div className="Large-mobile-text">Background</div>
                                <div className="Profile-description-body-desktop">
                                    <div className="Description-category">
                                        <div className="Subheading-mobile-text">
                                            Skills
                                        </div>
                                        <p className="Sub-description-mobile-text">HTML, CSS, JavaScript, Node.js, React, Express, PostgreSQL, Python, Java, C#</p>
                                    </div>
                                    <div className="Description-category">
                                        <div className="Subheading-mobile-text">
                                            Work
                                        </div>
                                        <p className="Sub-description-mobile-text">
                                            <a className="companyLink" href="https://www.linkedin.com/company/percipia" target="_blank" rel="noopener noreferrer">Percipia</a>- Software Engineer (2023-Present)
                                            <a className="companyLink-margin" href="https://www.linkedin.com/company/asar-digital" target="_blank" rel="noopener noreferrer">ASAR Digital</a>- Software Engineer (2022-2023)
                                        </p>
                                    </div>
                                    <div className="Description-category">
                                        <div className="Subheading-mobile-text">
                                            Education
                                        </div>
                                        <p className="Sub-description-mobile-text">Northern Illinois University: Bachelor of Science in Computer Science</p>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </header>
            );
        } else {
            return (
                <header className="App-header Content-page">
                    <div className="Location-bar">
                        <img className='Location-bar-background' alt='background' src={background}/>
                        <button className="Back-btn-mobile" onClick={onShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                        <div className="location">Profile</div>
                    </div>
                    <div className="Home-content-mobile">
                        <div className="Profile-header-mobile">
                            <img className="Profile-photo-mobile" alt="profile" src={profileImage}/>
                            <div className="Profile-header-text">
                                <div className="Large-mobile-text">Maj Kravos</div>
                                <div className="Muted-mobile-text">Chicago, IL, United States</div>
                                <div className="Muted-mobile-text"><a href="https://www.linkedin.com/in/majkravos" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/mkravos" target="_blank" rel="noopener noreferrer">GitHub</a></div>
                                {/* <button className="Contact-button-mobile" onClick={onShowContactForm}>Contact Me</button> */}
                                <button className="Projects-button-mobile" onClick={onShowFeaturedProjects}>View My Projects</button>
                            </div>
                        </div>
                        <div className="Profile-description-mobile">
                            <center>
                                <div className="Large-mobile-text">About Me</div>
                                <p className="Description-mobile-text">
                                    I am a Software Engineer with a background in creating web applications from concept to development and deployment, with expertise in front-end, back-end, 
                                    and database development. I enjoy teamwork, learning about new technology, solving problems, and fixing cars. I pride myself in troubleshooting bugs, 
                                    efficiently managing multiple tasks, and delivering quality results in a timely manner. 
                                </p>
                            </center>
                        </div>
                        <div className="Profile-description-mobile">
                            <center>
                                <div className="Large-mobile-text">Background</div>
                                <div className="Subheading-mobile-text">
                                    Skills
                                </div>
                                <p className="Sub-description-mobile-text">HTML, CSS, JavaScript, Node.js, React, Express, PostgreSQL, Python, Java, C#</p>
                                <div className="Subheading-mobile-text">
                                    Work
                                </div>
                                <p className="Sub-description-mobile-text">
                                    <a className="companyLink" href="https://www.linkedin.com/company/percipia" target="_blank" rel="noopener noreferrer">Percipia</a>- Software Engineer (2023-Present)
                                    <a className="companyLink" href="https://www.linkedin.com/company/asar-digital" target="_blank" rel="noopener noreferrer">ASAR Digital</a>- Software Engineer (2022-2023)
                                </p>
                                <div className="Subheading-mobile-text">
                                    Education
                                </div>
                                <p className="Sub-description-mobile-text">Northern Illinois University: Bachelor of Science in Computer Science</p>
                            </center>
                        </div>
                    </div>
                </header>
            );
        }
    } else if(renderWelcome) {
        return (
            <Welcome/>
        );
    // } else if(renderContactForm) {
    //     return (
    //         <ContactForm/>
    //     );
    } else if(renderFeaturedProjects) {
        return (
            <FeaturedProjects/>
        );
    }
}