
// src/App.js
import React from 'react';
// import Dashboard from './components/Dashboard';
import GoalSetter from './components/GoalSetter';
import SiteTracker from './components/SiteTracker';

export default function App() {
  return (
    <div className="p-4 w-80">
      <h1 className="text-xl font-bold mb-2">Productivity Tracker</h1>
      <GoalSetter />
      <SiteTracker />
      {/* <Dashboard /> */}
    </div>
  );
}