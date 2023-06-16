import React, { useState } from 'react';

const MyResMenuDis = ({
  name,
  price,
  ingredients,
  onSelect,
  onDeselect,
  onDelete,
  onUpdateItem,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedIngredients, setEditedIngredients] = useState(ingredients);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setEditedPrice(event.target.value);
  };

  const handleIngredientsChange = (event, index) => {
    const updatedIngredients = [...editedIngredients];
    updatedIngredients[index] = event.target.value;
    setEditedIngredients(updatedIngredients);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    onDelete(name);
    setIsEditModalOpen(false);
  };

  const handleSave = () => {
    const updatedItem = {
      name: editedName,
      price: editedPrice,
      ingredients: editedIngredients,
    };
    onUpdateItem(name, updatedItem);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onClick={handleItemClick}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" checked={isSelected} onClick={handleCheckboxClick} />
          <span>{name}</span>
        </div>
        <div>
          <span>{price}</span>
        </div>
        <button onClick={handleEditClick}>Edit</button>
      </div>
      {isExpanded && (
        <ul style={{ listStyleType: 'none', marginLeft: '15px', fontSize: 'small' }}>
          {editedIngredients.map((ingredient, index) => (
            <li key={index}>
              <span>
                {/* value={ingredient}
                onChange={(event) => handleIngredientsChange(event, index)} */}
                <p>{ingredient}</p>
              </span>
              
            </li>
          ))}
        </ul>
      )}
      {isEditModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ backgroundColor: '#fff', padding: '20px', maxWidth: '400px' }}>
            <h3>Edit Item</h3>
            <label>Name:</label>
            <input type="text" value={editedName} onChange={handleNameChange} />
            <label>Price:</label>
            <input type="text" value={editedPrice} onChange={handlePriceChange} />
            <label>Ingredients:</label>
            <ul>
              {editedIngredients.map((ingredient, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(event) => handleIngredientsChange(event, index)}
                  />
                </li>
              ))}
            </ul>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
      <hr style={{ margin: '10px 0' }} />
    </div>
  );
};

export default MyResMenuDis;
