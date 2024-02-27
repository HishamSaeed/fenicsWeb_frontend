import React, { useState } from 'react';

const PushButton = ({ onClick, label }) => {

  // Function to handle button click
  const handleClick = () => {
    // Emit an output (event) to the parent component
    onClick && onClick();
  };

  return (
    <button onClick={handleClick}>{label}</button>
  );
};

export default PushButton;
