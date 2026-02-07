import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice reducer', () => {
  const initialState = {
    user: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  };

  it('should return the initial state when passed an empty action', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle login and update state correctly', () => {
    const userCredentials = { email: 'test@holberton.com', password: 'password123' };
    const actual = authReducer(initialState, login(userCredentials));
    
    expect(actual.isLoggedIn).toBe(true);
    expect(actual.user.email).toBe('test@holberton.com');
    expect(actual.user.password).toBe('password123');
  });

  it('should handle logout and reset state correctly', () => {
    const loggedInState = {
      user: { email: 'test@holberton.com', password: 'password123' },
      isLoggedIn: true,
    };
    const actual = authReducer(loggedInState, logout());
    
    expect(actual.isLoggedIn).toBe(false);
    expect(actual.user.email).toBe('');
    expect(actual.user.password).toBe('');
  });
});