// ResMenuDis.js
import React, { useState } from 'react';

const ResMenuDis = ({ name, price, ingredients, onSelect, onDeselect }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    setIsSelected(!isSelected);
    if (!isSelected) {
      onSelect(name, price);
    } else {
      onDeselect(name);
    }
  };

  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Added to align price to the right
        }}
        onClick={handleItemClick}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" checked={isSelected} onClick={handleCheckboxClick} />
          <div style={{ marginLeft: '5px' }}>{name}</div>
        </div>
        <div style={{ marginLeft: '10px' }}>${price}</div>
      </div>
      {isExpanded && (
        <ul style={{ listStyleType: 'none', marginLeft: '15px', fontSize: 'small' }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}
      <hr style={{ margin: '10px 0' }} />
    </div>
  );
};

export default ResMenuDis;
