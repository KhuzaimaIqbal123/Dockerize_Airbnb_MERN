import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import ListingsManagement from './ListingManagement';
import BookingsManagement from './BookingsManagement';
import Navbar from './Navbar';
import './App.css'


function App() {
  return ( 
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin/listings" element={<ListingsManagement />} />
        <Route path="/admin/bookings" element={<BookingsManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
