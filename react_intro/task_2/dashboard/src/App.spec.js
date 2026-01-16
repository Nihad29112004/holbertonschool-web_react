import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('renders 2 label elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('checks that the label for email has the text Email', () => {
    const wrapper = shallow(<App />);
    // /Email/i - bu hissə tapşırıqdakı "ignore case" tələbidir
    expect(wrapper.find('label').at(0).text()).toMatch(/Email/i);
  });

  it('checks that the label for password has the text Password', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('label').at(1).text()).toMatch(/Password/i);
  });

  it('renders a button with the text OK', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').text()).toMatch(/OK/i);
  });
});