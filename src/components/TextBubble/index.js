import React, { useContext } from 'react';
import './index.css';

import { DONATION_GOAL } from '../../utils/constants';
import { DonationContext } from '../../provider/DonationContext';

const TextBubble = () => {
  const { donated } = useContext(DonationContext);
  const donationsNeeded = DONATION_GOAL - donated;

  return (
    <div className="text-bubble-container">
      <div className="text-bubble">
        <p className="message font-ibm-plex"><span className="font-bold">${donationsNeeded}</span> still needed to fund this project</p>
      </div>
      <div className="point"></div>
    </div>
  )
}

export default TextBubble;
