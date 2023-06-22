import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const url = process.env.REACT_APP_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    fetch(`${url}/api/userLogin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setErrorMessage(data.message);
        } else {
          console.log(data)
          const token = "oklogin";
          const userid = data.data[0].user_email;
          const ismanager = data.data[0].isok;
          const resid = data.data[0].myrestaurant_id;
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userid)
          localStorage.setItem('ismanager', ismanager)
          localStorage.setItem('myrestaurant_id', resid);
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Container style={{ marginBottom: '100px', minHeight:"65vh"}}>
      <Card
        className="shadow"
        style={{ maxWidth: '700px', margin: 'auto', marginTop: '100px', padding: '20px' }}
      >
        <h1>Login Page</h1>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            Sign In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
