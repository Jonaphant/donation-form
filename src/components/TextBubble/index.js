import React, { useContext } from 'react';
import './index.css';

import { DONATION_GOAL } from '../../utils/constants';
import { numberWithCommas } from '../../utils/index';
import { DonationContext } from '../../provider/DonationContext';

const TextBubble = () => {
  const { donated } = useContext(DonationContext);
  const isDonationGoalReached = donated >= DONATION_GOAL;
  const donationsNeeded = isDonationGoalReached ? 0 : DONATION_GOAL - donated;

  return (
    <div className="text-bubble-container">
      <div className="text-bubble">
        {isDonationGoalReached ? (
          <p className="message font-ibm-plex font-bold">Our donation goal of <span className="dollar">{numberWithCommas(DONATION_GOAL)}</span> has been reached!</p>
        ) : (
          <p className="message font-ibm-plex"><span className="font-bold dollar">{numberWithCommas(donationsNeeded)}</span> still needed to fund this project</p>
        )}
      </div>
      <div className="point"></div>
    </div>
  )
}

export default TextBubble;
