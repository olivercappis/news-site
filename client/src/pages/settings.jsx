import React, { useState } from 'react';

const Settings = () => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleSave = () => {
    console.log("Widgets saved: ", selectedWidgets);
  };

  const addWidget = (widget) => {
    setSelectedWidgets([...selectedWidgets, widget]);
  };

  const removeWidget = (widget) => {
    setSelectedWidgets(selectedWidgets.filter(w => w !== widget));
  };

  return (
    <div className="container text-center py-4">
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
        <h1>Customize Your Dashboard</h1>
        <div className="mt-3">
          <button className="btn btn-outline-primary" onClick={() => addWidget('News')}>Add News Widget</button>
          <button className="btn btn-outline-primary" onClick={() => addWidget('Weather')}>Add Weather Widget</button>
        </div>

        <section className="mt-4">
          <h2>Selected Widgets</h2>
          {selectedWidgets.map((widget, index) => (
            <div 
              key={index} 
              className="bg-light p-3 rounded mt-2" 
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              {widget}
              <button 
                className="btn btn-danger ml-3" 
                style={{ fontSize: '0.9rem' }} // Custom font size
                onClick={() => removeWidget(widget)}
              >
                Remove
              </button>
            </div>
          ))}
        </section>

        <button className="btn btn-success mt-4" onClick={handleSave}>Save</button>
      </main>
    </div>
  );
};

export default Settings;
