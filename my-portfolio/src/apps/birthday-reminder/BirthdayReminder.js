import React, { useState } from 'react';
import BirthdayForm from './BirthdayForm';

const BirthdayReminder = () => {
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

  const addBirthday = (newBirthday) => {
    setUpcomingBirthdays([...upcomingBirthdays, newBirthday]);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Birthday form */}
      <div style={{ flex: 1, padding: '20px' }}>
        <BirthdayForm onAddBirthday={addBirthday} />
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        {Array.from({ length: 12 }, (_, monthIndex) => {
          const monthName = new Date(2022, monthIndex).toLocaleString('en-US', { month: 'long' }).toLowerCase();
          const monthBirthdays = upcomingBirthdays.filter(birthday => birthday.month.toLowerCase() === monthName);

          return (
            <div key={monthName}>
              <h3>{monthName}</h3>
              {monthBirthdays.map(birthday => (
                <div key={birthday.id}>
                  {birthday.name}'s Birthday on {birthday.day}th
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Right div for gift ideas */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h3>Gift Ideas</h3>
        {/* Display gift ideas */}
        {/* You can add a form or any other UI to add new gift ideas */}
      </div>
    </div>
  );
};

export default BirthdayReminder;
 




// import React, { useState } from 'react';
// import BirthdayForm from './BirthdayForm';

// const BirthdayReminder = () => {
//   const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

//   const addBirthday = (newBirthday) => {
//     setUpcomingBirthdays([...upcomingBirthdays, newBirthday]);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Birthday form */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <BirthdayForm onAddBirthday={addBirthday} />
//       </div>

   
// <div style={{ flex: 1, padding: '20px' }}>
//   <div>
//     <h3>January</h3>
//     {/* Display birthdays for January */}
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'January')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>

//   <div>
//     <h3>February</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'February')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>March</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'March')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>April</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'April')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>May</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'May')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>June</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'June')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>July</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'July')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>August</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'August')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>September</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'September')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>October</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'October')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>
//   <div>
//     <h3>November</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'November')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>

//   <div>
//     <h3>December</h3>
//     {upcomingBirthdays
//       .filter(birthday => birthday.month === 'December')
//       .map(birthday => (
//         <div key={birthday.id}>{birthday.name}'s Birthday</div>
//       ))}
//   </div>

// </div>


//       {/* Right div for gift ideas */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h3>Gift Ideas</h3>
//         {/* Display gift ideas */}
//         {/* You can add a form or any other UI to add new gift ideas */}
//       </div>
//     </div>
//   );
// };

// export default BirthdayReminder;




// import React, { useState } from 'react';
// import BirthdayForm from './BirthdayForm';

// const BirthdayReminder = () => {
//   const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

//   const addBirthday = (newBirthday) => {
//     setUpcomingBirthdays([...upcomingBirthdays, newBirthday]);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Birthday form */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <BirthdayForm onAddBirthday={addBirthday} />
//       </div>

//       <div style={{ flex: 1, padding: '20px' }}>
//         {Array.from({ length: 12 }, (_, monthIndex) => {
//           const monthName = new Date(2022, monthIndex).toLocaleString('en-US', { month: 'long' });
//           const monthBirthdays = upcomingBirthdays.filter(birthday => birthday.month === monthName);

//           return (
//             <div key={monthName}>
//               <h3>{monthName}</h3>
//               {monthBirthdays.map(birthday => (
//                 <div key={birthday.id}>
//                   {birthday.name}'s Birthday on {birthday.day}th
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>

//       {/* Right div for gift ideas */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <h3>Gift Ideas</h3>
//         {/* Display gift ideas */}
//         {/* You can add a form or any other UI to add new gift ideas */}
//       </div>
//     </div>
//   );
// };

// export default BirthdayReminder;
