import React, { useState, useEffect } from 'react';

const LocationAddress = ({ onLocationChange }) => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleGetAddress = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lng);
          onLocationChange(lat, lng); // Call onLocationChange with latitude and longitude
        },
        (error) => {
          // console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  return (
    <div>
      {/* <p>Your Address: {address}</p> */}
      <button  type="button" className="btn btn-primary text-center" onClick={handleGetAddress}>
        Get My Address
      </button>
    </div>
  );
};

export default LocationAddress;
