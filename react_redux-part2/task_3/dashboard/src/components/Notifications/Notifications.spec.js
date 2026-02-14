/** @jest-environment jsdom */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';

const mockStore = configureStore([]);

describe('Notifications Component Filter Logic', () => {
  let store;
  const initialState = {
    notifications: {
      notifications: [
        { id: 1, type: 'urgent', value: 'Urgent 1' },
        { id: 2, type: 'default', value: 'Default 1' }
      ]
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('filters notifications correctly when clicking urgent button', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    wrapper.find('button').at(0).simulate('click'); // Urgent düyməsi
    // Selector işlədiyi üçün render-də yalnız bir element qalmalıdır
    expect(wrapper.find('NotificationItem').length).toBe(1);
    expect(wrapper.find('NotificationItem').prop('type')).toBe('urgent');
  });
});