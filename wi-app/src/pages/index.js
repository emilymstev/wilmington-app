import React from "react";
/**import "./index.css";*/
import img from "../components/filler-photos/WI_truck.JPG";
import img2 from "../components/filler-photos/conveyor_pile.JPG";
import img3 from "../components/filler-photos/crane.JPG";
import img4 from "../components/filler-photos/hydraulic.JPG";



const Home = () => {
    return (
        <div class="body">
            <div class = "carousel">
                <ul>
                    <li class="slide">
                        <img src= {img} alt={"Wilmington Iron Truck"}></img>
                    </li>
                    <li class="slide">
                        <img src= {img2} alt={"Wilmington Iron Conveyor Pile"}></img>
                    </li>
                    <li class="slide">
                        <img src= {img3} alt={"Wilmington Iron Crane"}></img>
                    </li>
                    <li class="slide">
                        <img src= {img4} alt={"Wilmington Iron Hydraulic"}></img>
                    </li>
                </ul>
            </div>
            
        </div>
        
    );
};

export default Home;

/**
 * <button class="carousel-button prev">&#x2039;</button>
 * <button class="carousel-button next">&#x203A;</button>
 */