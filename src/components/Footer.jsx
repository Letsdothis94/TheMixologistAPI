import React from "react";
import { FaBeer, FaLinkedin, FaGithubAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-fixed">
            <div className="footer-div">
            <p>Copyright &copy; 2023 All Rights Reserved by Cristian C.</p>
                <ul className="social-icons">
                    <li><a className="facebook" href="https://www.linkedin.com/in/cristian-contreras-219888251/" target="_blank" rel="redirects to github"><FaLinkedin /></a></li>
                    <li><a className="github" href="https://github.com/Letsdothis94" target="_blank" rel="redirects to github"><FaGithubAlt /></a></li>
                </ul>
            {/* <hr /> */}
            </div>
        </footer>
    )
}

export default Footer;