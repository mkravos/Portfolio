import React from 'react';
import avatar from '../assets/style/MajProfile.png';
// import footer from '../assets/style/hero-devices.svg';

export default function Introduction({ darkMode }) {
    return (
        <section className="hero is-transparent has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Full Stack & Mobile App Developer</h1>
                            <h2 className="subtitle is-size-4-tablet">I create intuitive web and mobile experiences, one line of code at a time.</h2>
                            <img className="avatar mt-5" src={avatar} style={{ height: 175, width: 175 }} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                {/* <div className="container"><img className="is-bottom" src={header} style={{ height: "auto", width: "50vw" }} /></div> */}
            </div>
        </section>
    );
}