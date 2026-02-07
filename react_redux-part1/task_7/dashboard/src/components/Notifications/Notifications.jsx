import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  markNotificationAsRead, 
  showDrawer, 
  hideDrawer 
} from '../../features/notifications/notificationsSlice';
import NotificationItem from './NotificationItem';
import closeIcon from '../../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

function Notifications() {
  // Redux store-dan state-ləri götürürük
  const { notifications, displayDrawer } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  // Action dispatch funksiyaları
  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  const markAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <div className={css(styles.notificationsContainer)}>
      <div 
        className={css(styles.menuItem)} 
        id="menuItem" 
        onClick={handleDisplayDrawer}
      >
        Your notifications
      </div>

      {displayDrawer && (
        <div className={css(styles.notifications)} id="notifications">
          <button
            style={{ float: 'right', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            <img src={closeIcon} alt="closeIcon" width="15px" />
          </button>
          
          <p>Here is the list of notifications</p>
          <ul className={css(styles.list)}>
            {notifications.length === 0 ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : (
              notifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => markAsRead(notif.id)}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    right: '12px',
    top: '12px',
  },
  menuItem: {
    marginBottom: '10px',
    cursor: 'pointer',
    ':hover': {
      animationName: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-5px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      animationDuration: '0.5s',
      animationIterationCount: 3,
    },
  },
  notifications: {
    border: '2px dashed #e0354b',
    padding: '10px',
    width: '400px',
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      border: 'none',
      fontSize: '20px',
      padding: 0,
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
});

export default Notifications;