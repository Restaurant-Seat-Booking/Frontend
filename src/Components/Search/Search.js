import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import LocationAddress from './LocationAddress';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`Query: ${query}`);
    // Send the search query, latitude, and longitude to the backend
    fetch('http://localhost:7000/api/search/byName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query}),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log the response from the backend
      })
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  };


  const handleLocationChange = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lng}`);
    fetch('http://localhost:7000/api/search/byLocation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lat, lng }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log the response from the backend
      })
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  };

  const restaurants = [
    {
      name: 'Restaurant A',
      location: 'City A',
      openingTime: '09:00 AM',
      closingTime: '10:00 PM',
    },
    {
      name: 'Restaurant B',
      location: 'City B',
      openingTime: '08:30 AM',
      closingTime: '09:30 PM',
    },
    // Add more restaurant objects as needed
  ];

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <LocationAddress onLocationChange={handleLocationChange} />
      <h1 className="text-center">Restaurant List</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Search;
