import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import LocationAddress from './LocationAddress';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [restaurant, setrestaurant] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`Query: ${query}`);
    // Send the search query, latitude, and longitude to the backend
    fetch('http://localhost:7000/api/search/byName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log the response from the backend
      })
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  };


  const handleLocationChange = async (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);

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
  //   const response = await fetch('http://localhost:7000/api/search/byLocation', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       lat: lat,
  //       lng: lng
  //     }),
  //   })
  //     .then((response) => response.text())
  //     .then((data1) => {
  //       console.log(data1.data);
  //       setrestaurant(data1.data) // Log the response from the backend
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle any errors
  //     });
  };

  // restaurant = 
  // [
  //   {
  //     name: 'Restaurant A',
  //     location: 'City A',
  //     openingTime: '09:00 AM',
  //     closingTime: '10:00 PM',
  //   },
  //   {
  //     name: 'Restaurant B',
  //     location: 'City B',
  //     openingTime: '08:30 AM',
  //     closingTime: '09:30 PM',
  //   },
  //   // Add more restaurant objects as needed
  // ];
  // console.log(restaurant)
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
