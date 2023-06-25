import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const secret_key = process.env.REACT_APP_SECRET_KEY;

const ResMapContainer = ({ restaurants }) => {
  const [center, setCenter] = useState(null);
  console.log((restaurants[0].name))

  useEffect(() => {
    if (restaurants.length > 0) {
      const lat = restaurants[0].lat;
      const lng = restaurants[0].lng;
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
      <GoogleMapReact
        bootstrapURLKeys={{ key: secret_key }}
        defaultCenter={center}
        defaultZoom={14}
        style={mapStyles}
        center={center}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={2}
            lat={restaurants[0].lat}
            lng={restaurants[0].lng}
            text={restaurants[0].name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => (
  <div style={{ position: 'relative', color: 'red', fontSize : "30px"}}>
    <div
      style={{
        position: 'absolute',
        top: '-30px',
        left: '-15px',
        width: '50px',
        height: '50px',
        background: 'url(https://maps.google.com/mapfiles/ms/icons/red-dot.png)',
        backgroundSize: 'cover',
      }}
    />
    {text}
  </div>
);

export default ResMapContainer;
