import React from 'react';
import { useSelector } from 'react-redux';
import { css } from 'aphrodite';
// stillər və digər importlar...

const Notifications = () => {
  const { notifications, loading } = useSelector((state) => state.notifications);

  return (
    <div className={css(styles.notificationsContainer)}>
      <div id="menuItem" className={css(styles.menuItem)}>
        Your notifications
      </div>
      <div id="notificationsDrawer" className={css(styles.drawer)}>
        <p>Here is the list of notifications</p>
        
        {loading ? (
          <p>Loading...</p> // Yüklənmə vəziyyəti
        ) : (
          <ul>
            {notifications.map((notif) => (
              <li key={notif.id}>{notif.value}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};