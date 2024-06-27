import React from 'react';
import './App.css';
import UserRegistration from './components/UserRegistration/UserRegistration';
import NotificationSystem from './components/NotificationSystem/NotificationSystem';
import VolunteerHistory from './components/VolunteerHistory/VolunteerHistory';

function App() {
  return (
    <div className="App">
      <main>
        <NotificationSystem />
      </main>
    </div>
  );
}

export default App;
