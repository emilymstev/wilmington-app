import React, { Component } from "react";
import "./Navbar.css";
import logo from "./filler-photos/WIM_logo_color.png";

class Navbar extends Component {
    state = { 
        clicked: false,
        dropdownOpen: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
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
                        <li className="dropdown">
                            <CustomLink href="/about">About Us</CustomLink>
                            <i className="fa fa-caret-down" onClick={this.toggleDropdown}></i>
                            <div className={this.state.dropdownOpen ? "dropdown-content show" : "dropdown-content"}>
                                <CustomLink href="/about/staff">Staff</CustomLink>
                                <CustomLink href="/about/company">Company</CustomLink>
                            </div>
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
