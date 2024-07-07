import React from "react";
import footLogo from "./filler-photos/WIM_logo_white.png";
import linkedInLogo from "./filler-photos/LI-In-Bug.png";
import "./Footer.css";

function Footer() {
    return (
        <div class="foot">
            <div class="content">
                <div class="contact">
                    <div class = "white-wi">
                        <img src={footLogo} alt={"white wilmington iron logo"}></img>
                    </div>

                    <div class="social">
                        <a class="linkedin" href="https://www.linkedin.com/company/wilmington-iron-&-metal-co.-inc" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInLogo} alt={"LinkedIn logo"}></img>
                        </a>
                        <a class="phone" href="tel:6303527340">(###)###-####</a>
                        <a class="email" href="malito:info@wilmingtoniron.com">info@wilmingtoniron.com</a>
                    </div>
                </div>

                <div class="hours">
                    <h4>Hours</h4>
                    <ul>
                        <li>Monday: 00:00 - 00:00</li>
                        <li>Tuesday: 00:00 - 00:00</li>
                        <li>Wednesday: 00:00 - 00:00</li>
                        <li>Thursday: 00:00 - 00:00</li>
                        <li>Friday: 00:00 - 00:00</li>
                        <li>Saturday: CLOSED</li>
                        <li>Sunday: CLOSED</li>
                    </ul>
                </div>

                <div class="location">
                    <h4>Location</h4>
                    <a class="google-map" href="https://maps.app.goo.gl/Zn3kJPiNNfNXmbS98" target="_blank" rel="noopener noreferrer">
                        <ul>
                            <li>2149 S. South St,</li>
                            <li>Wilmington, OH 45177</li>
                        </ul>
                    </a>
                </div>
            </div>
            

            <div class="copyright">
                <hr/>
                <h6>Copyright &copy; {(new Date().getFullYear())}. All Rights Reserved.</h6>
            </div>
        </div>
    );
}

export default Footer;