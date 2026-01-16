import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App Component Tests', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox'); // email tipini də textbox sayır
    // Əgər parol inputunu da saymaq lazımdırsa:
    const allInputs = document.querySelectorAll('input');
    expect(allInputs).toHaveLength(2);
  });

  it('renders 2 label elements with text Email and Password', () => {
    render(<App />);
    // Regex ilə axtarış (/i böyük/kiçik hərf fərqini aradan qaldırır)
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('renders a button with the text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /OK/i });
    expect(button).toBeInTheDocument();
  });
});