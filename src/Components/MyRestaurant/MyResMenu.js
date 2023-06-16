import React, { useEffect, useState } from 'react';
import MyResMenuDis from './MyResMenuDis';

const MyResMenu = () => {
  const [items, setItems] = useState([]);
  const email = localStorage.getItem('userId');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/about/about', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data;
        setItems(JSON.parse(tempdata.items));
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);



  const handleSelect = (name, price) => {
    // Handle selection logic here
  };

  const handleDeselect = (name) => {
    // Handle deselection logic here
  };

  const handleDelete = (name) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const handleUpdateItem = async (name, updatedItem) => {
    // Handle item update logic here

    console.log(items)
    try {
      const response = await fetch('http://localhost:7000/api/about/itemupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: items }),
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      {items.map((item, index) => (
        <MyResMenuDis
          key={index}
          name={item.name}
          price={item.price}
          ingredients={item.ingredients}
          onSelect={handleSelect}
          onDeselect={handleDeselect}
          onDelete={handleDelete}
          onUpdateItem={handleUpdateItem}
        />
      ))}
    </div>
  );
};

export default MyResMenu;
