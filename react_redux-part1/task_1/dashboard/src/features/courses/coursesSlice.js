import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: []
  },
  reducers: {
    fetchCoursesSuccess: (state, action) => {
      state.courses = action.payload;
    }
  }
});

export const { fetchCoursesSuccess } = coursesSlice.actions;
export default coursesSlice.reducer;