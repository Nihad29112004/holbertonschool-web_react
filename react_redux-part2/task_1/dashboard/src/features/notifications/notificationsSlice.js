import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fetchNotifications thunk-ı burada təyin edildiyini fərz edirik

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: false, // Default olaraq false
    error: null,
  },
  reducers: {
    // digər reducer-lər...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true; // Sorğu başladı
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false; // Sorğu uğurla bitdi
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false; // Sorğu uğursuz oldu
        state.error = action.error.message;
      });
  },
});

export default notificationsSlice.reducer;