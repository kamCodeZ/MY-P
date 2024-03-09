// Navigation.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

import CalculatorIcon from './apps/calculator/ CalculatorIcon';
import QuoteGeneratorIcon from './apps/quote-generator/QuoteGeneratorIcon';
import BirthdayIcon from './apps/birthday-reminder/BirthdayIcon';


const Navigation = () => {
  return (
    
    <AppBar position="static" style={{ backgroundColor: 'black', justifyContent:'space-between' }}>

      <Toolbar style={{  justifyContent:'space-between', backgroundColor: 'grey', color:'white'  }}>

        <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>

          <Typography variant="h6" >My Portfolio</Typography>

        </Link>
         
        {/* Calculator Icon */}
        <Link href="/calculator" style={{ marginRight: '10px' }}>
          <CalculatorIcon style={{ fill: 'white', height: '24px' }} />
        </Link>

        {/* Quote Generator Icon */}
        <Link href="quote-generator">
          <QuoteGeneratorIcon style={{ fill: 'white', height: '24px' }} />
        </Link>
             {/* BIRTHDAY REMINDER Icon */}
             <Link href="birthday-reminder">
          <BirthdayIcon style={{ fill: 'white', height: '24px' }} />
        </Link>
                {/* BIRTHDAY REMINDER Icon */}
                <Link href="B">
          <BirthdayIcon style={{ fill: 'white', height: '24px' }} />
        </Link>
              
              </Toolbar>

    </AppBar>
  );
};

export default Navigation;
 