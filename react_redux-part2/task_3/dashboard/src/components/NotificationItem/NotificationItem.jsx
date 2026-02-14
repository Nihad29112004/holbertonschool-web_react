import React from 'react';

const NotificationItem = ({ id, type, value, markAsRead }) => {
  // Tipə görə rəng təyini
  const style = {
    color: type === 'urgent' ? 'red' : 'blue',
  };

  return (
    <li
      data-notification-type={type}
      style={style}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
};

export default React.memo(NotificationItem);