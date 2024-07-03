import React, { Component } from "react";
import "./Navbar.css";
import logo from "./filler-photos/WIM_logo_color.png";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {

        return (
            <nav>
                <a href="/">
                    <img id="nav" src={logo} alt={"logo"}></img>
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li>
                            <a className="active" href="/">Home</a>
                        </li>
                        <li>
                            <a href="/sustainability">Sustainability</a>
                        </li>
                        <li>
                            <a href="/FAQ">FAQ</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/lindsay">Lindsay</a>
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