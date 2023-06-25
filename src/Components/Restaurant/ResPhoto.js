import React, { useEffect, useState } from 'react';
import ResPhotoDis from './ResPhotoDis'
const url = process.env.REACT_APP_URL;

const ResPhoto = () => {
  const email = localStorage.getItem('userId');
  const [images, setImages] = useState([]);
  const restaurant_id = localStorage.getItem('restaurant_id')
  
  useEffect(() => {
    // console.log(email)
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${url}/api/about/about`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ restaurant_id }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        if(tempdata.image!=null) setImages(JSON.parse(tempdata.image))
      } catch (error) {
        // console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);

  return (
    <div>
      <h3 className='mt-3'>Restaurant Photo</h3>
      <ResPhotoDis images={images} />
    </div>
  );
};

export default ResPhoto;
