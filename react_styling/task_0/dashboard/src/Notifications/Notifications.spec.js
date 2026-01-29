import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component performance', () => {
  it('should not re-render when the listNotifications length is the same', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];
    
    // Render metodunu izləmək üçün spy yaradırıq
    const spy = jest.spyOn(Notifications.prototype, 'render');
    
    const { rerender } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    
    // Eyni uzunluqda siyahı ilə yenidən render edirik
    rerender(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    // render metodu yalnız bir dəfə (ilk mount-da) çağırılmalıdır
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('should re-render when the listNotifications length changes', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];
    const newListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    const spy = jest.spyOn(Notifications.prototype, 'render');
    
    const { rerender } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    
    // Yeni (daha uzun) siyahı ilə yenidən render edirik
    rerender(<Notifications displayDrawer={true} listNotifications={newListNotifications} />);
    
    // render metodu iki dəfə çağırılmalıdır (mount + update)
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });
});