// SelectedItemsContext.js
import React, { createContext, useState, useContext } from 'react';

const SelectedItemsContext = createContext();

export const SelectedItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addSelectedItem = (item) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  };

  const removeSelectedItem = (itemName) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.name !== itemName)
    );
  };

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, addSelectedItem, removeSelectedItem }}>
      {children}
    </SelectedItemsContext.Provider>
  );
};

export const useSelectedItems = () => useContext(SelectedItemsContext);
