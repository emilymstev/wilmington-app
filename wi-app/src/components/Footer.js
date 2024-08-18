import React from "react";
import footLogo from "./filler-photos/WIM_logo_white_red.png";
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
                        <a class="phone" href="tel:6303527340">(937) 382-3867</a>
                        <a class="email" href="malito:info@wilmingtoniron.com">info@wilmingtoniron.com</a>
                    </div>
                </div>

                <div class="hours">
                    <h4>Hours</h4>
                    <ul>
                        <li><h6>Receiving Hours</h6></li>
                        <li>Monday - Friday: 7:30 - 2:00</li>                    
                    </ul>
                    <ul>
                        <li><h6>Industrial Hours</h6></li>
                        <li>Monday - Friday: 7:30 - 4:00</li>
                    </ul>
                    <ul>
                        <li>Weekend: CLOSED</li>
                        <li>Major Holidays: Hours May Vary</li>
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