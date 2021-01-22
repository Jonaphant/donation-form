import React from 'react';

const ProgressBar = ({ progressValue }) => {
  const goalReached = progressValue >= 100;

  return (
    <div className="progress-container">
      <div
        className={`progress-bar ${goalReached && 'full-progress'}`}
        style={{ width: `${progressValue}%` }}></div>
    </div>
  )
}

export default ProgressBar;
