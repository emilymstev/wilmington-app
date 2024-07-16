import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    const [isPeddlersVisible, setIsPeddlersVisible] = useState(true);
    const [isIndustrialPartnersVisible, setIsIndustrialPartnersVisible] = useState(true);
    const [isMaterialsVisible, setIsMaterialsVisible] = useState(true);
    const [isCareersVisible, setIsCareersVisible] = useState(true);

    const togglePeddlers = () => setIsPeddlersVisible(!isPeddlersVisible);
    const toggleIndustrialPartners = () => setIsIndustrialPartnersVisible(!isIndustrialPartnersVisible);
    const toggleMaterials = () => setIsMaterialsVisible(!isMaterialsVisible);
    const toggleCareers = () => setIsCareersVisible(!isCareersVisible);

    return (
        <div className="body">
            <h1>FAQ</h1>
            <div className="container" id="faq">
                <div className="category">
                    <button onClick={togglePeddlers}>
                        <h4>Peddlers <i className={`fa ${isPeddlersVisible ? 'fa-caret-up' : 'fa-caret-down'}`}></i></h4>
                    </button>
                    {isPeddlersVisible && (
                        <div className="drop-content">
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question... Here is an in-depth answer to the question... Here is an in-depth answer to the question... Here is an in-depth answer to the question... Here is an in-depth answer to the question... Here is an in-depth answer to the question... Here is an in-depth answer to the question... Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="category">
                    <button onClick={toggleIndustrialPartners}>
                        <h4>Industrial Partners <i className={`fa ${isIndustrialPartnersVisible ? 'fa-caret-up' : 'fa-caret-down'}`}></i></h4>
                    </button>
                    {isIndustrialPartnersVisible && (
                        <div className="drop-content">
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="category">
                    <button onClick={toggleMaterials}>
                        <h4>Materials <i className={`fa ${isMaterialsVisible ? 'fa-caret-up' : 'fa-caret-down'}`}></i></h4>
                    </button>
                    {isMaterialsVisible && (
                        <div className="drop-content">
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="category">
                    <button onClick={toggleCareers}>
                        <h4>Careers <i className={`fa ${isCareersVisible ? 'fa-caret-up' : 'fa-caret-down'}`}></i></h4>
                    </button>
                    {isCareersVisible && (
                        <div className="drop-content">
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                            <div className="question">
                                <h6>Q: THIS IS THE QUESTION BEING ASKED</h6>
                                <p>A: Here is an in-depth answer to the question...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
