
// Home.js
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Section from './Section';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'
const Home  = () => {
  const divs = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="app-container">
      <div className="scrolling-container">
        {divs.map((index) => (
          <div
            key={index}
            className="scrolling-div"
          >
            {/* Content for each div (you can customize this part) */}
            <p className="div-content">
              Div {index}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Home;