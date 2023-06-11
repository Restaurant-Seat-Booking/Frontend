
import React, { useState } from 'react';
import MyResPhotoDis from './MyResPhotoDis';

const MyResPhoto = () => {
  const [images, setImages] = useState([
    { url: './images/food1.jpg', alt: 'Image 1' },
    { url: './images/food2.jpg', alt: 'Image 2' },
    { url: './images/food3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ]);
  const [imageUrl, setImageUrl] = useState('');
  const [altText, setAltText] = useState('');

  const handleUpload = () => {
    const newImage = {
      url: imageUrl,
      alt: altText,
    };

    setImages([...images, newImage]);
    setImageUrl('');
    setAltText('');
  };

  const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div>
      <h3 className='mt-3'>Restaurant Photo</h3>
      <div className="upload-container">
        <div className="upload-form">
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Alt Text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
            />
            <button onClick={handleUpload}>Upload Image</button>
          </div>
      </div>
      <MyResPhotoDis images={images} onDelete={handleDelete} />
    </div>
  );
};

export default MyResPhoto;
