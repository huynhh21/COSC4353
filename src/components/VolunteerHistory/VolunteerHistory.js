import React, { useState } from 'react';
import './VolunteerHistory.css';

const VolunteerHistory = () => {
  // Sample data for demonstration purposes
  const [volunteerEntries] = useState([
    {
      id: 1,
      eventName: 'Beach Cleanup',
      eventDescription: 'Cleaning the beach area',
      location: 'Miami Beach',
      skills: 'Teamwork, Physical Strength',
      urgency: 'High',
      eventDate: '2024-07-15'
    },
    {
      id: 2,
      eventName: 'Food Drive',
      eventDescription: 'Collecting and distributing food',
      location: 'Community Center',
      skills: 'Organization, Communication',
      urgency: 'Medium',
      eventDate: '2024-08-20'
    }
  ]);

  return (
    <div className="volunteer-history">
      <h2>Volunteer History</h2>
      <table className="volunteer-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Description</th>
            <th>Location</th>
            <th>Skills</th>
            <th>Urgency</th>
            <th>Event Date</th>
          </tr>
        </thead>
        <tbody>
          {volunteerEntries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.eventName}</td>
              <td>{entry.eventDescription}</td>
              <td>{entry.location}</td>
              <td>{entry.skills}</td>
              <td>{entry.urgency}</td>
              <td>{entry.eventDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerHistory;
