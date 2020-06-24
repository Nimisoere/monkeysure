import React from 'react';
import phone from '../../assets/images/phone.png';
import './compare.scss';
import { listings } from '../../listings';
import ListingCardGrid from '../../components/Cards/QuoteCardSmall';

const CompareQuotes = () => (
  <div className="compare">
    <div className="page-header">
      <div className="container mx-auto py-8 flex justify-between">
        <div>
          <h4 className="text-5xl color-primary">Compare Quotes</h4>
          <p className="text-base">You can add up to  3 quotes to compare side by side</p>
        </div>
        <div>
          <button className="btn mb-4 border-secondary"><img src={phone} alt="" /> Call us now</button>
          <p className="">to get help with quotes</p>
        </div>
      </div>
    </div>
    <div className="container flex mx-auto">
      <div className="w-full flex-wrap justify-between flex py-6">
        {
          listings.map(listing => (
            <div className="listing-wrapper">
              <ListingCardGrid btnConfig={{ text: listing.selected ? 'Remove' : 'Compare', action: () => null }} key={listing.id} listing={listing} />
            </div>
          ))
        }
      </div>
    </div>
    <div className="quotes-alert-wrapper">
      <div className="quotes-alert">
        Add up to 3 quotes <button className="btn ml-2 bg-primary">Compare quotes</button>
      </div>
    </div>
  </div>
)

export default CompareQuotes;