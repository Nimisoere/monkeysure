import React from 'react';
import './listing-card.scss';
import { Link } from 'react-router-dom';

const ListingCardGrid = ({ listing, btnConfig, type }) => {
  return (
    <div className={`listing-card grid ${listing.selected && type === 'compare' ? 'selected' : ''}`}>
      {
        listing.tag && <div className="card-tag">{listing?.tag}</div>
      }
      <div className="card-section">
        <img className="card-logo mb-4" src={listing.logo} alt={listing.company} />
        <p className="company-name">{listing.company}</p>
      </div>
      <div className="card-section price-section">
        <p className="font-light">Total annual premium</p>
        <h3 className="price">{listing.premium}</h3>
      </div>
      <div className="card-section">
        <p>{listing.details.slice(0, 150)}</p>
        <p>
          <Link to="/" className="card-link">See details</Link>
        </p>
      </div>
      <div className="card-section">
        <button onClick={btnConfig.action} className={`btn ${listing.selected && type==='compare' ? 'border-secondary' : 'bg-primary' } w-full`}>{btnConfig.text}</button>
      </div>
    </div>
  );
}

export default ListingCardGrid;