import React from "react";
import { Hero, Container, Columns, Heading } from "react-bulma-components";
import avatarPng from "../assets/style/MajProfile.png";
import avatarWebp from "../assets/style/MajProfile.webp";

export default function Introduction({ darkMode }) {
  return (
    <Hero transparent className="has-text-centered">
      <Hero.Body>
        <Container>
          <Columns centered>
            <Columns.Column>
              <Heading
                spaced
                className="is-size-1-desktop is-size-2-tablet is-size-3-mobile"
              >
                Web &amp; Mobile Software Engineer
              </Heading>
              <Heading subtitle renderAs="h2" className="is-size-4-tablet">
                I create innovative and intuitive digital experiences.
              </Heading>
              <picture>
                <source srcSet={avatarWebp} type="image/webp" />
                <img
                  className="avatar mt-5"
                  src={avatarPng}
                  style={{ height: 175, width: 175 }}
                  alt="avatar"
                />
              </picture>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
}
