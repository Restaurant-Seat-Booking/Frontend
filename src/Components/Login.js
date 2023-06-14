import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const naviate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    const userData = {
      email: email,
      password: password
    };
    console.log(userData)

    fetch('http://localhost:7000/api/userLogin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        const token = "oklogin";
        localStorage.setItem('token', token);
        naviate("/");
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Card
        className="shadow"
        style={{ maxWidth: '700px', margin: 'auto', marginTop: '100px', padding: '20px' }}
      >
        <h1>Login Page</h1>
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

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
