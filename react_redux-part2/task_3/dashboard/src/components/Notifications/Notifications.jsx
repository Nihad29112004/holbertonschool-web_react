import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredNotifications } from '../../features/selectors/notificationsSelector';
import { markAsRead } from '../../features/notifications/notificationsSlice';
import NotificationItem from '../NotificationItem/NotificationItem';

const Notifications = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const dispatch = useDispatch();

  const filteredNotifications = useSelector((state) => 
    getFilteredNotifications(state, currentFilter)
  );

  return (
    <div id="notificationsDrawer">
      <p>Here is the list of notifications</p>
      
      {/* Süzgəc düymələri */}
      <button onClick={() => setCurrentFilter('urgent')}>‼️</button>
      <button onClick={() => setCurrentFilter('default')}>??</button>
      <button onClick={() => setCurrentFilter('all')}>All</button>

      <ul>
        {filteredNotifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            id={notif.id}
            type={notif.type}
            value={notif.value}
            markAsRead={(id) => dispatch(markAsRead(id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;