import './style/Skills.css'
import React from 'react';
import { Section, Container, Columns, Heading, Button } from 'react-bulma-components';
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
            <Section renderAs="footer" className="Footer is-primary is-small has-text-centered">
                <Container className="is-narrow"><a className="logo has-text-white" href="/">
                    <picture>
                        <source srcSet={logoWebp} type="image/webp" />
                        <img className="Footer-logo logo" style={{ width: 100 }} src={logoPng} alt='logo' />
                    </picture>
                </a>
                    <Columns centered>
                        <Columns.Column size="one-third">
                            <Heading className="is-size-4 has-text-white-muted has-text-weight-normal">Get in touch</Heading>
                        </Columns.Column>
                    </Columns>
                    <div className="footer-links">
                        <p className="field">
                            <Button renderAs="a" size="medium" className="Footer-button" href="https://www.linkedin.com/in/majkravos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                                <span className="icon is-small">
                                    <LinkedInIcon sx={{ fontSize: 'inherit' }} />
                                </span>
                            </Button>
                            <Button renderAs="a" size="medium" className="Footer-button" href="https://github.com/mkravos" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                                <span className="icon is-small">
                                    <GitHubIcon sx={{ fontSize: 'inherit' }} />
                                </span>
                            </Button>
                            <Button renderAs="a" size="medium" className="Footer-button" href="mailto:maj@kravos.me" aria-label="Email">
                                <span className="icon is-small">
                                    <EmailIcon sx={{ fontSize: 'inherit' }} />
                                </span>
                            </Button>
                        </p>
                    </div>
                    <div className="copyright has-text-white-muted">Maj Kravos<span className="icon" >&copy;</span>{currentYear}</div>
                </Container>
            </Section>
        </div>
    );
}
