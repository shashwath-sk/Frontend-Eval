/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import './filterAndSearch.css';

export default function FilterAndSearch({ setFilters, setSearchBy }) {
  const [showFilters, setShowFilters] = React.useState(true);

  const searchBy = '';
  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };
  const addFilter = (option) => {
    setFilters(option);
  };

  const handleSearch = (e) => {
    setSearchBy(e.target.value);
  };

  return (
    <>
      <div className="FAS-container">
        <div className="filter-container">
          <i className="fa fa-filter" />
          <h1>Filter</h1>
          <i className="fa fa-chevron-up" onClick={toggleFilter} />
        </div>
        <div className="search-container" onClick={handleSearch}>
          <input type="text" placeholder="Enter Name" onChange={(e) => { handleSearch(e); }} />
          <i className="fa fa-filter" />
        </div>
      </div>
      {showFilters && (
      <div className="filter-container">
        <div className="container-1">
          <div className="filter-label">
            <input type="radio" />
            <p>ALL</p>
          </div>
          <div className="filter-label">
            <input type="radio" onClick={() => { addFilter('isRegistered'); }} />
            <p>REGISTER</p>
          </div>
        </div>
        <div className="container-2">
          <div className="filter-label">
            <input type="radio" onClick={() => { addFilter('isBookmarked'); }} />
            <p>BOOKMARKED</p>
          </div>
          <div className="filter-label">
            <input type="radio" onClick={() => { addFilter('areSeatsAvailable'); }} />
            <p>SEATS AVAILABLE</p>
          </div>
        </div>
      </div>
      )}
    </>

  );
}
