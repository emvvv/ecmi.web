import React from 'react';
import ministries from './ministrydb.json';
import './volunteer.css';

function MinistryTile() {
  return (
    <>
      {ministries.ministries.map(ministry => (
        <div className='tile' key={ministry.name}>
          {ministry.name}
        </div>
      ))}
    </>
  );
}

export default MinistryTile;
