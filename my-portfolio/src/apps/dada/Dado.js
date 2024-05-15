// Dado.js
import React, { } from 'react';
import Header from './Header';
import Search from './Search';
import UpcomingBirthdays from './UpcomingBirthdays';
// import Footer from './Footer';
import './users.json';
import BirthdaySlider from './BirthdaySlider';

const Dado = () => {


  return (
    <div style={{ backgroundColor: '#f3e8ff', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', color: '#333' }}>
      <Header />
      <div style={{ padding: '20px' }}>
        <Search />
               <BirthdaySlider />
        <UpcomingBirthdays /> 
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Dado;




// // Dado.js
// import React, { useState } from 'react';
// import Header from './Header';
// import Search from './Search';
// import Filter from './Filter';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import Footer from './Footer';
// import './users.json';
// import BirthdaySlider from './BirthdaySlider';

// const Dado = () => {
//   const [users, setUsers] = useState([]);
  
//   // Function to handle filter selection
//   const handleFilterSelect = (filter) => {
//     // Implement logic to filter users based on the selected filter
//     // For simplicity, this example does not perform filtering
    
//     // You can call an API to fetch filtered data or implement filtering logic here
//     // For now, we'll just log the selected filter
//     console.log(`Selected filter: ${filter}`);
//   };

//   return (
//     <div style={{ backgroundColor: '#f3e8ff', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', color: '#333' }}>
//       <Header />
//       <div style={{ padding: '20px' }}>
//         <Search />
//         <Filter onSelectFilter={handleFilterSelect} /> {/* Pass onSelectFilter function as a prop */}
//         <BirthdaySlider />
//         <UpcomingBirthdays />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Dado;
