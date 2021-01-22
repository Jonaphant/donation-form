import React from 'react';
import DonationForm from './components/DonationForm';
import TextBubble from './components/TextBubble';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="donation-container">
        <TextBubble />
        <DonationForm />
      </div>
    </div>
  )
}

export default App;