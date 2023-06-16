
import React, { useEffect, useState } from 'react';
import MyResPhotoDis from './MyResPhotoDis';

const MyResPhoto = () => {
  const email = localStorage.getItem('userId');
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [altText, setAltText] = useState('');

  useEffect(() => {
    // console.log(email)
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/about/about', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        setImages(JSON.parse(tempdata.image))
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);

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

  useEffect(() => {
    const updateItems = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/about/imageupdate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: images }),
        });
        if (!response.ok) {
          throw new Error('Failed to update item');
        }
      } catch (error) {
        console.error(error);
      }
    };
    if(images.length !=0 ){
      updateItems();
    }
  }, [images]);

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
