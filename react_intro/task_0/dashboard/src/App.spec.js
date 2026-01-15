import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
describe('App Component Tests', () => {
  // Test 1: h1 elementinin rendered olub-olmadığını yoxlayır
  test('renders the h1 element with the text School dashboard', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(headerElement).toBeInTheDocument();
  });

  // Test 2: App-body və App-footer daxilindəki p elementlərinin mətnini yoxlayır
  test('renders the correct text within p elements in body and footer', () => {
    render(<App />);
    
    // Body mətni yoxlanışı
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();

    // Footer mətni yoxlanışı (Cari il 2026 olduğu üçün regex istifadə etmək daha təhlükəsizdir)
    const footerText = screen.getByText(/copyright .* - holberton school/i);
    expect(footerText).toBeInTheDocument();
  });

  // Test 3: img elementinin alt mətni vasitəsilə rendered olub-olmadığını yoxlayır
  test('renders an img element with the correct alt text', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/holberton logo/i);
    expect(logoElement).toBeInTheDocument();
  });
});