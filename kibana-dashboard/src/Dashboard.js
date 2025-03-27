// src/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <h1>Kibana Dashboard</h1>
      <iframe 
        src="https://kibana.anhkiet.xyz/app/r/s/9Trjm" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Kibana Dashboard"
      />
    </div>
  );
}

export default Dashboard;
