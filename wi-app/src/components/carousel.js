import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import img from "../components/filler-photos/WI_truck.JPG";
import img2 from "../components/filler-photos/conveyor_pile.JPG";
import img3 from "../components/filler-photos/crane.JPG";
import img4 from "../components/filler-photos/WI_sign.JPG";
import "./carousel.css";

const images = [
    {src: img, caption_head: 'Family-Owned and Operated Since 1923', caption_text: 'We are here to focus on customer-relationships and personalized solutions.', button_link: '/about', button_text: 'About Us'},
    {src: img2, caption_head: 'Title for Image 2', caption_text: 'Description for Image 2', button_link: '', button_text: ''},
    {src: img3, caption_head: 'Title for Image 3', caption_text: 'Description for Image 3', button_link: '', button_text: ''},
    {src: img4, caption_head: 'Visit the facility', caption_text: 'Learn how we can meet your scrap metal recycling needs.', button_link: '/contact', button_text: 'Learn More'}
]

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const { opacity } = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
        config: {duration: 500}
    });

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    React.useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div class="section">
            <div className="carousel-container">
                <div className="carousel-image-container">
                    <animated.img
                        src={images[index].src}
                        alt={'carousel-image-${index}'}
                        style={{ opacity }}
                        className="carousel-image"
                    />
                    <animated.div className="carousel-caption" style={{ opacity }}>
                        {images[index].caption}
                    </animated.div>
                </div>
            </div>
        </div>
    );
};


export default Carousel;