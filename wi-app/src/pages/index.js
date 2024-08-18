import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import img from "../components/filler-photos/WI_truck.JPG";
import img2 from "../components/filler-photos/conveyor_pile.JPG";
import img3 from "../components/filler-photos/crane.JPG";
import img4 from "../components/filler-photos/hydraulic.JPG";

const Home = () => {
    //carousel setup
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
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

    const slides = [
        { src: img, title: 'Title for Image 1', description: 'Description for Image 1' },
        { src: img2, title: 'Title for Image 2', description: 'Description for Image 2' },
        { src: img3, title: 'Title for Image 3', description: 'Description for Image 3' },
        { src: img4, title: 'Title for Image 4', description: 'Description for Image 4' },
    ];

    return (
        <div class="body">
            <div class="section" id="carousel">
                <div className="carousel-container">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={slide.src} alt={`Slide ${index + 1}`} />
                            <div className="carousel-caption">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
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
            <div class="section" id="sustainability">
                <div class="standard" id="sustainability">
                    <h2>A Green Light to Cost Savings</h2>
                    <p>We offer innovative and ISO Certified scrap management and recycling services.</p>
                    <br/>
                    <a href="/sustainability">
                        <button class="primary">Our ISO Certifications</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
