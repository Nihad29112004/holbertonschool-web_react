import React from 'react';
import { StyleSheet, css } from 'aphrodite'; // Aphrodite kitabxanası
import CourseListRow from './CourseListRow';

// Stilləri burada təyin edirik
const styles = StyleSheet.create({
  container: {
    width: '80%', // Tapşırıq 80% istəyir
    margin: '40px auto',
    minHeight: '29vh',
  },
  containerNoCourses: {
    width: '90%', // Kurs olmadıqda 80-90% arası
    margin: '40px auto',
  },
  table: {
    width: '100%', // Table valideynin 100%-ni tutmalıdır
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  }
});

function CourseList({ courses = [] }) {
  // Kurs olub-olmamasına görə konteynər stilini seçirik
  const currentContainerStyle = courses.length > 0 ? styles.container : styles.containerNoCourses;

  return (
    <div className={css(currentContainerStyle)}>
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

export default CourseList;