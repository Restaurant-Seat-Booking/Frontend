import React from 'react';
import MyResMapContainer from './MyResMapcontainer';

const MyResGoogleMap = () => {
  const restaurants = [
    {
      id: 1,
      name: 'IIT Kharapur',
      lat: 22.3149,
      lng: 87.3105,
    },
    // Add more restaurant locations as needed
  ];

  return (
    <div>
      {/* Display other content */}
      <h1>Restaurant Locations</h1>
      <MyResMapContainer restaurants={restaurants} />
    </div>
  );
};

export default MyResGoogleMap;
