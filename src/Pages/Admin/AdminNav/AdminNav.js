import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
    return (
      <div className="bg-dark text-center">
          <div className=" ">
          <NavLink to="/admin-dashboard" className="nav-link border border">Dashboard</NavLink>
          <NavLink to="/admin-addservices" className="nav-link border border">Addservice</NavLink>
          <NavLink to="/admin-bookings" className="nav-link border border">Booking Details</NavLink>
          </div>
         
          
      </div>
    );
};

export default AdminNav;