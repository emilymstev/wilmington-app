import React, { useState } from 'react';
import './sustainability.css';
import pdf14001 from '../components/certificates/ISO CERT 14001-2015 APR 2024.pdf';
import pdf45001 from '../components/certificates/ISO CERT 45001-2018 APR 2024.pdf';
import pdf9001 from '../components/certificates/ISO CERT 9001-2015 APR 2024.pdf';
import qes from '../components/certificates/ISO.pdf';

const Sustainability = () => {
    const [activeQuestions, setActiveQuestions] = useState([]);
    
    const category = {
        title: 'Certifications',
        certifications: [
            { name: 'ISO 14001:2015', certificate: pdf14001},
            { name: 'ISO 45001:2018', certificate: pdf45001},
            { name: 'ISO 9001:2015', certificate: pdf9001},

        ],

    };

    const handleQuestionClick = (questionIndex) => {
        setActiveQuestions(prev => {
            const isQuestionOpen = prev.includes(questionIndex);
            return isQuestionOpen
                ? prev.filter(index => index !== questionIndex)
                : [...prev, questionIndex];
        });
    };

    return (
        <div className="body">
            <div className="section" id="sustainability_header">
                <h1>ISO Compliance</h1>
            </div>
            <div className="alternate" id="integrity">
                <h3>Environmental Integrity is Our Priority</h3>
                <h4>Our Commitment</h4>
                <p>The Wilmington Iron & Metal Company purchases, processes, and markets a wide array of scrap metals, metal bearing waste streams, and other recyclable materials for industry and the general public. Wilmington's industrial client base includes manufacturers that supply parts to the automotive and aerospace sectors as well as metal working firms involved in the manufacture of goods for the construction, equipment, and retail sectors. The Company operates one of the cleanest and most environmentally compliant scrap facilities in the world. In 2005, Wilmington became the first scrap facility in the U.S. to be certified to ISO 9001 (quality), ISO 14001 (environmental), and OHSAS 18001 (safety).</p>
                <h4>Today</h4>
                <p>Wilmington remains one of very few recycling firms in the U.S. to have earned and kept these international certifications. We take great pride in our people, our facility, and the economic and environmental value of our services.</p>
            </div>
            <div className="standard">
                <div className="category">
                    <h4>{category.title}</h4>
                    <div className="questions">
                        {category.certifications.map((cert, index) => (
                            <div key={index} className="question-item">
                                <div
                                    className="question-header"
                                    onClick={() => handleQuestionClick(index)}
                                >
                                    <span className="question-text">{cert.name}</span>
                                    <span
                                        className={`toggle-icon ${activeQuestions.includes(index) ? 'open' : 'closed'}`}
                                    >
                                        <i className={`fas ${activeQuestions.includes(index) ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                                    </span>
                                </div>
                                {activeQuestions.includes(index) && (
                                    <div className="certificate-container">
                                        <iframe class="pdf" id="certificate" src={cert.certificate}></iframe>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="standard-dk">
            <h2>Quality, Environmental, & Safety Policy Statement</h2>
                <div class="section" id="qes">
                    <p>As an innovative and customer focused scrap management firm, The Wilmington
                        Iron &amp; Metal Company is committed to maintaining and improving business
                        management systems that exceed consumer and regulatory requirements,
                        protect the environment and guard the health and safety of our Team Members,
                        customers and neighbors.</p>
                    <p>The Company’s Team Members have produced this QES POLICY STATEMENT
                    to make clear to all that our mission must be to:</p>
                    <li>Eliminate or minimize the environmental impace of our operations.</li>
                    <li>Increase the recycling rates of our customers and the value of our services to them.</li>
                    <li>Protect Team Members and visitors from safety risks and hazards.</li>
                    <li>Understand and consistently exceed the requirements of our consumers, our customers, and any applicable regulatory agencies.</li>
                    <p>This is our statement of aims and objectives against which all other business
                    decisions will be made.</p>
                    <p>We will operate a Quality, Environmental, and Safety (QES) system that exceeds
                    the requirements of the ISO regulatory requirements</p>
                    <p>We will never lose sight of the economic importance and benefit our investment in
                        quality control, environmental compliance, safety, and best management practices
                        provide to us, our customers and the consumers we supply.</p>
                    <p>Our investment in the QES system provides us with a significant strategic and
                        competitive advantage within our industry. It complements the green initiatives
                        and business goals of our customers and will drive the continued and profitable
                        growth of our Company and our Team Members.</p>
                    <p>We will at all times be environmentally responsible neighbors within our community
                        and the communities in which we do business.</p>
                    <p>We will continually improve our QES performance, the knowledge and training of
                        our people, and, the scope and value of our services to our customers and the
                        consumers we supply.</p>
                    <p>Every Team Member, vendor, contractor and visitor will be advised of this Policy
                        and will be required to follow established guidelines and best management
                        practices at all times.</p>

                    
                </div>
            </div>
        </div>
    );
};

export default Sustainability;