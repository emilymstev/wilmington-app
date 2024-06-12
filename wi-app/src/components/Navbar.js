import React from "react";
import "./Navbar.css"
import logo from "./filler-photos/WIM_logo_color.png";

function Navbar() {
    return (
        <div class="nav">
            <nav>
                <a href="index.html">
                    <img src={logo} alt={"logo"}></img>
                </a>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Sustainability</a></li>
                        <li><a href="index.html">FAQ</a></li>
                        <li><a href="index.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

        /**
         * <Navbar expand = "lg" className = "bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt={"logo"} height="30"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#sustainability">Sustainability</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         */
        
    )
}

export default Navbar;