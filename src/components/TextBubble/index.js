import React from 'react';
import './index.css';

const TextBubble = ({message}) => {
  return (
    <div className="text-bubble-container">
      <div className="text-bubble">
        {message}
      </div>
      <div className="point"></div>
    </div>
  )
}

export default TextBubble;
