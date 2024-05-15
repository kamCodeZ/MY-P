// Search.js
import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    // You can perform additional actions here, such as filtering data based on the search query
  }

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '8px', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Search birthday" 
        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }} 
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
