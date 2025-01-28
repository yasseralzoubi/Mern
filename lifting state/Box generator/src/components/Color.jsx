import React, { useState } from 'react';

const Color = (props) => {
  const [color, setColor] = useState('');
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() !== '') {
      setColorList([...colorList, color]);
      props.onNewColor(color);
      setColor(''); 
    }
  };

  const updateColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Color:</label>
      <input type="text" value={color} onChange={updateColor} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Color;
