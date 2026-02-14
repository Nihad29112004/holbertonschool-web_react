import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await fetch('/notifications.json');
    const data = await response.json();
    
    // Yalnız oxunmamış bildirişləri map edib qaytarırıq
    return data
      .filter((item) => item.context.isRead === false)
      .map((item) => ({
        id: item.id,
        type: item.context.type,
        value: item.context.value,
        isRead: item.context.isRead,
      }));
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: false,
    error: null,
  },
  reducers: {
    markAsRead: (state, action) => {
      state.notifications = state.notifications.filter(
        (notif) => notif.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { markAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;