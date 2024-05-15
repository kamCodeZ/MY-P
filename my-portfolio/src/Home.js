import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: "url('./pexels-lucasmenesesphoto-7156911.jpg')", 
      backgroundSize: 'cover', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div style={{ 
        width: '40%', 
        padding: '20px', 
        background: 'white', 
        borderRadius: '24px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
            <defs />
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search for an app!!! " style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
