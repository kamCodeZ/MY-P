// Footer.js
import React from 'react';

const Footer = () => {
  const handleHomeClick = () => {
    // Implement functionality to navigate to the home page
  };

  const handleAddBirthdayClick = () => {
    // Implement functionality to open a form to add a new birthday
  };

  const handleNotificationsClick = () => {
    // Implement functionality related to notifications
  };

  return (
    <footer style={{ backgroundColor: '#fff', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleHomeClick}>Home</button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleAddBirthdayClick}>Add birthday</button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleNotificationsClick}>Notifications</button>
      </div>
    </footer>
  );
}

export default Footer;
