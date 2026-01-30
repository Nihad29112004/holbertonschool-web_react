import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  tableContainer: {
    width: '80%', // Tapşırıq 80% istəyir
    margin: '100px auto',
    minHeight: '29vh',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  emptyTableContainer: {
    width: '85%', // 80-90% arası tələbi üçün
    margin: '100px auto',
  }
});

function CourseList({ courses = [] }) {
  const containerStyle = courses.length > 0 ? styles.tableContainer : styles.emptyTableContainer;

  return (
    <div className={css(containerStyle)}>
      <table id="CourseList" className={css(styles.table)}>
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
          {courses.map(course => (
            <CourseListRow 
              key={course.id} 
              textFirstCell={course.name} 
              textSecondCell={course.credit} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}