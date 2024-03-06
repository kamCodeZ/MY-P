import React, { useState } from 'react';

const BirthdayForm = ({ onAddBirthday }) => {
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, month, and day are not empty
    if (name.trim() === '' || month.trim() === '' || day.trim() === '') {
      alert('Please enter both name, month, and day');
      return;
    }

    // Create a new birthday object
    const newBirthday = {
      id: Math.random().toString(), // You should use a better ID generation method
      name,
      month,
      day,
    };

    // Pass the new birthday to the parent component
    onAddBirthday(newBirthday);

    // Clear the form
    setName('');
    setMonth('');
    setDay('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Month:
        <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
      </label>
      <label>
        Day:
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default BirthdayForm;
