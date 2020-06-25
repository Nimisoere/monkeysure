import React from 'react';
import PageHeader from '../../components/PageHeader';
import { listings } from '../../listings';
import ListingCardGrid from '../../components/Cards/QuoteCardSmall';
import './listing.scss';
import Assistance from '../../components/NeedAssistance';
import CustomerCard from '../../components/Cards/CustomerDetailCard';
import ListingCardList from '../../components/Cards/QuoteCardBig';

const ListingGrid = ({type}) => (
  <div className="listing">
    <PageHeader leadtext="Phone Insurance" subtext="easy as you like" />
    <div className="container mx-auto py-8">
      <div>
        <h4 className="font-normal text-lg">We've found 8 device insurance quotes for you</h4>
        <p className="text-base">Please select quotes</p>
      </div>
      <div className="w-full flex">
        <div className="w-9/12">
          <div className="flex flex-wrap py-6 justify-start">
            {
              listings.map(listing => type === 'grid' ? (
                <div key={listing.id} className="listing-wrapper">
                  <ListingCardGrid btnConfig={{ text: 'BUY', action: () => null }} key={listing.id} listing={listing} />
                </div>
              ) : (
                <div key={listing.id+"list"} className="listing-wrapper-full">
                  <ListingCardList btnConfig={{ text: 'BUY', action: () => null }} key={listing.id} listing={listing} />
                </div>
              ))
            }
          </div>
          <Assistance />
          <p className="text-xs disclaimer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus elit sed tortor feugiat eleifend. Aliquam tincidunt tellus ac nunc condimentum, vitae accumsan purus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus elit sed tortor feugiat eleifend. Aliquam tincidunt tellus ac nunc condimentum, vitae accumsan purus dignissim.
          </p>
        </div>
        <div className="w-3/12">
          <CustomerCard customerDetails={{
            name: 'John Smith',
            email: 'johnsmith@mail.com',
            phone: '0800 000 0000',
            address: '1, Streetname, Providence Street, off Admiralty Way, Lekki, Lagos',
            dob: '01/01/1994'
          }} />
          <CustomerCard>
            <div className="mb-3">
              <h4 className="text-base">Apple Iphone 11</h4>
              <p>Pro</p>
            </div>
            <div className="mb-3">
              <h4><span className="font-normal">Phone no:</span> 0800 000 0000</h4>
            </div>
          </CustomerCard>
        </div>

      </div>

    </div>
  </div>
)

export default ListingGrid