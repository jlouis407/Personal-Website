import React from "react";

function Header(){
    return(
        <div className="header">
            <div className="header-navbar-div">
                <div className="header-logo-div">
                    <a href="/" className="header-logo">Josiah</a>
                </div>
                    <a href="/" className="navbar-item">Home</a>
                    <a href="/about" className="navbar-item">About</a>
                    <a href="/skills" className="navbar-item">Skills</a>
                    <a href="/portfolio" className="navbar-item">Portfolio</a>
                    <a href="/contact" className="navbar-item">Contact</a>
                </div>
            </div>
    );
}

export default Header;