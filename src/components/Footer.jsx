import React from "react";
import { FaBeer, FaLinkedin, FaGithubAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-fixed">
            <div className="footer-div">
            <p>Copyright &copy; 2023 All Rights Reserved by Cristian C.</p>
                <ul className="social-icons">
                    <li><a className="facebook" href="#"><FaLinkedin /></a></li>
                    <li><a className="github" href="#"><FaGithubAlt /></a></li>
                </ul>
            {/* <hr /> */}
            </div>
        </footer>
    )
}

export default Footer;