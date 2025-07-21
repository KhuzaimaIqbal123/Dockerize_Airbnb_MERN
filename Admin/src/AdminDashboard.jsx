import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard h-screen ">
        <div>
      <h1 className='heading text-5xl font-bold py-5 '>Welcome to the Admin Panel</h1>
      </div>
      <div className="admin-dashboard-links ">
        
        {/* <div className='link-1'><Link to="/admin/listings">Manage Listings</Link>
        </div> */}
        <div className='link-2'>
        <Link to="/admin/bookings">Manage Bookings</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

// <h1 className="flex justify-center items-center bg-teal-700 text-Black text-2xl font-bold py-4">
//   Admin Side
// </h1>