import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Rəng və opacity dəyişənləri birbaşa Tailwind klassları ilə
  const rowStyle = isHeader 
    ? 'bg-[--color-table-header] opacity-[0.66]' 
    : 'bg-[--color-table-rows] opacity-[0.45]';

  return (
    <tr className={rowStyle}>
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
          {/* td üçün padding-left 8px (pl-2) */}
          <td className="border border-gray-400 p-2 pl-2 text-left">{textFirstCell}</td>
          <td className="border border-gray-400 p-2 pl-2 text-left">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;