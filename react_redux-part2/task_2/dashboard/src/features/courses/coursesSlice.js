import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    // Kursu seçmək üçün action
    selectCourse: (state, action) => {
      const course = state.list.find((c) => c.id === action.payload);
      if (course) {
        course.isSelected = true;
      }
    },
    // Seçimi ləğv etmək üçün action
    unSelectCourse: (state, action) => {
      const course = state.list.find((c) => c.id === action.payload);
      if (course) {
        course.isSelected = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      // API-dan gələn hər bir kursa isSelected: false əlavə edirik
      state.list = action.payload.map((course) => ({
        ...course,
        isSelected: false,
      }));
    });
  },
});

export const { selectCourse, unSelectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;