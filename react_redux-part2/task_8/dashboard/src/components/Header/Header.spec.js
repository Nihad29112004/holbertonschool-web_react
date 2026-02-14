import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import Header from './Header/Header';

describe('Header Component', () => {
  it('Giriş edildikdə logout linki görünməlidir', () => {
    const store = configureStore({
      reducer: { auth: authReducer },
      preloadedState: { auth: { isLoggedIn: true, user: { email: 'test@t.com' } } }
    });
    render(<Provider store={store}><Header /></Provider>);
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
    expect(screen.getByText(/test@t.com/i)).toBeInTheDocument();
  });

  it('Logout tıklandıqda isLoggedIn false olmalıdır', () => {
    const store = configureStore({ reducer: { auth: authReducer }, preloadedState: { auth: { isLoggedIn: true, user: { email: 'a@b.com' } } } });
    render(<Provider store={store}><Header /></Provider>);
    fireEvent.click(screen.getByText(/logout/i));
    expect(store.getState().auth.isLoggedIn).toBe(false);
  });
});