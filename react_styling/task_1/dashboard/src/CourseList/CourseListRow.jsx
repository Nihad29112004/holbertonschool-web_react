import React from 'react';

export default function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  // Opacity şərtləri: Header 66% (0.66), Normal 45% (0.45)
  const rowStyle = isHeader
    ? "bg-[#deb5b5]/[0.66]" 
    : "bg-[#CDCDCD]/[0.45]";

  return (
    <tr className={rowStyle}>
      {isHeader ? (
        <>
          <th className="border border-gray-400 p-2" colSpan={textSecondCell ? 1 : 2}>
            {textFirstCell}
          </th>
          {textSecondCell && <th className="border border-gray-400 p-2">{textSecondCell}</th>}
        </>
      ) : (
        <>
          <td className="border border-gray-400 pl-2 py-2">{textFirstCell}</td>
          <td className="border border-gray-400 pl-2 py-2">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}