// SearchBar.js
import React from 'react';
import SearchIcon from '../../assests/images/search.svg'; 
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="navbar">
      <div className="search-container">
        <label htmlFor="search-input" className="search-label">
          Search
        </label>
        <div className="search-input-container">
          <input
            id="search-input"
            className="search-input"
            type="text"
            placeholder="268585225278"
          />
          <img src={SearchIcon} alt="Search Icon" className="search-icon" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link view-list">
            View Supplier List
          </a>
          <a href="#" className="nav-link view-list">
            View Return List
          </a>
        </div>
      </div>
      <div className="right-items">
        <button className="btn-entry">Entry</button>
        <a href="#" className="nav-link outstanding">
          Outstanding
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
