import React from 'react';
import './listing-card-list.scss';
import { Link } from 'react-router-dom';

const ListingCardList = ({ listing, btnConfig, type }) => {
  return (
    <div className={`listing-card-list ${listing.selected && type === 'compare' ? 'selected' : ''} flex-wrap sm:w-auto w-full`}>
      <div className="card-section w-full sm:w-3/12">
        <img className="card-logo mb-4" src={listing.logo} alt={listing.company} />
        <p className="company-name">{listing.company}</p>
      </div>

      <div className="card-section w-full sm:w-5/12  lg:w-6/12">
        <p>{listing.details}</p>
        <p>
          <Link to="/" className="card-link">More Information</Link>
        </p>
      </div>

      <div className="card-section w-full sm:w-4/12 lg:w-3/12 price-section">
          <p className="font-light">Total annual premium</p>
          <h3 className="price">{listing.premium}</h3>
          <hr className="price-hr" />
          <p className="font-light">Cover value</p>
          <h3 className="price-cover">{listing.cover_value}</h3>
          <hr className="price-hr" />
        <button onClick={btnConfig.action} className={`btn ${listing.selected && type === 'compare' ? 'border-secondary' : 'bg-primary'} w-full`}>{btnConfig.text}</button>
      </div>
      {
        listing.tag && <div className="card-tag">{listing?.tag}</div>
      }
    </div>
  );
}

export default ListingCardList;