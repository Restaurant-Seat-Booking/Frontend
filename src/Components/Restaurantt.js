import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Modal, Form } from 'react-bootstrap';
// import profileImage from '../../public/images/food2.jpg';

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('+1 123 456 7890');
  const [address, setAddress] = useState('123 Main St, City, State, Country');
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      totalOrders: 5,
      totalSpending: 120.0,
    }
  ]);

  const handleSave = () => {
    // Handle saving the updated data here
    setShowModal(false);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={4} className="text-center">
          <div className="profile-box">
            {/* <Image src={profileImage} roundedCircle fluid className="mb-3" /> */}
            <h3>John Doe</h3>
            <p>Regular Customer</p>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Edit Profile
            </Button>
          </div>
        </Col>
        <Col md={8}>
          <div className="profile-box">
            <h2>Order History</h2>
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="order-history-item profile-box"
              >
                <p>Total Orders: {order.totalOrders}</p>
                <p>Total Spending: ${order.totalSpending}</p>
              </div>
            ))}
          </div>
          <div className="profile-box">
            <h2>About Me</h2>
            <p>{aboutMe}</p>
          </div>
          <div className="profile-box">
            <h2>Contact Information</h2>
            <ul>
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              <li>Address: {address}</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Edit Profile Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAboutMe">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CSS Styles */}
      <style>
        {`
        .profile-box {
          background-color: #fff;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .order-history-item {
          background-color: #f5f5f5;
          padding: 10px;
          margin-bottom: 10px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
      `}
      </style>
    </Container>
  );
};

export default ProfilePage;
