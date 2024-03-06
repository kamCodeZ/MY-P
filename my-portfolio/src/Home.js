// Home.js
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Section from './Section';

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
        <List style={{ backgroundColor: 'darkgreen', color: 'whitesmoke' }}>
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
      <div style={{ marginLeft: openDrawer ? 340 : 0, padding: '20px', textAlign: 'center' }}>
        <h2>Welcome to My Portfolio</h2>
        <p>This is the home page of my portfolio. Explore the applications using the navigation of your choice.</p>

        {/* Toggle Sidebar Button */}
        <button
          onClick={toggleDrawer(!openDrawer)}
          style={{
            background: '#000000',
            color: 'white',
            margin: '10px',
            padding: '20px',
            fontSize: '14px',
            width: '200px',
          }}
        >
          {openDrawer ? 'done viewing !!' : 'check out my apps'}
        </button>

        {/* Sections */}
        <Section title="Div 1" content="Content for Div 1" />
        <Section title="Div 2" content="Content for Div 2" />
        <Section title="Div 3" content="Content for Div 3" />
        <Section title="Div 4" content="Content for Div 4" />
      </div>
    </div>
  );
};

export default Home;