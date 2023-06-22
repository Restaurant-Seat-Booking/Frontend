import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
  const handleRestaurantClick = (restaurantId) => {
    console.log(restaurantId);
    localStorage.setItem('restaurant_id', restaurantId);
  };

  return (
    <ListGroup>
      {restaurants.map((restaurant, index) => (
        <Link key={index} to="/restaurant" style={{ textDecoration: 'none' }}>
          <ListGroupItem
            key={index}
            action
            onClick={() => handleRestaurantClick(restaurant.restaurant_id)}
            style={{ marginBottom: '10px' }} // Add margin-bottom for gap
          >
            <h4>{restaurant.restaurant_name}</h4>
            <p>
              <strong>Location: </strong>
              {restaurant.address}
            </p>
            <p>
              <strong>Opening Time: </strong>
              {restaurant.opening_time}
            </p>
            <p>
              <strong>Closing Time: </strong>
              {restaurant.closing_time}
            </p>
          </ListGroupItem>
        </Link>
      ))}
    </ListGroup>
  );
};

export default RestaurantList;
