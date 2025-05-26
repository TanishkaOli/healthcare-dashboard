import React from "react";
import "./DashboardOverview.css";

const HealthStatusCards = ({ cards }) => {
  return (
    <div className="health-cards">
      {cards.map((card) => (
        <div key={card.id} className="health-card">
          <h3>{card.title}</h3>
          <p>{card.date}</p>

          <span className={`status-label ${card.color}`}>{card.status}</span>

          {/* Slider added here */}
          <div className="status-slider-wrapper">
            <div className={`status-slider-bar ${card.color}`} style={{ width: `${card.percentage}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
