import React, { useState } from 'react';
import Notification from './Notification';
import './NotificationSystem.css';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');

  const addNotification = () => {
    if (message.trim() === '') return;  // Avoid adding empty notifications
    setNotifications([...notifications, { id: Date.now(), message }]);
    setMessage('');
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="notification-system">
      <h2>Notification System</h2>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter notification message"
        />
        <button onClick={addNotification}>Add Notification</button>
      </div>
      <div className="notifications">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            message={notification.message}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;