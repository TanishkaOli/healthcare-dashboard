import React from 'react';
import './UpcomingSchedule.css';

const UpcomingSchedule = ({ schedule }) => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    {schedule.map((group, index) => (
      <div className="schedule-group" key={index}>
        <div className="schedule-day-label">{group.day}</div>
        <div className="schedule-grid">
          {group.list.map((appt, i) => (
            <div className="schedule-item" key={i}>
              {/* Show emoji icon */}
              <div className="schedule-icon" aria-label={appt.title + " icon"}>
                <span role="img" aria-label={appt.title}>{appt.icon}</span>
              </div>

              <div className="schedule-time">{appt.time}</div>
              <div className="schedule-details">
                <div className="schedule-title">{appt.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
