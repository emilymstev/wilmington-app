import React, { Component } from "react";
import "./Navbar.css";
import logo from "./filler-photos/WIM_logo_color.png";

class Navbar extends Component {
    state = { 
        clicked: false,
        currentPath: "/"
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleNavClick = (path) => {
        this.setState({ currentPath: path, clicked: false });
    };

    render() {
        const { currentPath } = this.state;

        return (
            <nav>
                <a href="/">
                    <img id="nav" src={logo} alt={"logo"}></img>
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "active" : ""}>
                        <li>
                            <a 
                                className={currentPath === "/" ? "active" : ""} 
                                href="/"
                                onClick={() => this.handleNavClick("/")}
                            >Home</a>
                        </li>
                        <li>
                            <a 
                                className={currentPath === "/sustainability" ? "active" : ""}
                                href="/sustainability"
                                onClick={() => this.handleNavClick("/sustainability")}
                            >Sustainability</a>
                        </li>
                        <li>
                            <a 
                                className={currentPath === "/FAQ" ? "active" : ""}
                                href="/FAQ"
                                onClick={() => this.handleNavClick("/FAQ")}
                            >FAQ</a>
                        </li>
                        <li>
                            <a 
                                className={currentPath === "/contact" ? "active" : ""}
                                href="/contact"
                                onClick={() => this.handleNavClick("/contact")}
                            >Contact</a>
                        </li>
                        <li>
                            <a 
                                className={currentPath === "/lindsay" ? "active" : ""}
                                href="/lindsay"
                                onClick={() => this.handleNavClick("/lindsay")}
                            >Lindsay</a>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar"
                       className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                </div>
            </nav>
        );
    }
}

export default Navbar;