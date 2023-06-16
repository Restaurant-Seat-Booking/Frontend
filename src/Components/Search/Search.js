import React, { useState } from "react";
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Send the search query to the backend
    fetch('http://localhost:7000/api/search/getrestaurant', {
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
    <>
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <h1 className="text-center">Restaurant List</h1>
        <RestaurantList restaurants={restaurants} />
      </div>
    </>
  );
};

export default Search;
