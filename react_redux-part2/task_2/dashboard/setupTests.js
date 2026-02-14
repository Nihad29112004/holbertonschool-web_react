/** @jest-environment jsdom */
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('calls onChangeRow with right arguments when checkbox is clicked', () => {
    const onChangeRow = jest.fn();
    const wrapper = shallow(
      <CourseListRow id="1" name="ES6" credit="60" onChangeRow={onChangeRow} />
    );

    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(onChangeRow).toHaveBeenCalledWith("1", true);
  });
});