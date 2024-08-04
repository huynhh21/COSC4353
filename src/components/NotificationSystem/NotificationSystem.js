import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NotificationSystem.css';
import Notification from './Notification';

const NotificationSystem = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8081/notifications', {
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
      await axios.delete(`http://localhost:8081/notifications/${id}`, {
        params: { userId }
      });
      setNotifications(notifications.filter(notification => notification.notification_id !== id));
    } catch (error) {
      console.error('Error dismissing notification:', error);
    }
  };

  return (
    <div className="notification-system">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.notification_id}>
            <Notification
              message={notification.message}
              onClose={() => dismissNotification(notification.notification_id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationSystem;
