import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = mount(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not re-render when toggling the drawer', () => {
    const wrapper = mount(<Notifications listNotifications={[]} />);
    console.log.mockClear();

    const menuItem = wrapper.find('#menuItem');
    menuItem.simulate('click');

    // Mətnin tam eyni olduğuna əmin ol (Notifications.jsx-dəki ilə)
    expect(console.log).not.toHaveBeenCalledWith('Notifications component rendering...');
  });

  it('shows the drawer by applying the visible class', () => {
    const wrapper = mount(<Notifications listNotifications={[]} />);
    const menuItem = wrapper.find('#menuItem');
    const drawer = wrapper.find('#notificationsDrawer').getDOMNode();

    const initialClasses = drawer.className;
    menuItem.simulate('click');

    expect(drawer.className).not.toBe(initialClasses);
  });
});