import React from "react";
import "./contact.css";


const Contact = () => {
    return (
        <div class="body">
            <div class="section" id="contactImg">
                <h1>Contact Us</h1>
            </div>
            <div class="section" id="cost_obligation">
                <div class="alternate" id="">
                    <h3>NO COST. NO OBLIGATION.</h3>
                    <p>Reach out to work on a tailored turnkey solution.</p>
                    <p>Learn what a Wilmington program can offer you and your business.</p>
                    <br/>
                    <ul>
                        <li>
                            <span class="icon">&#9993;</span>
                            <p>info@wilmingtoniron.com</p>
                        </li>
                        <li>
                            <span class="icon">&#9742;</span>
                            <p>(###)###-####</p>
                        </li>
                    </ul>
                    <a href="/about/staff">
                        <button class="secondary">Our Staff</button>
                    </a>
                </div>
            </div>
            <div class="standard" id="facility">
                <h2>Stop by the facility</h2>
                <p>Located off of Interstate 71 in Southwest Ohio, equidistant from Cincinnati, Columbus, and Dayton.</p>
                <div id="map">
                    <a href="https://www.google.com/maps?ll=39.41832,-83.839638&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=1942942165541449753"><h6>2149 S. SOUTH ST, WILMINGTON, OH 45177</h6></a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.2566844462176!2d-83.8396377!3d39.4183197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840c6b04d41ccc3%3A0x1af6b79afc39f019!2sWilmington%20Iron%20%26%20Metal%20Co%20Inc!5e0!3m2!1sen!2sus!4v1720368236782!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="section" id="hourssect">
                <div id="hours">
                    <h4>Hours</h4>
                    <ul>
                        <li><h6>RECEIVING HOURS</h6></li>
                        <li>Monday - Friday: 7:30 - 2:00</li>                    
                    </ul>
                    <ul>
                        <li><h6>INDUSTRIAL HOURS</h6></li>
                        <li>Monday - Friday: 7:30 - 4:00</li>
                    </ul>
                    <ul>
                        <li>Weekend: CLOSED</li>
                        <li>Major Holidays: Hours May Vary</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;