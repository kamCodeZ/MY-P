import React, { useState } from 'react';
import BirthdayForm from './BirthdayForm';

const BirthdayReminder = () => {
  // Define state for upcoming birthdays
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

  // Define the addBirthday function
  const addBirthday = (newBirthday) => {
    // Update the state with the new birthday
    setUpcomingBirthdays([...upcomingBirthdays, newBirthday]);
  };


const BirthdayReminderApp = () => {
  const [birthdays, setBirthdays] = useState([]);

  const handleAddBirthday = (newBirthday) => {
    setBirthdays([...birthdays, newBirthday]);
  };

  const addBirthday = (newBirthday) => {
    // Implement the logic to add a new birthday to the upcomingBirthdays state
    // For example, you can use the spread operator to update the state
    setUpcomingBirthdays([...upcomingBirthdays, newBirthday]);
  };

  return (
    <div style={{ display: 'flex' }}>
      
      {/* Left div for months */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div>
          <h3>January</h3>
          {/* Display birthdays for January */}
          {/* You can map through the birthdays and display them here */}
        </div>
        {/* Repeat the above structure for each month */}
        <div>
          <h3>February</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3> March</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>April</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>May</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>June</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>July</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>August</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>September</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>October</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>November</h3>
          {/* Display birthdays for December */}
        </div>
        <div>
          <h3>December</h3>
          {/* Display birthdays for December */}
        </div>
        {/* ... */}
        
      </div>

      {/* Right div for gift ideas */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h3>Gift Ideas</h3>
        {/* Display gift ideas */}
        {/* You can add a form or any other UI to add new gift ideas */}
      </div>
      
      {/* Birthday form */}
      <div style={{ flex: 1, padding: '20px' }}>
        <BirthdayForm onAddBirthday={addBirthday} />
      </div>
    </div>
  );
};

export default BirthdayReminderApp;
