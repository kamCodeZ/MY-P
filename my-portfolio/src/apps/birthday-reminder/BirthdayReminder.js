import React, { useState } from 'react';
import BirthdayForm from './BirthdayForm';
import GiftIdeas from './GiftIdeas';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const BirthdayReminder = () => {
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);
  const [isBirthdayFormVisible, setIsBirthdayFormVisible] = useState(false);

  const addBirthday = (newBirthday) => {
    setUpcomingBirthdays([...upcomingBirthdays, newBirthday]);
    toggleBirthdayFormVisibility(); // Close the form after adding a birthday
  };

  const toggleBirthdayFormVisibility = () => {
    setIsBirthdayFormVisible(!isBirthdayFormVisible);
  };

  // Function to format the day
  const formatDay = (day) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = day < 30 ? day % 20 : day % 30;
    const suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
    return `${day}${suffix}`;
  };

  // Function to generate a random color
  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <Grid container spacing={2} style={{ padding: '10px', height: '100vh',  }}>
      {/* Button to toggle BirthdayForm visibility */}
      {/* <Grid item xs={12} style={{ textAlign: 'center' }}> */}
        <button
          onClick={toggleBirthdayFormVisibility}
          style={{
            margin: '10px',
            padding: '5px',
            fontSize: '1px',
            backgroundColor: 'red',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            color: 'black',
                      }}
        >
          {isBirthdayFormVisible ? 'Hide Birthday Form' : 'Show Birthday Form'}
        </button>
      {/* </Grid> */}

      {/* Left card for Birthday form */}
      {isBirthdayFormVisible && (
        // <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', width: '230px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" component="div" style={{ marginBottom: '20px' }}>
                Birthday Form
              </Typography>
              <BirthdayForm onAddBirthday={addBirthday} />
            </CardContent>
          </Card>
        // </Grid>
      )}

      {/* Middle card for months */}
      {/* <Grid item xs={12} sm={8}> */}
        <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography variant="h5" component="div" style={{ marginBottom: '20px' }}>
              Upcoming Birthdays
            </Typography>
            {/* Split the months into three rows */}
            {[0, 1, 2].map((rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Display four months in each row */}
                {Array.from({ length: 4 }, (_, i) => rowIndex * 4 + i + 1).map((monthNumber) => {
                  const monthName = new Date(2022, monthNumber - 1, 1).toLocaleString('default', { month: 'long' });
                  const borderStyle = `2px solid ${getRandomColor()}`;
                  return (
                    <div key={monthNumber} style={{ width: '350px', marginBottom: '20px', border: borderStyle, borderRadius: '8px', padding: '10px' }}>
                      <Typography variant="h6">{monthName}</Typography>
                      {/* Display birthdays for the current month */}
                      {upcomingBirthdays
                        .filter((birthday) => birthday.month.toLowerCase() === monthName.toLowerCase())
                        .map((birthday) => (
                          <Typography key={birthday.id} style={{ fontSize: '14px' }}>
                            {`${formatDay(birthday.day)} - ${birthday.name}'s Birthday`}
                          </Typography>
                        ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </CardContent>
        </Card>
      {/* </Grid> */}


      {/* Right card for gift ideas */}
      <Grid item xs={12} sm={4}>
        <GiftIdeas />
      </Grid>
    </Grid>
  );
};

export default BirthdayReminder;
