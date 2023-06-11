import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import SignupPage from './Pages/signup';
import HomePage from './Pages/home';
import Login from './Pages/login';
import MyRestaurant from './Pages/myrestaurant';
import Restaurant from "./Pages/restaurant"
import Contact from './Pages/contact';
import MyResMyProfile from './Components/MyResMyProfile'
import MyResOrder from './Components/MyResOrder'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myrestaurant" element={<MyRestaurant />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<MyResMyProfile />} />
        <Route path="/orderhistory" element={<MyResOrder />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App
