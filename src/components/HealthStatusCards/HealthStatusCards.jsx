import React from 'react';
import './HealthStatusCards.css';

const HealthStatusCards = ({ cards }) => {
  return (
    <div className="health-cards-container">
      {cards.map((card, index) => (
        <div className="health-card" key={index}>
          <img
            src={card.image}
            alt={card.title}
            className="card-icon"
          />
          <div className="card-text">
            <h4>{card.title}</h4>
            <p>{card.date}</p>
            <span className={`status ${card.status.toLowerCase()}`}>
              {card.status}
            </span>
            <div className="progress-bar">
  <div
    className={`progress-fill ${card.colorClass}`}
    style={{ width: `${card.progress}%` }}
  ></div>
</div>
          </div> 
         
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
