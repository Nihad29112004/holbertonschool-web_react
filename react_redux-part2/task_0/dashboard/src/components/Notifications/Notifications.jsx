import React, { useRef } from 'react'; // useRef əlavə etdik
import { StyleSheet, css } from 'aphrodite';
// Redux-dan displayDrawer-i gətirən useSelector-u sildik!

const Notifications = ({ listNotifications = [] }) => {
  // 1. Reference yaradırıq
  const drawerRef = useRef(null);

  // Performans yoxlaması üçün log (Tapşırıq bunu istəyir)
  console.log('Notifications component rendering...');

  // 2. Toggle funksiyası (Redux state-i dəyişmir, sadece DOM-a müdaxilə edir)
  const handleToggleDrawer = () => {
    if (drawerRef.current) {
      // Aphrodite-in yaratdığı 'visible' klasını elementə əlavə edirik/silirik
      drawerRef.current.classList.toggle(css(styles.visible));
    }
  };

  return (
    <div className={css(styles.notificationsContainer)}>
      {/* 3. Menu Item-a klikləyəndə toggle işləsin */}
      <div 
        className={css(styles.menuItem)} 
        id="menuItem"
        onClick={handleToggleDrawer}
      >
        Your notifications
      </div>

      {/* 4. ref={drawerRef} vasitəsilə bu div-i idarə edəcəyik */}
      <div 
        ref={drawerRef} 
        className={css(styles.notificationsDrawer)}
        id="notificationsDrawer"
      >
        <button
          style={{ float: 'right', cursor: 'pointer' }}
          aria-label="Close"
          onClick={handleToggleDrawer} // Bağlamaq üçün də eyni funksiya
        >
          X
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            listNotifications.map((notif) => (
              <li key={notif.id}>{notif.value}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

// 5. Stilləri tapşırığa uyğun yeniləyirik
const styles = StyleSheet.create({
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '12px',
  },
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
  },
  notificationsDrawer: {
    border: '2px dashed red',
    padding: '10px',
    marginTop: '5px',
    // TAPŞIRIQ: Default olaraq gizli olmalıdır
    opacity: 0,
    visibility: "hidden",
  },
  // TAPŞIRIQ: 'visible' adlı obyekt mütləq olmalıdır
  visible: {
    opacity: 1,
    visibility: "visible",
  },
});

export default Notifications;