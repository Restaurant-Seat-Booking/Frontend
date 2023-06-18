import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { url } from '../constants';

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
          const token = "oklogin";
          // console.log(data.data[0].user_email)
          const userid = data.data[0].user_email;
          console.log(userid)
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userid)
          navigate('/');
          console.log('Response:', data);
        }
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

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
