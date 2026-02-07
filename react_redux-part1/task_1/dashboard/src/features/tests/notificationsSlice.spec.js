import notificationsReducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  fetchNotifications,
} from '../notifications/notificationsSlice';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  it('should return initial state by default', () => {
    expect(notificationsReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle showDrawer and hideDrawer', () => {
    let state = notificationsReducer(initialState, hideDrawer());
    expect(state.displayDrawer).toBe(false);

    state = notificationsReducer(state, showDrawer());
    expect(state.displayDrawer).toBe(true);
  });

  it('should handle markNotificationAsRead', () => {
    const currentState = {
      notifications: [{ id: 1, value: 'New course' }, { id: 2, value: 'New grad' }],
      displayDrawer: true,
    };
    const spy = jest.spyOn(console, 'log');
    const newState = notificationsReducer(currentState, markNotificationAsRead(1));
    
    expect(newState.notifications).toHaveLength(1);
    expect(newState.notifications[0].id).toBe(2);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });

  it('should update notifications when fetchNotifications is fulfilled', () => {
    const mockData = [{ id: 1, value: 'Fetched logic' }];
    const action = { type: fetchNotifications.fulfilled.type, payload: mockData };
    const state = notificationsReducer(initialState, action);
    
    expect(state.notifications).toEqual(mockData);
  });
});