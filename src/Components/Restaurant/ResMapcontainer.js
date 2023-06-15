import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const ResMapContainer = (props) => {
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

  return (
    <div style={containerStyles}>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 22.3149, lng: 87.3105 }} // Set initial map center
      >
        {/* Display markers for restaurant locations */}
        {props.restaurants.map((restaurant) => (
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
  apiKey: 'AIzaSyBl6Fn9-iyzv8Y912VxLVaMDmjLR0wBeSM', // Replace with your Google Maps API key
})(ResMapContainer);





