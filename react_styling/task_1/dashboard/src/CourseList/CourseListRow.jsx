/* task_1/dashboard/src/CourseList/CourseListRow.jsx */
import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Şərtlərə uyğun klasslar
  const rowColor = isHeader ? 'bg-[--color-table-header]' : 'bg-[--color-table-rows]';
  const rowOpacity = isHeader ? 'opacity-[0.66]' : 'opacity-[0.45]';

  return (
    <tr className={`${rowColor} ${rowOpacity}`}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className="border border-gray-400 p-2 text-center">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="border border-gray-400 p-2 text-left">{textFirstCell}</th>
            <th className="border border-gray-400 p-2 text-left">{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className="border border-gray-400 p-2 pl-2">{textFirstCell}</td>
          <td className="border border-gray-400 p-2 pl-2">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;