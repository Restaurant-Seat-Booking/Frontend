import React from 'react';
import { Container, Table } from 'react-bootstrap';

const OrderHistoryPage = () => {
  // Sample data for order history
  const orders = [
    {
      id: 1,
      dateTime: '2023-06-01 10:30 AM',
      restaurantName: 'Example Restaurant',
      location: 'New York',
      total: 150.0,
      items: [
        { id: 1, name: 'Product A', price: 50.0 },
        { id: 2, name: 'Product B', price: 100.0 },
      ],
    },
    {
      id: 2,
      dateTime: '2023-06-02 12:45 PM',
      restaurantName: 'Another Restaurant',
      location: 'Los Angeles',
      total: 75.0,
      items: [
        { id: 3, name: 'Product C', price: 25.0 },
        { id: 4, name: 'Product D', price: 50.0 },
      ],
    },
    // Add more order objects here...
  ];

  return (
    <Container>
      <h1>Order History</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date & Time</th>
            <th>Restaurant Name</th>
            <th>Location</th>
            <th>Total</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.dateTime}</td>
              <td>{order.restaurantName}</td>
              <td>{order.location}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} (${item.price.toFixed(2)})
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderHistoryPage;
