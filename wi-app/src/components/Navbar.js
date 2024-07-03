import React, { Component } from "react";
import "./Navbar.css";
import logo from "./filler-photos/WIM_logo_color.png";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        const path = window.location.pathname;

        function CustomLink ({ href, children, ...props}) {
            return (
                <li>
                    <a className={path === href ? "active" : ""} href={href} {...props}>{children}</a>
                </li>
            )
        }

        return (
            <nav>
                <a href="/">
                    <img id="nav" src={logo} alt={"logo"}></img>
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <CustomLink href="/">Home</CustomLink>
                        <CustomLink href="/sustainability">Sustainability</CustomLink>
                        <CustomLink href="/FAQ">FAQ</CustomLink>
                        <CustomLink href="/contact">Contact</CustomLink>
                        <CustomLink href="/lindsay">Lindsay</CustomLink>
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