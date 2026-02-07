import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';
import coursesReducer from '../features/courses/coursesSlice';

/**
 * Root Reducer
 * Combines all feature-specific slices into a single state tree.
 * * State structure:
 * {
 * auth: { user: { email, password }, isLoggedIn },
 * notifications: { notifications: [], displayDrawer },
 * courses: { courses: [] }
 * }
 */
const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  courses: coursesReducer,
});

export default rootReducer;