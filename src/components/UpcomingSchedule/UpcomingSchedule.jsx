import React from 'react';
import { FaCalendarAlt, FaPhone, FaUsers } from 'react-icons/fa'; // example icons
import './UpcomingSchedule.css';

const UpcomingSchedule = ({ schedule }) => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    {schedule.map((group, index) => (
      <div className="schedule-group" key={index}>
        <div className="schedule-day-label">{group.day}</div>
        <div className="schedule-grid">
          {group.appointments.map((appt, i) => (
            <div className="schedule-item" key={i}>
              {/* Icon based on type */}
              <div className="schedule-icon">
                {appt.type === 'call' && <FaPhone />}
                {appt.type === 'meeting' && <FaUsers />}
                {!appt.type && <FaCalendarAlt />}
              </div>

              <div className={`appointment-dot ${appt.type || 'call'}`} />

              <div className="schedule-time">{appt.time}</div>
              <div className="schedule-details">
                <div className="schedule-title">{appt.title}</div>
                <div className="schedule-description">{appt.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
