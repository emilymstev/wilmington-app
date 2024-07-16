import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import logo from "../components/filler-photos/WIM_logo_color.png";
import img from "../components/filler-photos/WI_truck.JPG";
import img2 from "../components/filler-photos/conveyor_pile.JPG";
import img3 from "../components/filler-photos/crane.JPG";
import img4 from "../components/filler-photos/hydraulic.JPG";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [
        img,
        img2,
        img3,
        img4
    ];

    return (
        <div className="body">
            <div class="top">
                <img class="logo" src = {logo}></img>
                <div className="carousel-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
            <div class="container">
                <div class="sustainability">
                    <h2>A Green Light to Cost Savings</h2>
                    <p>We offer innovative and ISO Certified scrap management and recycling services.</p>
                    <br/>
                    <a href="/sustainability">
                        <button class="primary">Our ISO Certifications</button>
                    </a>
                </div>
            
                <div class="alternate" id="scrap">
                    <h3>YOUR SCRAP METAL RECYCLING SOLUTION.</h3>
                    <p>Learn what we can do to assist you in your scrap metal recycling. We take a variety of materials.</p>
                    <br/>
                    <a href="/scrap">
                        <button class="secondary">Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
