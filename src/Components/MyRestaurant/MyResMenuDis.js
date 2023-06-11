import React, { useState } from 'react';

const MyResMenuDis = ({ name, ingredients }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    setIsSelected(!isSelected);
  };

  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleItemClick}>
        <input type="checkbox" checked={isSelected} onClick={handleCheckboxClick} />
        <div style={{ marginLeft: '5px' }}>{name}</div>
      </div>
      {isExpanded && (
        <ul style={{ listStyleType: 'none', marginLeft: '15px', fontSize: 'small' }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyResMenuDis;
