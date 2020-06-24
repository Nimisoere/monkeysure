import React from 'react';
import { Link } from 'react-router-dom';
import './confirmation-card.scss';

const ConfirmationCard = ({ price, tag, company, logo }) => (
  <div className="confirmation-card">
    <div className="card-tag">{tag}</div>
    <div className="card-section">
      <div>
        <img className="card-logo" src={logo} alt={company} />
      </div>
      <h4 className="company-name">
        {company}
      </h4>
      <p>
        <Link className="card-link">See details</Link>
      </p>
    </div>
    <div className="card-section price-section">
      <p className="text-base font-light">Total annual premium</p>
      <h3 className="price">{price}</h3>
    </div>
  </div>
)

export default ConfirmationCard;