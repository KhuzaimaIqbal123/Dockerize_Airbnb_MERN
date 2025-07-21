import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar ">
      <ul className="navbar-links">
      <li>
          <Link to="/">HomePage</Link>
        </li>
        {/* <li>
          <Link to="/admin/listings">Manage Listings</Link>
        </li> */}
        <li>
          <Link to="/admin/bookings">Manage Bookings</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
