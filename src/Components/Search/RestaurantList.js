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
      {restaurants.map((restaurant, index) => {
        const jsonimage = JSON.parse(restaurant.image);
        // console.log(jsonimage[0])

        return (
          <Link key={index} to="/restaurant" style={{ textDecoration: 'none' }}>
            <ListGroupItem
              key={index}
              action
              onClick={() => handleRestaurantClick(restaurant.restaurant_id)}
              style={{
                marginBottom: '10px',
                backgroundImage: `url(${jsonimage[0].url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white', // Set appropriate text color for better readability
              }} // Add margin-bottom for gap
            >
              
  <div
  className="box-shadow p-4 mb-4 bg-white rounded"
  style={{
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '270px',
    backgroundImage: 'url("./images/basic.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <section>
    <h4 className="text-white">{restaurant.restaurant_name}</h4>
    <p className="text-white">
      <strong>Location: </strong>
      {restaurant.address}
    </p>
    <p className="text-white">
      <strong>Opening Time: </strong>
      {restaurant.opening_time}
    </p>
    <p className="text-white">
      <strong>Closing Time: </strong>
      {restaurant.closing_time}
    </p>
  </section>
</div>



            </ListGroupItem>
          </Link>
        );
      })}
    </ListGroup>
  );
};

export default RestaurantList;
