import React, { useEffect, useState } from 'react';
import ResMapContainer from './ResMapcontainer';
import { url } from '../../constants';

const ResGoogleMap = () => {

  const [name, setname] = useState([]);
  const [latitude, setlatitude] = useState([]);
  const [longitude, setlongitude] = useState([]);

  const restaurant_id = localStorage.getItem('restaurant_id')
  // console.log(restaurant_id)

  useEffect(() => {
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
        setname(tempdata.restaurant_name);
        setlatitude(JSON.parse(tempdata.latiude));
        setlongitude(JSON.parse(tempdata.longitude));
        // setfeatu(JSON.parse(tempdata.features))
      } catch (error) {
        // console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);


  const restaurants = [
    {
      id: restaurant_id,
      name: name,
      lat: latitude,               //23.3149,
      lng: longitude               //87.3105,
    },
    // Add more restaurant locations as needed
  ];

  return (
    <div>
      {/* Display other content */}
      <h1>Restaurant Locations</h1>
      <ResMapContainer restaurants={restaurants} />
    </div>
  );
};

export default ResGoogleMap;
