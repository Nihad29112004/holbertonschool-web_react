import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logout } from '../auth/authSlice';

const API_BASE_URL = 'http://localhost:5173';
export const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

// Async thunk to fetch courses
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await axios.get(ENDPOINTS.courses);
    return response.data;
  }
);

const initialState = {
  courses: [],
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the local fetchCourses thunk
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      // Listen for the logout action from authSlice to reset state
      .addCase(logout, (state) => {
        state.courses = [];
      });
  },
});

export default coursesSlice.reducer;