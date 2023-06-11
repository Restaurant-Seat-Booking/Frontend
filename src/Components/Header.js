import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://source.unsplash.com/1600*900/?nature"
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/login"  className="btn btn-outline-success">Log In</Link>
          <Link to="/signup" className="btn btn-danger ms-2">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
