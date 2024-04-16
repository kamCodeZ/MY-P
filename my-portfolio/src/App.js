import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Calculator from './apps/calculator/Calculator';
import QuoteBox from './apps/quote-generator/QuoteBox';
import BirthdayReminder from './apps/birthday-reminder/BirthdayReminder';
import Lapp from './apps/B/Lapp';
import Home from './Home';

const AppContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration to 3 seconds (3000 milliseconds)

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/quote-generator" element={<QuoteBox />} />
              <Route path="/birthday-reminder" element={<BirthdayReminder />} />
              <Route path='/B' element={<Lapp />} />
              {/* Add routes for other components */}
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
};

export default AppContainer;














































// // AppContainer.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './Navigation';
// import Calculator from './apps/calculator/Calculator';
// import QuoteBox from './apps/quote-generator/QuoteBox';
// import BirthdayReminder from './apps/birthday-reminder/BirthdayReminder';
// import Lapp from './apps/B/Lapp';
// import Home from './Home';



// const AppContainer = () => {
//   return (
//     <Router>
//       <div>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/calculator" element={<Calculator/>} />
//           <Route path="/quote-generator" element={<QuoteBox/>} />
//           <Route path="/birthday-reminder" element={<BirthdayReminder/>} />
//           <Route path='/B' element={ <Lapp/>} />
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default AppContainer;