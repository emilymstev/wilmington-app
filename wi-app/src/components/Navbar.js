import React from "react";
import { Component } from "react";
import "./Navbar.css"
import logo from "./filler-photos/WIM_logo_color.png";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render () {
        return (
            <nav>
                <a href="index.html">
                    <img src={logo} alt={"logo"}></img>
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Sustainability</a></li>
                        <li><a href="index.html">FAQ</a></li>
                        <li><a href="index.html">Contact</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick= {this.handleClick}>
                    <i id="bar"
                    className={this.state.clicked ?
                        "fas fa-times" : "fas fa-bars"
                    }></i>
                </div>
            </nav>
        );
    }
}

export default Navbar;