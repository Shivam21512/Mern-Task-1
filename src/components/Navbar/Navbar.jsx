import React from 'react';
import './Navbar.css';
import { Search, Compass, Star, Bell, ShoppingCart } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div className="logo-square me-2">
            <span className="logo-h">h</span>
          </div>
          <div>
            <span className="brand-main">hobby</span>
            <span className="brand-highlight">cue</span>
            <div className="brand-subtitle">Your Hobby, Your Community</div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex ms-auto" role="search">
            <input className="form-control nav-search" type="search" placeholder="Search here..." aria-label="Search"/>
            <button className="btn btn-search ms-2" type="submit">
              <Search color="#8B6CB6" size={20} />
            </button>
          </form>
          <ul className="navbar-nav ms-3 mb-2 mb-lg-0 align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Compass color="#8B6CB6" size={22} className="me-1" /> Explore
              </a>
              <ul className="dropdown-menu custom-explore-menu">
                <li><a className="dropdown-item" href="/">People - Community</a></li>
                <li><a className="dropdown-item" href="/">Places - Venues</a></li>
                <li><a className="dropdown-item" href="/">Programs - Events</a></li>
                <li><a className="dropdown-item" href="/">Products - Store</a></li>
                <li><a className="dropdown-item" href="/">Blogs</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Star color="#8B6CB6" size={22} className="me-1" /> Hobbies
              </a>
            </li>
            <li className="nav-item mx-2"><Bell color="#8B6CB6" size={22} /></li>
            <li className="nav-item mx-2"><ShoppingCart color="#8B6CB6" size={22} /></li>
            <li className="nav-item ms-2">
              <button className="btn btn-outline-primary nav-signin">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
