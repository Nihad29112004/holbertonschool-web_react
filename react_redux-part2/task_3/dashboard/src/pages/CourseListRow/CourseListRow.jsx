import React from 'react';

const CourseListRow = ({ id, name, credit, isHeader, isSelected, onChangeRow }) => {
  const handleCheckboxChange = (e) => {
    // Checkbox vəziyyətini və ID-ni yuxarı ötürürük
    onChangeRow(id, e.target.checked);
  };

  if (isHeader) {
    return (
      <tr>
        <th>{name}</th>
        <th>{credit}</th>
      </tr>
    );
  }

  return (
    <tr style={{ backgroundColor: isSelected ? '#e6e4e4' : '#f5f5f5ab' }}>
      <td>
        <input 
          type="checkbox" 
          checked={isSelected} 
          onChange={handleCheckboxChange} 
        />
        {name}
      </td>
      <td>{credit}</td>
    </tr>
  );
};

export default CourseListRow;