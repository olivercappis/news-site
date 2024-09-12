import React, { useState } from 'react';

const GlobalLandingPage = () => {
  const [bgColor, setBgColor] = useState('#f8f9fa'); // Light background by default

  const handleMouseEnter = () => {
    setBgColor('#e0e0e0'); // Change background on hover
  };

  const handleMouseLeave = () => {
    setBgColor('#f8f9fa'); // Revert background on leave
  };

  return (
    <div className="container text-center py-4" style={{ backgroundColor: bgColor }}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-around mb-4">
          <button className="btn btn-outline-primary">Home</button>
          <button className="btn btn-outline-primary">My News</button>
          <button className="btn btn-outline-primary">Settings</button>
          <button className="btn btn-outline-primary">Search</button>
          <button className="btn btn-outline-danger">Sign Out</button>
        </nav>
      </header>

      <main>
        <h1>Global News</h1>
        <div className="row">
          <div 
            className="col-md-4 p-2" 
            style={{ backgroundColor: '#ffffff', cursor: 'pointer' }} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-light p-4">Global News Widget 1</div>
          </div>
          <div className="col-md-4 p-2">
            <div className="bg-light p-4">Widget 2</div>
          </div>
          <div className="col-md-4 p-2">
            <div className="bg-light p-4">Widget 3</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlobalLandingPage;
