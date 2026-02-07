import coursesReducer, { fetchCourses } from '../courses/coursesSlice';
import { logout } from '../auth/authSlice';

describe('coursesSlice reducer', () => {
  const initialState = {
    courses: [],
  };

  it('should return the initial state by default', () => {
    expect(coursesReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should update courses when fetchCourses is fulfilled', () => {
    const mockCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const action = { type: fetchCourses.fulfilled.type, payload: mockCourses };
    const state = coursesReducer(initialState, action);

    expect(state.courses).toHaveLength(2);
    expect(state.courses).toEqual(mockCourses);
  });

  it('should reset the courses array when logout is dispatched', () => {
    const populatedState = {
      courses: [{ id: 1, name: 'React', credit: 40 }],
    };
    
    // Dispatch the logout action from the authSlice
    const state = coursesReducer(populatedState, logout());
    
    expect(state.courses).toEqual([]);
  });
});