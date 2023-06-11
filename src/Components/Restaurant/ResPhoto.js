import React from 'react';
import ResPhotoDis from './ResPhotoDis'

const ResPhoto = () => {
  const images = [
    { url: './images/food1.jpg', alt: 'Image 1' },
    { url: './images/food2.jpg', alt: 'Image 2' },
    { url: './images/food3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <div>
      <h3 className='mt-3'>Restaurant Photo</h3>
      <ResPhotoDis images={images} />
    </div>
  );
};

export default ResPhoto;
