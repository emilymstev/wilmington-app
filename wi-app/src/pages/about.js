import React from "react";
import "./about.css";
import facility from "../components/filler-photos/crane_in_pile.JPG";

const About = () => {
    return (
        <div class="body">
            <div class="section" id="abouthead">
                <h1>About Wilmington Iron</h1>
            </div>
            <div class="alternate" id="history">
                <h2>Family Owned and Operated Since 1923</h2>
                <p>Founded in 1923 by Isaac Raizk, the Wilmington Iron & Metal Company has an
                85-year history of bringing innovation and exceptional service and value to industry and their scrap management and recycling programs. It’s a time-tested track record of maximizing material values and tailoring solutions to businesses of all sizes. What began as a family-owned business remains a family-owned business today. And what began as a small regional operation is today nationwide in its scope. Wilmington Iron & Metal processes and markets more than 200 million pounds of scrap metal and other recylable materials every year. The company continues to build on its heritage of innovation, leading the industry in green initiatives and setting new quality standards with it's ISO certifications.</p>
            </div>
            <div class="standard" id="facility">
                <h2>Our Facility</h2>
                <div id="plant">
                    <div id="text">
                        <p>We operate a modern and environmentally compliant processing facility that employs skilled professionals and the best available technologies and equipment. We can analyze, sort bale, shear, torch and package your materials in any form to take advantage of market opportunities. We have the production capabilities and the marketing expertise to maximize your returns.</p>
                    </div>
                    <div id="photo">
                        <img src={facility}></img>
                    </div>
                </div>
            </div>
            <div class="alternate" id="comprehensive">
                <h2>We are here to serve you!</h2>
                <p>Our solutions begin with a comprehensive analysis of your scrap recycling opportunities with a focus on waste minimization. We will work with you to design a program that meets your needs.</p>
                <a href="/materials"><button class="secondary">Learn More</button></a>
            </div>
            <div class="standard-dk" id="aboutsustainability">
                <h2>Industry Leaders in Sustainability Efforts</h2>
                <p>Wilmington is committed to environmental and safety compliance for the best interest of our clients. Learn more about our commitment to environmental integrity.</p>
                <a href="/sustainability"><button class="primary">See ISO Certificates</button></a>
            </div>
        </div>
        
    );
};

export default About;