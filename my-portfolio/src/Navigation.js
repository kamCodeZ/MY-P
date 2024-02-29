// Navigation.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#000000' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
          <Typography variant="h6">My Portfolio</Typography>
        </Link>
        <div>
          <Link href="/calculator" color="inherit" style={{ marginRight: '20px' }}>
            <Typography variant="h6">Calculator</Typography>
          </Link>
          <Link href="/quote-generator" color="inherit" style={{ marginRight: '20px' }}>
            <Typography variant="h6">Quote Generator</Typography>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
