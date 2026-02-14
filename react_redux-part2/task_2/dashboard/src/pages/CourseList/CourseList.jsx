import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse, unSelectCourse } from '../features/courses/courseSlice';
import CourseListRow from './CourseListRow/CourseListRow';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.list);

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

  return (
    <table>
      <thead>
        <CourseListRow isHeader={true} name="Course name" credit="Credit" />
      </thead>
      <tbody>
        {courses.map((course) => (
          <CourseListRow
            key={course.id}
            id={course.id}
            name={course.name}
            credit={course.credit}
            isSelected={course.isSelected}
            onChangeRow={onChangeRow}
          />
        ))}
      </tbody>
    </table>
  );
};