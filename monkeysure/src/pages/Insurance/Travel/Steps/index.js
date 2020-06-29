import React from 'react';
import './steps.scss';

const Steps = () => (
  <section className="travel-steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Want to compare Travel Insurance Quotes</h4>
        <p className="font-light">Roam the world with full confidence, knowing you and your baggage are safe</p>
      </div>
      <div className="w-full sm:flex-no-wrap flex-wrap py-4 flex justify-center">
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Emergency medical care</h4>
            <p className="font-light">In case of health emergency, rest assured of mediocre care at no cost to you</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Luggage cover us now</h4>
            <p className="font-light">Insurance covers luggage in cases of theft or loss in transit or destination</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Life Insurance</h4>
            <p className="font-light">Stay protected incase of any eventuality anywhere you are in the world</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="btn bg-primary">Get a quote</button>
      </div>
    </div>

  </section>
);

export default Steps;