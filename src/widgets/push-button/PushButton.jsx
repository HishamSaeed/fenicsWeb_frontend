import React, { useState } from 'react';

const PushButton = ({ onClick, label, disabled }) => {

  // Function to handle button click
  const handleClick = () => {
    // Emit an output (event) to the parent component
    onClick && onClick();
  };

  return (
    <button onClick={handleClick} disabled={disabled}>{label}</button>
  );
};

export default PushButton;
