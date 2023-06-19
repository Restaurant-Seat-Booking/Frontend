import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const secret_key = process.env.REACT_APP_SECRET_KEY;


const MyResMapContainer = ({ restaurants, google }) => {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (restaurants.length > 0) {
      const { lat, lng } = restaurants[0];
      setCenter({ lat, lng });
    }
  }, [restaurants]);

  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '400px',
    marginBottom: '20px',
  };

  if (!center) {
    return <div>Loading...</div>;
  }

  return (
    <div style={containerStyles}>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={center}
        center={center}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            name={restaurant.name}
            position={{ lat: restaurant.lat, lng: restaurant.lng }}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: `${secret_key}`, // Replace with your Google Maps API key
})(MyResMapContainer);
