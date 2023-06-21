import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isManager, setIsManager] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isManager = localStorage.getItem('ismanager');

    // Check the value of the token and update isLoggedIn state accordingly
    if (token === 'oklogin') {
      setIsLoggedIn(true);
      setIsManager(isManager);
    } else {
      setIsLoggedIn(false);
      localStorage.setItem('ismanager', 0);
      setIsManager(0);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('ismanager', 0);
    setIsManager(0);
    const token = 'Nologin';
    localStorage.setItem('token', token);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://source.unsplash.com/1600x900/?nature"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
            alt="Logo"
          />
          Resto
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            {isManager === '1' && (
              <li className="nav-item">
                <Link className="nav-link" to="/myrestaurant">
                  My Restaurant
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/orderhistory">
                  Order History
                </Link>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-outline-success me-2">
              Log In
            </Link>
            <Link to="/signup" className="btn btn-danger">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
