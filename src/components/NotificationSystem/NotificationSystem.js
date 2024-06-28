import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import './NotificationSystem.css';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate receiving notifications
    const simulatedNotifications = [
      { id: 1, type: 'New Event Assignment', message: 'You have been assigned to a new event: Beach Cleanup' },
      { id: 2, type: 'Update', message: 'Event details have been updated for: Food Drive' },
      { id: 3, type: 'Reminder', message: 'Reminder: Volunteer orientation meeting tomorrow at 10 AM' }
    ];
    setNotifications(simulatedNotifications);
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="notification-system">
      <h2>Notifications</h2>
      <div className="notifications">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            message={`${notification.type}: ${notification.message}`}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;