import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const secret_key = process.env.REACT_APP_SECRET_KEY;


const MyResMapContainer = (props) => {
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
  apiKey: `${secret_key}`, // Replace with your Google Maps API key
})(MyResMapContainer);





