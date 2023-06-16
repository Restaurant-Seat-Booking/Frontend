import React, { useEffect, useState } from 'react';
import ResPhotoDis from './ResPhotoDis'

const ResPhoto = () => {
  const email = localStorage.getItem('userId');
  const [images, setImages] = useState([]);
  
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

  return (
    <div>
      <h3 className='mt-3'>Restaurant Photo</h3>
      <ResPhotoDis images={images} />
    </div>
  );
};

export default ResPhoto;
