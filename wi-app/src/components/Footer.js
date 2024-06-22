import React from "react";
import footLogo from "./filler-photos/WIM_logo_white.png";
import linkedInLogo from "./filler-photos/LI-In-Bug.png";
import "./Footer.css";

function Footer() {
    return (
        <div class="foot">
            <img class="white-wi" src={footLogo} alt={"white wilmington iron logo"}></img>

            <div class="social">
                <a class="linkedin" href="https://www.linkedin.com/company/wilmington-iron-&-metal-co.-inc" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} alt={"LinkedIn logo"}></img>
                </a>
                <p>(###)###-####</p>
            </div>

            <div class="hours">
                <h4>Hours</h4>
                <p>Monday: 00:00 - 00:00</p>
                <p>Tuesday: 00:00 - 00:00</p>
                <p>Wednesday: 00:00 - 00:00</p>
                <p>Thursday: 00:00 - 00:00</p>
                <p>Friday: 00:00 - 00:00</p>
                <p>Saturday: CLOSED</p>
                <p>Sunday: CLOSED</p>
            </div>

            <div class="location">
                <h4>Location</h4>
                <a class="google-map" href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                    <ul>
                        <li>99 S 9 St.</li>
                        <li>Nine, IA 50423</li>
                    </ul>
                </a>
            </div>
        </div>
    );
}

export default Footer;