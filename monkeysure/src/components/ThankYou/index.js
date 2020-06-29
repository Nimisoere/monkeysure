import React from 'react';
import './thankyou.scss';
import ConfirmationCard from '../Cards/ConfirmationCard';
import insurancelogo from '../../assets/images/CHI-logo.png';

const ThankYou = () => (
  <div className="thankyou">
    <div className="container mx-auto">
      <div className="flex py-8 items-center flex-wrap w-full justify-between">
        <div className="sm:w-8/12 mb-2 w-full">
          <h4 className="text-5xl mb-6 font-normal color-primary">Thank you</h4>
          <h5 className="text-xl mb-4 font-light">You’ve successfuly completed the insurance process.</h5>
          <p className="text-base font-light">Your quote has been sent to <span className="font-normal">Consolidated Halmark Insurance </span> and one of their highly qualified consultants will contact you shortly to confirm your premium.
</p>
        </div>
        <div className="sm:w-4/12 w-full mb-2 flex justify-end">
          <ConfirmationCard
            tag="Best offer"
            company="Consolidated Hallmark Insurance"
            logo={insurancelogo}
            price="N00,000"
          />
        </div>
      </div>
    </div>
  </div>
)

export default ThankYou;