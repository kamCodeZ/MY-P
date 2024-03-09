import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from 'react-spring';
import FilterListIcon from '@mui/icons-material/FilterList';

import BirthdayToday from './BirthdayToday'; 

import './Lapp.css';

const users = require('./users.json');

function BirthdayCake() {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)'},
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  return (
    <animated.div style={props} className="birthday-cake">
      🎂
    </animated.div>
  );
}

function Lapp() {
  const [displayedUsers, setDisplayedUsers] = useState(6);
  const [isBirthday, setIsBirthday] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'week', 'month', 'today'

  useEffect(() => {
    checkBirthdayNotifications();
  }, []); // Run only once when the component mounts

  const handleToggleShowMore = () => {
    if (displayedUsers === users.length) {
      toast.info('Showing Less Users');
      setDisplayedUsers(6);
    } else {
      toast.info('Showing More Users');
      setDisplayedUsers(users.length);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const checkBirthdayNotifications = () => {
    const today = new Date();

    users.forEach((user) => {
      const birthday = new Date(user.birthday);
      // Compare only the day and month, not the year
      birthday.setFullYear(today.getFullYear());

      if (
        birthday.getDate() === today.getDate() &&
        birthday.getMonth() === today.getMonth()
      ) {
        toast.success(`Happy Birthday, ${user.name}! 🎉`);
        setIsBirthday(true);
      }
    });
  };

  const filteredUsers = () => {
    const today = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);

    switch (filter) {
      case 'week':
        return users.filter((user) => {
          const birthday = new Date(user.birthday);
          birthday.setFullYear(today.getFullYear());
          return (
            birthday >= today && birthday <= oneWeekLater
          );
        });
      case 'month':
        return users.filter((user) => {
          const birthday = new Date(user.birthday);
          birthday.setFullYear(today.getFullYear());
          return (
            birthday >= today && birthday <= oneMonthLater
          );
        });
      case 'today':
        return users.filter((user) => {
          const birthday = new Date(user.birthday);
          birthday.setFullYear(today.getFullYear());
          return (
            birthday.getDate() === today.getDate() &&
            birthday.getMonth() === today.getMonth()
          );
        });
      default:
        return users;
    }
  };

  return (
    <div className="App">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h1>Upcoming Birthdays</h1>
        <Box display="flex" alignItems="center">
          <Button onClick={() => handleFilterChange('today')} variant={filter === 'today' ? 'contained' : 'outlined'} color="primary">Today</Button>
          <Button onClick={() => handleFilterChange('week')} variant={filter === 'week' ? 'contained' : 'outlined'} color="primary">Week</Button>
          <Button onClick={() => handleFilterChange('month')} variant={filter === 'month' ? 'contained' : 'outlined'} color="primary">Month</Button>
          <FilterListIcon style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => handleFilterChange('all')} />
        </Box>
      </Box>
      <Box display="flex">
        <div className="left-panel">
          <BirthdayToday users={users} />
        </div>
        <div className="right-panel">
          <div className="card-container">
            {filteredUsers().slice(0, displayedUsers).map((user) => (
              <Card key={user.id} className="user-card">
                <CardMedia
                  component="img"
                  alt={user.name}
                  height="100"
                  image={user.picture}
                />
                <CardContent className="card-info">
                  <Typography variant="h6" component="div" className="name">
                    {user.name}
                  </Typography>
                  <Typography color="textSecondary" className="birthday">
                    {user.birthday}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          {isBirthday && <BirthdayCake />}
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="outlined" onClick={handleToggleShowMore}>
              {displayedUsers === filteredUsers().length ? 'Show Less' : 'Show More'}
            </Button>
          </Box>
        </div>
      </Box>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Lapp;
