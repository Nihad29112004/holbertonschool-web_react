import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // 1. 2 input elementinin olduğunu yoxlayır
  it('renders 2 input elements', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  // 2. Label mətnlərini REGEX ilə (case-insensitive) yoxlayır
  it('renders 2 label elements with text Email and Password', () => {
    // find('label') bütün labelləri tapır
    const labels = wrapper.find('label');
    expect(labels).toHaveLength(2);
    
    // .at(0).text() birinci labelin mətnini qaytarır
    // toMatch(/Email/i) böyük/kiçik hərf fərqi qoymadan yoxlayır
    expect(labels.at(0).text()).toMatch(/Email/i);
    expect(labels.at(1).text()).toMatch(/Password/i);
  });

  // 3. Düyməni REGEX ilə yoxlayır
  it('renders a button with the text OK', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toMatch(/OK/i);
  });
});