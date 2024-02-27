import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value >= 0 && value <= 100) {
      setProgress(value);
    }
  }, [value]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="progress-text">{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;