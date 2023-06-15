import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/order/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        setOrders(tempdata);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);

  return (
    <>
      <Header />
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
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.date}</td>
                <td>{order.restaurant_name}</td>
                <td>{order.location}</td>
                <td>${order.total_spent.toFixed(2)}</td>
                <td>{order.items}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default OrderHistoryPage;
