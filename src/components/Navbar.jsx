import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="nav-center">
                <Link to='/'>
                    <img src='src/assets/themix-logo.png' alt="The mixologist logo" className="logo"/>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;