// BirthdayCard.js
import React from 'react';

const BirthdayCard = ({ name, birthday, picture }) => {
  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', marginBottom: '20px', maxWidth: '300px' }}>
      <div style={{ background: `url("${picture}") no-repeat center center`, backgroundSize: 'cover', padding: '20px', borderRadius: '8px', color: '#fff' }}>
        <h2>{name}</h2>
        <p>{birthday}</p>
        <p>{calculateAge(birthday)} years old</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
