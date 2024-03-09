// BirthdayForm.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BirthdayForm = ({ onAddBirthday }) => {
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, month, and day are not empty
    if (name.trim() === '' || month.trim() === '' || day.trim() === '') {
      alert('Please enter both name, month, and day');
      return;
    }
      

     // Check if the day is a valid number between 1 and 31
     const dayNumber = parseInt(day, 10);
     if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
       alert('Please enter a valid day between 1 and 31');
       return;
     }
 
    // Create a new birthday object
    const newBirthday = {
      id: Math.random().toString(),
      name,
      month,
      day,
    };

    // Pass the new birthday to the parent component
    onAddBirthday(newBirthday);

    // Clear the form
    setName('');
    setMonth('');
    setDay('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Month"
        type="text"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Day"
        type="text"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth="120" height="100">
        Add Birthday
      </Button>
    </form>
  );
};

export default BirthdayForm;





// import React, { useState } from 'react';

// const BirthdayForm = ({ onAddBirthday }) => {
//   const [name, setName] = useState('');
//   const [month, setMonth] = useState('');
//   const [day, setDay] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if name, month, and day are not empty
//     if (name.trim() === '' || month.trim() === '' || day.trim() === '') {
//       alert('Please enter name, month, and day.');
//       return;
//     }

//     // Convert month to lowercase
//     const lowercaseMonth = month.toLowerCase();

//     // Create a new birthday object
//     const newBirthday = {
//       id: Math.random().toString(),
//       name,
//       month: lowercaseMonth,
//       day,
//     };

//     // Pass the new birthday to the parent component
//     onAddBirthday(newBirthday);

//     // Clear the form
//     setName('');
//     setMonth('');
//     setDay('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Month:
//         <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
//       </label>
//       <label>
//         Day:
//         <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
//       </label>
//       <button type="submit">Add Birthday</button>
//     </form>
//   );
// };

// export default BirthdayForm;


// import React, { useState } from 'react';

// const BirthdayForm = ({ onAddBirthday }) => {
//   const [name, setName] = useState('');
//   const [month, setMonth] = useState('');
//   const [day, setDay] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if name, month, and day are not empty
//     if (name.trim() === '' || month.trim() === '' || day.trim() === '') {
//       alert('Please enter both name, month, and day');
//       return;
//     }

//     // Create a new birthday object
//     const newBirthday = {
//       id: Math.random().toString(), // You should use a better ID generation method
//       name,
//       month,
//       day,
//     };

//     // Pass the new birthday to the parent component
//     onAddBirthday(newBirthday);

//     // Clear the form
//     setName('');
//     setMonth('');
//     setDay('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Month:
//         <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
//       </label>
//       <label>
//         Day:
//         <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
//       </label>
//       <button type="submit">Add Birthday</button>
//     </form>
//   );
// };

// export default BirthdayForm;
