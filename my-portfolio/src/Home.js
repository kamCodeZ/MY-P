// Home.js
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          {/* Link to Calculator */}
          <ListItem button component={Link} to="/calculator">
            <ListItemText primary="Calculator" />
          </ListItem>

          {/* Link to Quote Generator */}
          <ListItem button component={Link} to="/quote-generator">
            <ListItemText primary="Quote Generator" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ marginLeft: openDrawer ? 240 : 0, padding: '20px', textAlign: 'center' }}>
        <h2>Welcome to My Portfolio</h2>
        <p>This is the home page of my portfolio. Explore the applications using the navigation above.</p>

        {/* Toggle Sidebar Button */}
        <button onClick={toggleDrawer(!openDrawer)}>
          {openDrawer ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        {/* Four Divs */}
        <div style={{ background: 'lightblue', margin: '10px', padding: '20px' }}>
          <h3>Div 1</h3>
          <p>Content for Div 1</p>
        </div>

        <div style={{ background: 'lightgreen', margin: '10px', padding: '20px' }}>
          <h3>Div 2</h3>
          <p>Content for Div 2</p>
        </div>

        <div style={{ background: 'lightcoral', margin: '10px', padding: '20px' }}>
          <h3>Div 3</h3>
          <p>Content for Div 3</p>
        </div>

        <div style={{ background: 'lightgoldenrodyellow', margin: '10px', padding: '20px' }}>
          <h3>Div 4</h3>
          <p>Content for Div 4</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
