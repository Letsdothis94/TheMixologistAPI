import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="section about-section">
            <div className="div-about">
                <h1 className="section-title">About</h1>
                <p>This is a project made by me using the free API: cocktailDB,
                    if you like the way it's done, you can find more about me and my projects on the following links.
                </p>
                <ul className="ul-about">
                    <li><a href="#">Githbub</a></li>
                    <li><a href="#">Linkedin</a></li>
                </ul>
            </div>
        </section>
    )
}

export default About;