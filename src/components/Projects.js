import './style/Projects.css'
import React from 'react';
import { Section, Container, Columns, Box, Heading, Tag } from 'react-bulma-components';
import linkPng from '../assets/style/link.png';
import linkWebp from '../assets/style/link.webp';

const projects = [
    {
        title: 'Garage',
        description: "Web-based maintenance tracking and upcoming service notifications for all of a user's vehicles.",
        url: 'https://github.com/mkravos/Vehicle-Maintenance-Tracker',
    },
    {
        title: 'Go-Todo',
        description: 'An easy-to-use, Dockerized todo list web app I wrote while learning Golang.',
        url: 'https://github.com/mkravos/go-todo',
    },
    {
        title: "Prisoner's Dilemma",
        description: 'A thought experiment in the form of a GUI-based game, written in Java.',
        url: 'https://github.com/mkravos/prisoners-dilemma',
    },
    {
        title: 'Not Sudoku',
        description: 'Sudoku-inspired game written for Windows in C#.',
        url: 'https://github.com/mkravos/not-sudoku',
    },
    {
        title: 'Tic-Tac-Toe',
        description: 'Command-line tic-tac-toe game written in Java.',
        url: 'https://github.com/mkravos/tic-tac-toe',
    },
    {
        title: 'Dungeon Crawler',
        description: 'Command-line dungeon crawler game written in C++.',
        url: 'https://github.com/mkravos/dungeon-crawler',
    },
];

export default function Projects({ darkMode }) {
    return (
        <div>
            <Section size="medium" className="Projects has-text-centered is-long">
                <Container>
                    <Columns centered>
                        <Columns.Column size="three-fifths">
                            <Heading spaced className="has-text-white is-size-3-desktop is-size-4-mobile">My Personal Projects</Heading>
                            <Heading subtitle renderAs="h2" className="has-text-white-muted is-size-5-desktop has-text-weight-normal">
                                Beyond my professional work, I enjoy applying my coding skills to personal projects that align with my interests and hobbies. Here is a showcase of some of my favorite applications I've built over the years.
                            </Heading>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <Section className="startups has-text-centered">
                <Container className="Projects-container is-narrow">
                    <div className="projects-grid">
                        <Columns multiline className="level">
                            {projects.map((project) => (
                                <Columns.Column key={project.title} className="is-12-touch is-one-fourth level-item">
                                    <Box>
                                        <Heading spaced className="is-size-4">{project.title}</Heading>
                                        <p>{project.description}</p>
                                        <a className="link" href={project.url} target="_blank noopener noreferrer">
                                            <Tag color="link" size="medium" className="is-light">
                                                <picture>
                                                    <source srcSet={linkWebp} type="image/webp" />
                                                    <img style={{ height: 20, width: 20 }} src={linkPng} alt="external link" />
                                                </picture>
                                                &nbsp; github.com
                                            </Tag>
                                        </a>
                                    </Box>
                                </Columns.Column>
                            ))}
                        </Columns>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
