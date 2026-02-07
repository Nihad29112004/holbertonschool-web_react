import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../App';

const mockStore = configureStore([thunk]);

describe('App Component', () => {
  it('isLoggedIn false olduqda Login göstərilir', () => {
    const store = mockStore({
      auth: { isLoggedIn: false },
      notifications: { notifications: [], displayDrawer: false },
      courses: { courses: [] }
    });
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  it('isLoggedIn true olduqda CourseList göstərilir', () => {
    const store = mockStore({
      auth: { isLoggedIn: true, user: { email: 'test@test.com' } },
      notifications: { notifications: [], displayDrawer: false },
      courses: { courses: [] }
    });
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText(/Course list/i)).toBeInTheDocument();
  });
});