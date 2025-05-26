// src/components/DashboardOverview/AnatomySection.jsx
import React from "react";
import "./DashboardOverview.css";
import bodyImage from "/src/assets/gettyimages-182043494-1024x1024.jpg";

const AnatomySection = ({ indicators }) => {
  return (
    <div className="anatomy-section">
      <img src={bodyImage} alt="Human Anatomy" className="anatomy-img" />
      <div className="indicator-list">
        {indicators.map((item) => (
          <div key={item.id} className={`indicator ${item.status}`}>
            <span style={{ backgroundColor: item.color }} className="status-dot"></span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
