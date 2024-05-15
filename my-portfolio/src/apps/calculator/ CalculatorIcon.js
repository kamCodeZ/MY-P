import React from 'react';

const CalculatorIcon = () => (
  <div
    style={{
      backgroundImage: `url('./pexels-lucasmenesesphoto-7156911.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src="/icons8.svg"
      alt="Calculator Icon"
      width="30"
      height="30"
      style={{ fill: 'white' }} 
    />
  </div>
);

export default CalculatorIcon;
