import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const ResMapContainer = ({ restaurants, google }) => {
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
  apiKey: 'AIzaSyBl6Fn9-iyzv8Y912VxLVaMDmjLR0wBeSM',
})(ResMapContainer);
