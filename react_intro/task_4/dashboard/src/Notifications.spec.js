import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import React from 'react';

describe('Notifications Component Tests', () => {
  
  // 1. Başlığın (title) mövcudluğunu yoxlayır
  test('renders the text "Here is the list of notifications"', () => {
    render(<Notifications />);
    // /.../i regex-i sayəsində böyük/kiçik hərf fərqi qoymur
    const titleText = screen.getByText(/Here is the list of notifications/i);
    expect(titleText).toBeInTheDocument();
  });

  // 2. Button elementinin mövcudluğunu yoxlayır
  test('renders a button element', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  // 3. 3 ədəd 'li' elementinin render olunduğunu yoxlayır
  test('renders 3 list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  // 4. Düyməyə kliklədikdə konsola loq yazılmasını yoxlayır
  test('clicking the button logs "Close button has been clicked" to the console', () => {
    // Console.log-u izləmək üçün spy yaradırıq
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    
    // fireEvent ilə klik simulyasiyası
    fireEvent.click(button);
    
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    
    // Testdən sonra spy-ı təmizləyirik
    consoleSpy.mockRestore();
  });
});