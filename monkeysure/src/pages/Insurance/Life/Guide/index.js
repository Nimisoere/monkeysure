import React from 'react';
import './guide.scss';

const Guide = () => (
  <section className="life-guide mb-12 flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">A quick guide to life insurance</h4>
        <p className="font-light">Before you proceed, the following info can help make an informed decision</p>
      </div>
      <div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">Life Insurance for Parents</h4>
            <p className="font-light">Allows you to take out a Life Insurance policy for your parents, if they are financially unable to do so themselves. You can add your parents to your existing policy at any time.</p>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">Life Insurance for Children</h4>
            <p className="font-light">Life Insurance for Children is a type of Life Insurance that covers the life of a minor. The money put into this policy builds value over time and is paid out when a child unexpectedly passes away. The money is used to pay for the sudden costs of a funeral or burial.</p>
          </div>
        </div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">Joint Life Insurance</h4>
            <p className="font-light">Joint Life Insurance allows you and your partner to be covered by a single policy with the same terms and conditions. It will be paid out when one partner passes away.</p>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">Traditional Whole Life Insurance</h4>
            <p className="font-light">This is a Life Insurance policy that covers you for your entire life, or until you reach the age of 95. You pay a fixed amount into the policy that will be paid out as a lump sum to your beneficiary/ies when you pass away.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-secondary">
          View more
        </button>
      </div>
    </div>
  </section>
);

export default Guide;