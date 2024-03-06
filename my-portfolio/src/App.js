// AppContainer.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Calculator from './apps/calculator/Calculator';
import QuoteBox from './apps/quote-generator/QuoteBox';
import BirthdayReminder from './apps/birthday-reminder/BirthdayReminder';

import Home from './Home';



const AppContainer = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/quote-generator" element={<QuoteBox/>} />
          <Route path="/birthday-reminder" element={<BirthdayReminder/>} />
          {/* Add routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppContainer;