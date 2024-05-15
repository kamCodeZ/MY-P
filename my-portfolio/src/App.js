import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Calculator from './apps/calculator/Calculator';
import QuoteBox from './apps/quote-generator/QuoteBox';
import BirthdayReminder from './apps/birthday-reminder/BirthdayReminder';
import Lapp from './apps/B/Lapp';
import Dado from './apps/dada/Dado';
const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

const AppContainer = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote-generator" element={<QuoteBox />} />
          <Route path="/birthday-reminder" element={<BirthdayReminder />} />
          <Route path="/B" element={<Lapp />} />
          <Route path="/dada" element={<Dado/>} />
          {/* Add routes for other components */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppContainer;
