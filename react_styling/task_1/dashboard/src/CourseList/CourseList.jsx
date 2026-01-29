/* task_1/dashboard/src/CourseList/CourseList.jsx */
import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <table id="CourseList" className="w-full border-collapse border border-gray-400">
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow isHeader={false} textFirstCell="No course available yet" />
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                isHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;