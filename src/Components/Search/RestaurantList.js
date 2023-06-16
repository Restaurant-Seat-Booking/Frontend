import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
  const listGroupItemStyle = {
    marginBottom: '10px',
    padding: '20px',
    borderRadius: '5px',
  };

  const linkStyle = {
    textDecoration: 'none', // Remove text decoration (underline)
  };

  return (
    <ListGroup>
      {restaurants.map((restaurant, index) => (
        <Link key={index} to="/restaurant" style={linkStyle}>
          <ListGroupItem style={listGroupItemStyle}>
            <h4>{restaurant.name}</h4>
            <p>
              <strong>Location: </strong>
              {restaurant.location}
            </p>
            <p>
              <strong>Opening Time: </strong>
              {restaurant.openingTime}
            </p>
            <p>
              <strong>Closing Time: </strong>
              {restaurant.closingTime}
            </p>
          </ListGroupItem>
        </Link>
      ))}
    </ListGroup>
  );
};

export default RestaurantList;
