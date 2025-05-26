import React from 'react';
import './CalendarView.css';

// Define week days and example dates (you can adjust dates dynamically later)
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weekDates = [11, 12, 13, 14, 15, 16, 17];
const times =['11:00','2:00','6:00','11:00','2:00','6:00','7:00'] // Example dates for one week in October 2021

const CalendarView = () => {
  return (
    <div className="calendar-section">
      <h3>October 2021</h3>

      <div className="calendar-grid">
        {weekDays.map((day, index) => (
          <div className="calendar-day" key={index} tabIndex={0} aria-label={`${day}, Day ${weekDates[index]}`}>
            <div className="weekday-name">{day}</div>
            <span className="weekday-date">{weekDates[index]}</span>
            <span className="weekday-time">{times[index]}</span>
          </div>
        ))}
      </div>

      {/* Appointment part unchanged */}
      <div className="appointment-box">
        <h4>Appointments on 15th</h4>
        <div className="appointment-list">
          <div className="appointment-item upcoming">12:00 - Follow-up Check</div>
          <div className="appointment-item upcoming">13:00 - Dental Cleaning</div>
        </div>

        <h4 className="appointment-subheading">Appointments on 12th</h4>
        <div className="appointment-list">
          <div className="appointment-item past">09:00 - Blood Test</div>
          <div className="appointment-item past">11:00 - Vision Screening</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
