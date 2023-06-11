import React from 'react';

const MyResPhotoDis = ({ images, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <button className="delete-button" onClick={() => handleDelete(index)}>
            X
          </button>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default MyResPhotoDis;

