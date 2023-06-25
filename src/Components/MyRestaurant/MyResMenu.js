import React, { useEffect, useState } from 'react';
import MyResMenuDis from './MyResMenuDis';
const url = process.env.REACT_APP_URL;

const MyResMenu = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    ingredients: [''],
  });
  const email = localStorage.getItem('userId');
  const restaurant_id = localStorage.getItem('myrestaurant_id');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${url}/api/about/about`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ restaurant_id }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data;
        if(tempdata.items!=null) setItems(JSON.parse(tempdata.items));
      } catch (error) {
        // console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);



  const handleSelect = (name, price) => {
    // Handle selection logic here
  };

  const handleDeselect = (name) => {
    // Handle deselection logic here
  };

  const handleDelete = async (name) => {
    setItems((prevItems) =>  prevItems.filter((item) => item.name !== name));
    // console.log("ok");
  };
  useEffect(() => {
    const updateItems = async () => {
      try {
        const response = await fetch(`${url}/api/about/itemupdate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ item: items, restaurant_id }),
        });
        if (!response.ok) {
          throw new Error('Failed to update item');
        }
      } catch (error) {
        // console.error(error);
      }
    };
    if(items.length !=0 ){
      updateItems();
    }
  }, [items]);
  

  const handleAddItem = () => {
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItem({ name: '', price: '', ingredients: [''] });
  };

  const handleIngredientChange = (index, value) => {
    const ingredients = [...newItem.ingredients];
    ingredients[index] = value;
    setNewItem({ ...newItem, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...newItem.ingredients, ''];
    setNewItem({ ...newItem, ingredients });
  }
  const handleUpdateItem = async (name, updatedItem) => {
    // Handle item update logic here

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === name) {
          return updatedItem;
        }
        return item;
      })
    );
  };


  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <div className="mb-4 p-3" style={{ border: '1px solid #ccc', borderRadius: '5px', maxWidth: '500px' }}>
          <section>
            <h3 className="text-center">Add Item</h3>
            <div className="d-flex">
              <div className="mb-3 me-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter the name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input
                  type="text"
                  id="price"
                  className="form-control"
                  placeholder="Enter the price"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                />
              </div>
            </div>
            <ul className="list-group mb-3">
              {newItem.ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item">
                  <input
                    type="text"
                    className="form-control"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                  />
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary" style={{ width: '48%' }} onClick={handleAddIngredient}>Add Ingredient</button>
              <button className="btn btn-success" style={{ width: '48%' }} onClick={handleAddItem}>Add Item</button>
            </div>
          </section>
        </div>
      </div>
      <hr/>
      <br/>
      <h3 className='text-center'>Item Name</h3>
      {items.map((item, index) => (
        <MyResMenuDis
          itemkey={index}
          name={item.name}
          price={item.price}
          ingredients={item.ingredients}
          items={items}
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
