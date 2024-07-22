import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NotificationSystem.css';

const NotificationSystem = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications', {
          params: { userId }
        });
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userId]);

  const dismissNotification = async (id) => {
    try {
      await axios.delete(`/notifications/${id}`, {
        params: { userId }
      });
      setNotifications(notifications.filter(notification => notification.id !== id));
    } catch (error) {
      console.error('Error dismissing notification:', error);
    }
  };

  return (
    <div className="notification-system">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => dismissNotification(notification.id)}>Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationSystem;