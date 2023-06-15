import { Container, Row, Col, Image, Button, Modal, Form } from 'react-bootstrap';
// import profileImage from '../../public/images/food2.jpg';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';


const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [totalord, setTotalord] = useState('');
  const [totalspent, setTotalspent] = useState('');

  const emailid = localStorage.getItem('userId'); // Retrieve user ID from localStorage

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/profile/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emailid }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        const tempdata1 = data.data1[0];
        const tempdata2 = data.data2[0];
        setPhone(tempdata2.phone_number);
        setEmail(emailid);
        setUsername(tempdata2.user_name);
        setTotalord(tempdata1.count_value);
        setTotalspent(tempdata1.sum_value);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProfile();
  }, [emailid]);
  

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:7000/api/profile/profileupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailid,
          phone: phone,
          username: username,
          totalord: totalord,
          totalspent: totalspent,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      
      // Handle the successful update
      setShowModal(false);
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };
  


  return (
    <>
    <Header/>
    <Container className="my-5">
      <Row>
        <Col md={4} className="text-center">
          <div className="profile-box">
            {/* <Image src={profileImage} roundedCircle fluid className="mb-3" /> */}
            <h3>{username}</h3>
            <p>Regular Customer</p>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Edit Profile
            </Button>
          </div>
        </Col>
        <Col md={8}>
          <div className="profile-box">
            <h2>Order History</h2>
            <p>Total Orders: {totalord}</p>
            <p>Total Spending: ${totalspent}</p>
              
          </div>
          {/* <div className="profile-box">
            <h2>About Me</h2>
            <p>{aboutMe}</p>
          </div> */}
          <div className="profile-box">
            <h2>Contact Information</h2>
            <ul>
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              {/* <li>Address: {address}</li> */}
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
            {/* <Form.Group controlId="formAboutMe">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                />
            </Form.Group> */}
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
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group> */}
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
    <Footer/>
    </>
  );
};

export default ProfilePage;
