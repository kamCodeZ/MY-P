// AppContainer.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import App1Component1 from './apps/calculator/App1Component1';
import App2Component1 from './apps/quote-generator/App2Component1';
import Home from './Home';

const AppContainer = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<App1Component1/>} />
          <Route path="/quote-generator" element={<App2Component1 />} />
          {/* Add routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppContainer;