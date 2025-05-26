import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

import { healthIndicator } from '../../data/healthIndicator';
import { healthCards } from '../../data/healthCards';
import { calendarData } from '../../data/calendarData';
import { schedule } from '../../data/schedule';




const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
        <div className='left-column '>
      <div className="anatomy-health-row">
    <AnatomySection indicators={healthIndicator} />
    <HealthStatusCards cards={healthCards} />
  </div>
 <ActivityFeed />
      </div>
      <div className='right-column '>
      <CalendarView calendarData={calendarData} />
      <UpcomingSchedule schedule={schedule} />
      </div>
     
    </div>
  );
};

export default DashboardMainContent;
