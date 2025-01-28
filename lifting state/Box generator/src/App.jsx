import React, { useState } from 'react';
import './App.css';
import Color from './components/Color';

function App() {
  const [currentColor, setCurrentColor] = useState([]);

  const onNewColor = (newColor) => {
    setCurrentColor([...currentColor, newColor]);
  };

  return (
    <div className="App">
      <h1>Color List</h1>
      <Color onNewColor={onNewColor} />
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {currentColor.map((color, index) => (
          <li key={index}>
            <div style={{ backgroundColor: color, width: '50px', height: '50px', borderRadius: '5px' }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
