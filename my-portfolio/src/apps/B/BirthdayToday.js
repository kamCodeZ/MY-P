import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const BirthdayToday = ({ users }) => {
  const [celebrants, setCelebrants] = useState([]);

  useEffect(() => {
    checkBirthdayCelebrants();
  }, []); // Run only once when the component mounts

  const checkBirthdayCelebrants = () => {
    const today = new Date();

    const todayCelebrants = users.filter((user) => {
      const birthday = new Date(user.birthday);
      // Compare only the day and month, not the year
      birthday.setFullYear(today.getFullYear());

      return (
        birthday.getDate() === today.getDate() &&
        birthday.getMonth() === today.getMonth()
      );
    });

    setCelebrants(todayCelebrants);

    if (todayCelebrants.length > 0) {
      const celebrantNames = todayCelebrants.map((celebrant) => celebrant.name);
      toast.info(`🎉 Today's Celebrants: ${celebrantNames.join(', ')}`);
    }
  };

  return (
    <div>
      <h2>Birthday Celebrants Today</h2>
      <div className="card-container">
        {celebrants.map((celebrant) => (
          <Card key={celebrant.id} className="user-card">
            <CardMedia
              component="img"
              alt={celebrant.name}
              height="100"
              image={celebrant.picture}
            />
            <CardContent className="card-info">
              <Typography variant="h6" component="div" className="name">
                {celebrant.name}
              </Typography>
              <Typography color="textSecondary" className="birthday">
                {celebrant.birthday}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BirthdayToday;
