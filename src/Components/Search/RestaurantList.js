import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
  const listGroupItemStyle = {
    marginBottom: '10px',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const linkStyle = {
    textDecoration: 'none', // Remove text decoration (underline)
  };

  const handleRestaurantClick = (restaurantId) => {
    console.log(restaurantId)
    localStorage.setItem('restaurant_id', restaurantId);
  };

  return (
    <ListGroup>
      {restaurants.map((restaurant, index) => (
        <Link key={index} to="/restaurant" style={linkStyle}>
          <ListGroupItem
            key={index}
            style={listGroupItemStyle}
            onClick={() => handleRestaurantClick(restaurant.restaurant_id)}
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
