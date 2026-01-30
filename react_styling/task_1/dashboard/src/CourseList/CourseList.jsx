import React from 'react';
import CourseListRow from './CourseListRow';
import WithLogging from '../HOC/WithLogging';

function CourseList({ courses = [] }) {
  // Kurs olub-olmamasına baxmayaraq 80% genişlik və mərkəzləmə (mx-auto)
  return (
    <div className="mx-auto my-12 w-4/5"> 
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
          {courses.map((course) => (
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