import "./style/Profile.css";
import profileImage from "../assets/MajProfile.png";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";

export default function Profile() {
    // page content
    const name = "Maj Kravos"
    const location = "Chicago, IL, United States"
    const social = useState(
        <>
            <a href="https://www.linkedin.com/in/majkravos" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/mkravos" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="mailto:contact@majkravos.com">Contact</a>
        </>
    )
    const aboutMe = "Passionate and results-driven Software Engineer with a solid two-year foundation in full stack development. Demonstrates exceptional leadership skills, guiding projects seamlessly from ideation to deployment. Proficient in front-end, back-end, mobile, and database development, complemented by a strong emphasis on effective communication and collaboration."
    const skills =
        <>
            {
                !isMobile ?
                    <div className="skillsContainer">
                        <img className="skillJS" alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <img className="skillGo" alt="go" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                        <img className="skillNode" alt="node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                        <img className="skillReact" alt="react.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        <img className="skillPsql" alt="postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                        <img className="skillDocker" alt="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                        <img className="skillAWS" alt="aws cloud" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                        <img className="skillAndroid" alt="android" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain-wordmark.svg" />
                        <img className="skillIOS" alt="ios" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
                        <img className="skillPy" alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                        <img className="skillCpp" alt="c plus plus" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" />
                        <img className="skillCsh" alt="c sharp" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" />
                    </div>
                    :
                    <div>JavaScript, Go, Node.js, React, PostgreSQL, Docker, AWS, Android, iOS, Python, C++, C#</div>
            }
        </>
    const work = useState(
        <>
            <a className="companyLink" href="https://www.linkedin.com/company/percipia" target="_blank" rel="noopener noreferrer">Percipia</a>- Software Engineer (2023-Present)
            <a className="companyLink-margin" href="https://www.linkedin.com/company/asar-digital" target="_blank" rel="noopener noreferrer">ASAR Digital</a>- Software Engineer (2022-2023)
            <a className="companyLink-margin" href="https://www.niu.edu/doit/" target="_blank" rel="noopener noreferrer">Northern Illinois University</a>- Service Desk Analyst (2019-2021)
        </>
    )
    const education = useState(
        <>
            <a className="companyLink" href="https://www.cs.niu.edu/" target="_blank" rel="noopener noreferrer">Northern Illinois University</a>- Bachelor of Science in Computer Science
        </>
    )

    if (!isMobile) {
        return (
            <div className="App-body Content-page">
                <div className="Home-content-desktop">
                    <div className="Header-image" />
                    <div className="Profile-header-desktop">
                        <div className="Profile-header-main">
                            <img className="Profile-photo-desktop" alt="profile" src={profileImage} />
                            <div className="Profile-header-text-desktop">
                                <div className="Large-mobile-text">{name}</div>
                                <div className="Muted-mobile-text">{location}</div>
                                <div className="Muted-mobile-text">{social}</div>
                            </div>
                        </div>
                    </div>
                    <div className="Profile-description-mobile">
                        <center>
                            <div className="Large-mobile-text">About Me</div>
                            <div className="Description-desktop-text">
                                {aboutMe}
                            </div>
                        </center>
                    </div>
                    <div className="Profile-description-mobile">
                        <center>
                            <div className="Large-mobile-text">Background</div>
                            <div className="Profile-description-body-desktop">
                                <div className="Description-category">
                                    <div className="Subheading-mobile-text">
                                        Technologies
                                    </div>
                                    <div className="Sub-description-mobile-text">{skills}</div>
                                </div>
                                <div className="Description-category">
                                    <div className="Subheading-mobile-text">
                                        Work
                                    </div>
                                    <div className="Sub-description-mobile-text">
                                        {work}
                                    </div>
                                </div>
                                <div className="Description-category">
                                    <div className="Subheading-mobile-text">
                                        Education
                                    </div>
                                    <div className="Sub-description-mobile-text">{education}</div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="App-body Content-page">
                <div className="Home-content-mobile">
                    <div className="Profile-header-mobile">
                        <img className="Profile-photo-mobile" alt="profile" src={profileImage} />
                        <div className="Profile-header-text">
                            <div className="Large-mobile-text">{name}</div>
                            <div className="mobileProfileSmallHeaderText">
                                <div className="Muted-mobile-text">{location}</div>
                                <div className="Muted-mobile-text">{social}</div>
                            </div>
                        </div>
                    </div>
                    <div className="Profile-description-mobile">
                        <center>
                            <div className="Large-mobile-text">About Me</div>
                            <div className="Description-mobile-text">
                                {aboutMe}
                            </div>
                        </center>
                    </div>
                    <div className="Profile-description-mobile">
                        <center>
                            <div className="Large-mobile-text">Background</div>
                            <div className="Subheading-mobile-text">
                                Technologies
                            </div>
                            <div className="Sub-description-mobile-text">{skills}</div>
                            <div className="Subheading-mobile-text">
                                Work
                            </div>
                            <div className="Sub-description-mobile-text">
                                {work}
                            </div>
                            <div className="Subheading-mobile-text">
                                Education
                            </div>
                            <div className="Sub-description-mobile-text">{education}</div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}