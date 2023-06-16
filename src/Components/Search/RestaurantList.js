import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const RestaurantList = ({ restaurants }) => {
  const listGroupItemStyle = {
    marginBottom: '10px',
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <ListGroup>
      {restaurants.map((restaurant, index) => (
        <ListGroupItem key={index} style={listGroupItemStyle}>
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
      ))}
    </ListGroup>
  );
};

export default RestaurantList;
