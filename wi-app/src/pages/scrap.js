import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './scrap.css';

// Card Component
const Card = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <button class="primary" id="card-button" onClick={toggleDropdown}>
        {isOpen ? 'Hide Details' : 'Show Details'}
      </button>
      {isOpen && <div className="card-details">{details}</div>}
    </div>
  );
};

// Materials Component
const Materials = () => {
  const cardData = [
    { material: 'Material 1', details: 'Specific info for material' },
    { material: 'Material 2', details: 'Specific info for material' },
    { material: 'Material 3', details: 'Specific info for material' },
    { material: 'Material 4', details: 'Specific info for material' },
    { material: 'Material 5', details: 'Specific info for material' },
    { material: 'Material 6', details: 'Specific info for material' },
    { material: 'Material 7', details: 'Specific info for material' },
    { material: 'Material 8', details: 'Specific info for material' },
    { material: 'Material 9', details: 'Specific info for material' }
  ];

  return (
    <div className="body">
      <div className="section" id="materialshead">
        <h1>Materials</h1>
      </div>
      <div className="alternate" id="accept">
        <h3>Your Scrap Recycling Solution</h3>
        <h4>We accept:</h4>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <div id="no-accept">
            <h4>We do NOT accept:</h4>
            <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            </ul>
        </div>
        
      </div>
      <div className="alternate" id="cards">
        <h2>Material Specifications</h2>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card key={index} title={card.material} details={card.details} />
          ))}
        </div>
      </div>
      <div className="standard" id="pricing">
        <h2>Pricing</h2>
        <p>Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing. Information about pricing.</p>
        <br />
        <p>Learn more about our facility and drop-off hours.</p>
        <a href="/contact"><button className="primary">Learn More</button></a>
      </div>
    </div>
  );
};

export default Materials;