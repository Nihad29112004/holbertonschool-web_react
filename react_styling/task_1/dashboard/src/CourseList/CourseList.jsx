import React from 'react';
import CourseListRow from './CourseListRow';
import WithLogging from '../HOC/WithLogging';

function CourseList({ courses = [] }) {
  // Kurs olanda 80% (w-4/5), olmayanda 90% (w-[90%])
  const containerClass = courses.length > 0 
    ? "mx-auto my-12 w-4/5" 
    : "mx-auto my-12 w-[90%]";

  return (
    <div className={containerClass}>
      <table id="CourseList" className="w-full border-collapse border border-gray-400">
        <thead>
          {courses.length > 0 ? (
            <>
              <CourseListRow textFirstCell="Available courses" isHeader={true} />
              <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </>
          ) : (
            <CourseListRow textFirstCell="No course available yet" isHeader={true} />
          )}
        </thead>
        <tbody>
          {courses.length > 0 && courses.map((course) => (
            <CourseListRow 
              key={course.id} 
              textFirstCell={course.name} 
              textSecondCell={course.credit} 
              isHeader={false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CourseListWithLogging = WithLogging(CourseList);
export default CourseListWithLogging;