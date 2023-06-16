
// ResMenu.js
import React, { useState } from 'react';
import ResMenuDis from './ResMenuDis';
import { useSelectedItems } from './SelectedItemsContext';
// import { useSelectedItems } from './SelectedItemsContext';

const ResMenu = () => {
  const menuItems = [
    {
      name: 'Chicken Masala',
      price: 12,
      ingredients: ['Chicken', 'Masala', 'Onions', 'Tomatoes'],
    },
    {
      name: 'Butter Paneer',
      price: 10,
      ingredients: ['Paneer', 'Butter', 'Cream', 'Spices'],
    },
    {
      name: 'Pasta Alfredo',
      price: 14,
      ingredients: ['Pasta', 'Alfredo Sauce', 'Garlic', 'Parmesan'],
    },
    {
      name: 'Margherita Pizza',
      price: 16,
      ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'],
    },
    {
      name: 'Chicken Biryani',
      price: 15,
      ingredients: ['Basmati Rice', 'Chicken', 'Spices', 'Onions'],
    },
    {
      name: 'Vegetable Fried Rice',
      price: 12,
      ingredients: ['Rice', 'Mixed Vegetables', 'Soy Sauce', 'Eggs'],
    },
    {
      name: 'Fish and Chips',
      price: 14,
      ingredients: ['Fish Fillet', 'Potatoes', 'Tartar Sauce', 'Lemon'],
    },
    {
      name: 'Mushroom Risotto',
      price: 13,
      ingredients: ['Arborio Rice', 'Mushrooms', 'Parmesan Cheese', 'Vegetable Broth'],
    },
    {
      name: 'Shrimp Scampi',
      price: 18,
      ingredients: ['Shrimp', 'Garlic', 'Lemon', 'White Wine'],
    },
    {
      name: 'Veggie Pizza',
      price: 16,
      ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mixed Vegetables', 'Mozzarella'],
    },
    {
      name: 'Tandoori Chicken',
      price: 17,
      ingredients: ['Chicken', 'Yogurt', 'Spices', 'Naan Bread'],
    },
    {
      name: 'Paneer Tikka Masala',
      price: 13,
      ingredients: ['Paneer', 'Tomato Sauce', 'Cream', 'Spices'],
    },
    {
      name: 'Classic Caesar Salad',
      price: 9,
      ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
    },
  ];

  const { addSelectedItem, removeSelectedItem } = useSelectedItems();

  const handleItemSelect = (name, price) => {
    addSelectedItem({ name, price });
  };

  const handleItemDeselect = (name) => {
    removeSelectedItem(name);
  };

  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <ResMenuDis
          key={index}
          name={menuItem.name}
          price={menuItem.price}
          ingredients={menuItem.ingredients}
          onSelect={handleItemSelect}
          onDeselect={handleItemDeselect}
        />
      ))}
    </div>
  );
};

export default ResMenu;

