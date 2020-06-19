import React from 'react';
import './card.scss';

const Card = ({children, classes}) => (
  <div className={`card-wrapper ${classes}`}>
    <div className="card-body">
      {children}
    </div>
  </div>
);

export default Card;