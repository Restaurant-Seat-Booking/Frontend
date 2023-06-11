import React from 'react';
import MyResPhotoDis from './MyResPhotoDis'

const MyResPhoto = () => {
  const images = [
    { url: './images/food1.jpg', alt: 'Image 1' },
    { url: './images/food2.jpg', alt: 'Image 2' },
    { url: './images/food3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <div>
      <h3 className='mt-3'>Restaurant Photo</h3>
      <MyResPhotoDis images={images} />
    </div>
  );
};

export default MyResPhoto;
