import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2>UrbanCove</h2>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
      </div>

      <div className="nav-right">
        <button onClick={() => navigate('/admin/products/add')} className="add-btn">
          Add Product
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
