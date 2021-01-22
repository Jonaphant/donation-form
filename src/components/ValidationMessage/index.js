import React from 'react';

const ValidationMessage = ({ message, type }) => {
  return (
    <p className={`font-ibm-plex ${type} font-bold`}>{message}</p>
  )
}

export default ValidationMessage;