import React from 'react';
import './quote-banner.scss';
import { Link } from 'react-router-dom';

const QuoteBanner = ({ category }) => (
  <div className="quote-banner py-4 px-8">
    <div className="sm:w-9/12 mb-2">
      <p className="text-sm font-light">Scroll down for more quotes</p>
      <h4 className="text-lg font-light">Compare up to 3 quotes side by side to get the best deal</h4>
    </div>
    <div className="sm:w-3/12 flex justify-end">
      <Link to={`/${category}/compare-quotes`}>
        <button className="btn border-primary">Compare Quotes</button>
      </Link>
    </div>
  </div>
);

export default QuoteBanner;