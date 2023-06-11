import React from 'react';

const ResPhotoDis = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ResPhotoDis;