import React from 'react';
import avatarPng from '../assets/style/MajProfile.png';
import avatarWebp from '../assets/style/MajProfile.webp';

export default function Introduction({ darkMode }) {
    return (
        <section className="hero is-transparent has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Full Stack Developer</h1>
                            <h2 className="subtitle is-size-4-tablet">I create innovative and intuitive digital experiences.</h2>
                            <picture>
                                <source srcSet={avatarWebp} type="image/webp" />
                                <img className="avatar mt-5" src={avatarPng} style={{ height: 175, width: 175 }} alt="avatar" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}