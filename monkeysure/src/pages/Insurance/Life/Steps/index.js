import React from 'react';
import './steps.scss';

const Steps = () => (
  <section className="life-steps flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Why do you need Life Insurance</h4>
        <p className="font-light">There and more are the benefits you stand to gain from a life insurance cover</p>
      </div>
      <div className="w-full py-8 sm:flex-no-wrap flex-wrap flex justify-center">
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Life Insurance for Parents</h4>
            <p className="font-light">Life Insurance can help your family continue their standard of living</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Life Insurance Covers</h4>
            <p className="font-light">Life Insurance can help pay bond or rental costs</p>
          </div>
        </div>
        <div className="steps-div">
          <div className="">
            <h4 className="text-lg font-normal">Life Insurance after Death</h4>
            <p className="font-light">Life Cover can pay for funeral costs, and repay outstanding debts</p>
          </div>
        </div>
      </div>
      <div className="flex mb-8 justify-center">
        <button className="btn bg-primary">
          Get a Quote
        </button>
      </div>
    </div>

  </section>
);

export default Steps;