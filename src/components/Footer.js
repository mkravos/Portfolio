import './style/Skills.css'
import React from 'react';
import logoPng from '../assets/logo.png';
import logoWebp from '../assets/logo.webp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer({ darkMode }) {
    const currentYearCalc = new Date().getFullYear();
    var currentYear;

    // 2024 is when the website was first published, so if the year is greater than 2024, we use a range from 2024-<the current year>
    // side note: overkill but fun
    if (currentYearCalc > 2024) {
        currentYear = "2024-" + currentYearCalc;
    } else {
        currentYear = currentYearCalc;
    }

    return (
        <div>
            <footer className="Footer section is-primary is-small has-text-centered">
                <div className="container is-narrow"><a className="logo has-text-white" href="/">
                    <picture>
                        <source srcSet={logoWebp} type="image/webp" />
                        <img className="Footer-logo logo" style={{ width: 100 }} src={logoPng} alt='logo' />
                    </picture>
                </a>
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <h1 className="title is-size-4 has-text-white-muted has-text-weight-normal">Get in touch</h1>
                        </div>
                    </div>
                    <div className="footer-links">
                        <p className="field">
                            <a className="Footer-button button is-medium" href="https://www.linkedin.com/in/majkravos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                                <span className="icon is-small">
                                    <LinkedInIcon sx={{ fontSize: 'inherit' }} />
                                </span>
                            </a>
                            <a className="Footer-button button is-medium" href="https://github.com/mkravos" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                                <span className="icon is-small">
                                    <GitHubIcon sx={{ fontSize: 'inherit' }} />
                                </span>
                            </a>
                            <a className="Footer-button button is-medium" href="mailto:maj@kravos.me" aria-label="Email">
                                <span className="icon is-small">
                                    <EmailIcon sx={{ fontSize: 'inherit' }} />
                                </span>
                            </a>
                        </p>
                    </div>
                    <div className="copyright has-text-white-muted">Maj Kravos<span className="icon" >&copy;</span>{currentYear}</div>
                </div>
            </footer>
        </div>
    );
}