import React from 'react';
import ResMapContainer from './ResMapcontainer';

const ResGoogleMap = () => {
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
      <ResMapContainer restaurants={restaurants} />
    </div>
  );
};

export default ResGoogleMap;
