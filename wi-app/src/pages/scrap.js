import React from "react";
import "./scrap.css";
import facility from "../components/filler-photos/crane_in_pile.JPG";

const Materials = () => {
    return (
        <div class="body">
            <div class="section" id="materialshead">
                <h1>Materials</h1>
            </div>
            <div class="alternate" id="accept">
                <h4>We accept:</h4>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <div class="sub">
                    
                </div>
            </div>
            <div class="standard" id="no-accept">
                <h4>We do NOT accept:</h4>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </div>
            <div class="standard-dk" id="pricing">
                <h2>Pricing</h2>
                <p>Information about pricing.Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing.</p>
                <br/>
                <p>Learn more about our facility and drop off hours.</p>
                <a href="/contact"><button class="primary">Learn More</button></a>
            </div>
        </div>
        
    );
};

export default Materials;