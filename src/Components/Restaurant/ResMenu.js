import React, { useEffect, useState } from 'react';
import ResMenuDis from './ResMenuDis';
import { useSelectedItems } from './SelectedItemsContext';
const url = process.env.REACT_APP_URL;

const ResMenu = () => {

  const [item, setitem] = useState([]);
  const restaurant_id = localStorage.getItem('restaurant_id')

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${url}/api/about/about`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ restaurant_id }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        if(tempdata.items!=null)setitem(JSON.parse(tempdata.items))
      } catch (error) {
        // console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);
  const menuItems = item;
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

