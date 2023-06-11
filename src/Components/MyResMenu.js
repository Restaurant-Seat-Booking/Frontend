import React, { useState } from 'react';

const MyResMenu = () => {
  const menuItems = [
    {
      name: 'Item 1',
      ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3',
    },
    {
      name: 'Item 2',
      ingredients: 'Ingredient 4, Ingredient 5, Ingredient 6',
    },
    {
      name: 'Item 3',
      ingredients: 'Ingredient 7, Ingredient 8, Ingredient 9',
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (itemIndex) => {
    if (selectedItems.includes(itemIndex)) {
      setSelectedItems(selectedItems.filter((index) => index !== itemIndex));
    } else {
      setSelectedItems([...selectedItems, itemIndex]);
    }
  };

  return (
    <div>
      <h3>Menu</h3>
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleItemClick(index)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: selectedItems.includes(index) ? 'blue' : 'gray',
              marginRight: '5px',
            }}
          ></div>
          <h6>{item.name}</h6>
          {selectedItems.includes(index) && <p style={{ fontSize: '12px' }}>{item.ingredients}</p>}
        </div>
      ))}
    </div>
  );
};

export default MyResMenu;
