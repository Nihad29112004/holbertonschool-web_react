import React from 'react';
import { useSelector } from 'react-redux';
import CourseListRow from '../../components/CourseList/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

function CourseList() {
  // Redux store-dan courses massivini çəkirik
  const courses = useSelector((state) => state.courses.courses);

  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    width: '90%',
    margin: '40px auto',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
  },
});

// Komponenti WithLogging HOC-u ilə bükürük (tələbə əsasən)
export default WithLogging(CourseList);