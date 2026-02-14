    import { createSelector } from '@reduxjs/toolkit';

const getNotifications = (state) => state.notifications.notifications;

export const getFilteredNotifications = createSelector(
  [getNotifications, (state, filter) => filter],
  (notifications, filter) => {
    if (filter === 'urgent') {
      return notifications.filter((n) => n.type === 'urgent');
    }
    if (filter === 'default') {
      return notifications.filter((n) => n.type === 'default');
    }
    return notifications; // 'all' filteri
  }
);