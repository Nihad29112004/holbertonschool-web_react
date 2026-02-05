import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    filter: 'DEFAULT'
  },
  reducers: {
    markAsRead: (state, action) => {
      // Məntiq bura yazılacaq
    }
  }
});

export const { markAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;