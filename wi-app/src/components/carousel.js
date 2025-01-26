// src/Carousel.js
import React, { useState, useEffect, useRef } from 'react';
import './carousel.css'; // Ensure this path is correct

import img from "../components/filler-photos/WI_truck.JPG";
import img2 from "../components/filler-photos/interior_sorting.JPG";
import img3 from "../components/filler-photos/cube_scraps.JPG";
import img4 from "../components/filler-photos/WI_sign.JPG";

const images = [
    { src: img, title: 'Family-Owned and Operated Since 1923', description: 'We are here to focus on customer-relationships and personalized solutions', href: "/about", btntext: "About Us" },
    { src: img2, title: 'Sustainability is Our Priority', description: 'Our dedication to ISO compliance helps us lead the industry.', href: '/sustainability', btntext: "Learn More" },
    { src: img3, title: 'We take a Variety of Materials', description: 'Visit our page to see specifications.', href: "/materials", btntext: "Visit Page" },
    { src: img4, title: 'Visit the facility', description: 'Learn how we can meet your scrap metal recycling needs.', href: "/contact", btntext: "Learn More"},
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;
    const intervalRef = useRef(null); // Ref to store interval ID

    // Function to start the interval
    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Clear existing interval
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 8000); // 6 seconds
    };

    // Start the interval on component mount
    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [totalImages]);

    // Reset interval when changing slide manually
    const goToSlide = (index) => {
        setCurrentIndex(index);
        startInterval(); // Restart the interval
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + totalImages) % totalImages;
            startInterval(); // Restart the interval
            return newIndex;
        });
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % totalImages;
            startInterval(); // Restart the interval
            return newIndex;
        });
    };

    return (
        <div className="carousel">
            <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        <div className={`caption ${index === currentIndex ? 'fade-in' : ''}`}>
                            <h2>{image.title}</h2>
                            <p>{image.description}</p>
                            <a href={image.href}><button class="primary">{image.btntext}</button></a>
                        </div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={goToPrevious}>❮</button>
            <button className="next" onClick={goToNext}>❯</button>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
