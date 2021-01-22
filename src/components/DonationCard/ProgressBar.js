import React from 'react';

const ProgressBar = ({ progress }) => {
  const goalReached = progress >= 100;

  return (
    <div className="progress-container">
      <div
        className={`progress-bar ${goalReached && 'full-progress'}`}
        style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar;
