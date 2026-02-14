/** @jest-environment jsdom */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';

const mockStore = configureStore([]);

describe('Notifications Component Loading State', () => {
  it('displays "Loading..." when loading is true', () => {
    const store = mockStore({
      notifications: {
        notifications: [],
        loading: true, // Test üçün true veririk
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(wrapper.text()).toContain('Loading...');
    expect(wrapper.find('ul').exists()).toBe(false);
  });

  it('renders notifications list when loading is false', () => {
    const store = mockStore({
      notifications: {
        notifications: [{ id: 1, value: 'New course available' }],
        loading: false,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(wrapper.text()).not.toContain('Loading...');
    expect(wrapper.find('li').text()).toBe('New course available');
  });
});