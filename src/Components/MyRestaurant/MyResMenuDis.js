import React, { useState } from 'react';

const MyResMenuDis = ({
  itemkey,
  name,
  price,
  ingredients,
  items,
  onSelect,
  onDeselect,
  onDelete,
  onUpdateItem,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [editedName, setEditedName] = useState(name);
  // const [key, setkey] = useState(Key);
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
  // console.log(itemkey);
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

  const handleSave = async () => {
    items[itemkey] = {
      name: editedName,
      price: editedPrice,
      ingredients: editedIngredients,
    };
    onUpdateItem(name, items[itemkey]);
    setIsEditModalOpen(false);

    // try {
    //   const response = await fetch('http://localhost:7000/api/about/itemupdate', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ item: items }),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to update item');
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
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
          {/* <input type="checkbox" checked={isSelected} onClick={handleCheckboxClick} /> */}
          <span>{name}</span>
        </div>
        <div>
          <span>{price}</span>
        </div>
        <button className='btn btn-primary' onClick={handleEditClick}>Edit</button>
      </div>
      {isExpanded && (
        <ul style={{ listStyleType: 'none', marginBottom: '2px', marginLeft: '15px', fontSize: 'small' }}>
          {editedIngredients.map((ingredient, index) => (
            <li key={index}>
              <span>
                <p>{ingredient}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
      <section className="edit section">
        {isEditModalOpen && (
          <div className="modal d-block">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Edit Item</h3>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsEditModalOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="editName" className="form-label">
                      Name:
                    </label>
                    <input
                      id="editName"
                      type="text"
                      className="form-control"
                      value={editedName}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editPrice" className="form-label">
                      Price:
                    </label>
                    <input
                      id="editPrice"
                      type="text"
                      className="form-control"
                      value={editedPrice}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editIngredients" className="form-label">
                      Ingredients:
                    </label>
                    <ul className="list-group">
                      {editedIngredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item">
                          <input
                            id={`editIngredient${index}`}
                            type="text"
                            className="form-control"
                            value={ingredient}
                            onChange={(event) => handleIngredientsChange(event, index)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <hr style={{ margin: '10px 0' }} />
    </div>
  );
};

export default MyResMenuDis;
