import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { day: 'Mon', activity: 75 },
  { day: 'Tue', activity: 20 },
  { day: 'Wed', activity: 55 },
  { day: 'Thu', activity: 90 },
  { day: 'Fri', activity: 35 },
  { day: 'Sat', activity: 60 },
  { day: 'Sun', activity: 10 },
];

const ActivityFeed = () => (
  <div className="activity-feed" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
    fontFamily: "'Inter', sans-serif",
    color: '#1f2937',
    width: '100%',
    height: 250,
  }}>
    <h3 style={{ marginBottom: 16, fontWeight: 700, fontSize: 20 }}>Weekly Activity</h3>

    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        data={weeklyData}
        margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="day" tick={{ fontSize: 14, fill: '#6b7280' }} />
        <YAxis tick={{ fontSize: 14, fill: '#6b7280' }} />
        <Tooltip
          contentStyle={{ fontSize: 14, borderRadius: 8 }}
          cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
        />
        <Bar
          dataKey="activity"
          fill="#3b82f6"
          radius={[6, 6, 0, 0]}
          barSize={30}
          animationDuration={500}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityFeed;
