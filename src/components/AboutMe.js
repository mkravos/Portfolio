import React from 'react';

export default function AboutMe({ darkMode }) {
    return (
        <section class="About-me section is-medium has-text-centered is-long">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-three-fifths">
                        <h1 class="title has-text-white is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Maj Kravos,</h1>
                        <h2 class="subtitle has-text-white-muted is-size-5-desktop has-text-weight-normal">
                            a dedicated Software Engineer with a solid two-year foundation in full-stack and mobile app development.
                            I specialize in crafting quality software solutions for businesses and consumers alike. Passionate about
                            innovation and committed to excellence, I thrive in dynamic environments where I can leverage my skills
                            to create impactful digital experiences.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}