import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import LocationAddress from './LocationAddress';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [restaurant, setrestaurant] = useState([]);

  const handleSearch = async (query) => {
    console.log(`Query: ${query}`);
    // Send the search query, latitude, and longitude to the backend
      const fetchOrders = async () => {
      try {
        // console.log(`Latitude: ${lat}`);
        // console.log(`Longitude: ${lng}`);
        const response = await fetch('http://localhost:7000/api/search/byName', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                  query
                }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        // console.log(tempdata)
        setrestaurant(tempdata)
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  };


  const handleLocationChange = async (lat, lng) => {
    // setLatitude(lat);
    // setLongitude(lng);

    const fetchOrders = async () => {
      try {
        // console.log(`Latitude: ${lat}`);
        // console.log(`Longitude: ${lng}`);
        const response = await fetch('http://localhost:7000/api/search/byLocation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                  lat: lat,
                  lng: lng
                }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        // console.log(tempdata)
        setrestaurant(tempdata)
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <LocationAddress onLocationChange={handleLocationChange} />
      <h1 className="text-center">Restaurant List</h1>
      
      <RestaurantList restaurants={restaurant} />
    </div>
  );
};

export default Search;
