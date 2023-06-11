import React from 'react';
import ResMenuDis from './ResMenuDis'

const ResMenu = () => {
  const menuItems = [
    {
      name: 'Item 1',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    },
    {
      name: 'Item 2',
      ingredients: ['Ingredient 4', 'Ingredient 5', 'Ingredient 6'],
    },
    // Add more menu items as needed
  ];

  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <ResMenuDis key={index} name={menuItem.name} ingredients={menuItem.ingredients} />
      ))}
    </div>
  );
};

export default ResMenu;
