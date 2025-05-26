import React from 'react';
import './AnatomySection.css';
import anatomyImg from "/src/assets/gettyimages-182043494-1024x1024.jpg"; // Use a placeholder if needed

const AnatomySection = ({ indicators }) => {
  return (
    <div className="anatomy-section">
      <img src={anatomyImg} alt="Human Anatomy" className="anatomy-img" />
      {/* <div className="indicators">
        {indicators.map((item, index) => (
          <div className={`indicator ${item.status}`} key={index}>
            <span>{item.label}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AnatomySection;
