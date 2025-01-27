import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../components/carousel.js';
import "./index.css";

const Home = () => {

    return (
        <div class="body">
         
            <div class="section" id="carousel">
                <Carousel />
            </div>
            <div class="section">
                <div class="alternate" id="scrap">
                    <h3>YOUR SCRAP METAL RECYCLING SOLUTION.</h3>
                    <p>Learn what we can do to assist you in your scrap metal recycling. We take a variety of materials.</p>
                    <br/>
                    <a href="/scrap">
                        <button class="secondary">Learn More</button>
                    </a>
                </div>
            </div>
            <div class="standard" id="sustainability">
                <h2>A Green Light to Cost Savings</h2>
                <p>We offer innovative and ISO Certified scrap management and recycling services.</p>
                <br/>
                <a href="/sustainability">
                    <button class="primary">Our ISO Certifications</button>
                </a>
            </div>
        </div>
    );
};

export default Home;
