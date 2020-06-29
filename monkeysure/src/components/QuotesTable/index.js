import React from 'react';
import './quotes-table.scss';
import { listings, compareAttributes } from '../../listings';
import shield from '../../assets/images/Vector Smart Object copy 3.png';
import { useHistory, useParams } from 'react-router';

const QuotesTable = () => {
  const history = useHistory();
  const category = useParams()?.category;
  return (
    <div className="quotes-table">
      <div className="quotes-table-header mb-4" >
        <div className="quotes-table-column" />
        {
          listings.map(listing => listing.selected && (
            <div key={listing.id} className="quotes-table-column">
              <img src={listing.logo} className="h-8" alt={listing.company} />
              <p className="text-base font-light mb-4">{listing.company}</p>
              <p>Total annual premium</p>
              <p className="text-xl font-medium mb-4">{listing.premium}</p>
            </div>
          ))
        }
      </div>
      <div className="quotes-table-header subheader" >
        <div className="quotes-table-column">
          <p>Cover Value</p>
        </div>
        {
          listings.map(listing => listing.selected && (
            <div key={listing.id} className="quotes-table-column">
              <p className="text-xl font-medium">{listing.premium}</p>
            </div>
          ))
        }
      </div>

      <div className="mt-4">
        <p className="text-base font-light mb-2">Benefits</p>
      </div>

      <div className="quotes-table-wrapper">
        {
          compareAttributes.map(attr => (
            <div className="quotes-table-row">
              <div className="quotes-table-column">{attr.label}</div>
              {
                listings.map(listing => listing.selected && (
                  <div className="quotes-table-column">
                    <img src={shield} className={`h-4 ${listing.attributes.includes(attr.key) ? '' : 'grey-icon'}`} alt="" />
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="quotes-table-footer mb-6" >
        <div className="quotes-table-column" />
        {
          listings.map(listing => listing.selected && (
            <div key={listing.id} className="quotes-table-column">
              <button onClick={() => history.push(`/${category}/confirmation`)} className="btn bg-primary w-full">BUY NOW</button>
            </div>
          ))
        }
      </div>
      
        <div className="flex justify-between">
          <button onClick={() => history.push(`/${category}/compare-quotes`)} className="btn border-secondary">Choose different quotes</button>
          <button onClick={() => history.push('/')} className="btn border-secondary">Close comparison</button>
        </div>

    </div>
  )
}

export default QuotesTable;