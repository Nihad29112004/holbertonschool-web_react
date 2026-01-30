import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: 'rgba(222, 181, 181, 0.66)', // --color-table-header opacity ilə
  },
  defaultRow: {
    backgroundColor: 'rgba(205, 205, 205, 0.45)', // --color-table-rows opacity ilə
  },
  cell: {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  }
});

export default function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
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
      )
      }
    </tr>
  );
}