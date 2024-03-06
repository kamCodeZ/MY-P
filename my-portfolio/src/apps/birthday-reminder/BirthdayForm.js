import React, { useState } from 'react';

const BirthdayForm = ({ onAddBirthday }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleAddBirthday = () => {
    // Validate input (you can add more validation logic as needed)
    if (!name || !date) {
      alert('Please enter both name and date.');
      return;
    }

    // Format the date as needed
    // For simplicity, let's assume date is in MM/DD format
    const formattedDate = date;

    // Clear input fields
    setName('');
    setDate('');

    // Pass the new birthday to the parent component
    onAddBirthday({ name, date: formattedDate });
  };

  return (
    <div>
      <h3>Add New Birthday</h3>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Date (MM/DD):</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button onClick={handleAddBirthday}>Add Birthday</button>
    </div>
  );
};

export default BirthdayForm;
