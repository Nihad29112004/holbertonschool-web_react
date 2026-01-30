import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b5',
    opacity: 0.66, // Sənin istədiyin opacity
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab', // #CDCDCD-yə yaxın opacity ilə
  },
  cell: {
    border: '1px solid #ddd',
    padding: '8px',
  }
});

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        <>
          <th className={css(styles.cell)} colSpan={textSecondCell ? 1 : 2}>{textFirstCell}</th>
          {textSecondCell && <th className={css(styles.cell)}>{textSecondCell}</th>}
        </>
      ) : (
        <>
          <td className={css(styles.cell)}>{textFirstCell}</td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}