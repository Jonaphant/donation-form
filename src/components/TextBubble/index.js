import React from 'react';
import './index.css';

const TextBubble = () => {
  return (
    <div className="text-bubble-container">
      <div className="text-bubble">
        <p className="message font-ibm-plex"><span className="font-bold">$1250</span> still needed to fund this project</p>
      </div>
      <div className="point"></div>
    </div>
  )
}

export default TextBubble;
