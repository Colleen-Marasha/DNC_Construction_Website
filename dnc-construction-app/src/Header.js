import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ logoSrc, companyName, cartItemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logoSrc}
            alt={companyName}
            height="50"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog Archive
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            {/* Button for Shop */}
            <li className="nav-item ms-lg-3">
              <NavLink
                className="btn btn-warning rounded-pill px-4 py-2"
                to="/shop"
              >
                Quality Gear
              </NavLink>
            </li>

            {/* Cart Icon with Badge */}
            <li className="nav-item position-relative ms-3">
              <NavLink className="btn btn-outline-light position-relative" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                  </span>
                )}
              </NavLink>
            </li>

            {/* Search Bar */}
            <li className="nav-item ms-3 d-none d-lg-block">
              <div className="input-group custom-search-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
