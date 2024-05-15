import React, { useState, useEffect } from 'react';
import userData from './users.json';
import './UpcomingBirthday.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon from Font Awesome

const UpcomingBirthday = () => {
  const [usersData, setUsersData] = useState([]);
  const [filter, setFilter] = useState('today');
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(false); // State for expanded list

  useEffect(() => {
    setUsersData(userData);
  }, []);

  const filterBirthdays = () => {
    // This function is currently not used, you can remove it or use it as needed
  };

  const handleSearch = () => {
    // Perform search based on the searchQuery
    // Here you can modify the filtering logic as needed
    const searchResults = usersData.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return searchResults;
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="upcoming-birthday-container">
      <h2>Upcoming Birthdays</h2>
      <div>
        <label>
          Filter By:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="nextWeek">Next Week</option>
            <option value="thisMonth">This Month</option>
            <option value="nextMonth">Next Month</option>
          </select>
        </label>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-icon buttonClass" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} /> {/* Use Font Awesome icon */}
        </button>
      </div>
      <div className="user-list">
        {expanded ? ( // Render all users if expanded
          handleSearch().map((user, index) => (
            <div className="user-card" key={index}>
              <img className="user-picture" src={user.picture} alt={user.name} />
              <div className="user-details">
                <p className="user-name">{user.name}</p>
                <p className="user-birthday">Birthday: {user.birthday}</p>
              </div>
            </div>
          ))
        ) : ( // Otherwise, render only the first 5 users
          handleSearch().slice(0, 5).map((user, index) => (
            <div className="user-card" key={index}>
              <img className="user-picture" src={user.picture} alt={user.name} />
              <div className="user-details">
                <p className="user-name">{user.name}</p>
                <p className="user-birthday">Birthday: {user.birthday}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="toggle-button-container ">
        {handleSearch().length > 5 && ( // Only show toggle buttons if there are more than 5 users
          <button  className="buttonClass" onClick={toggleExpanded}>
            {expanded ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default UpcomingBirthday;

