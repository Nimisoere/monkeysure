import React from 'react';
import './guide.scss';

const Guide = () => (
  <section className="guide mb-12 flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">A quick guide to car insurance</h4>
        <p className="font-light">Before you proceed, the following info can help make an informed decision</p>
      </div>
      <div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">What is Comprehensive Car Insurace?</h4>
            <p className="mb-2">Comprehensive Car Insurance provides cover for just about any form of financial loss related to your vehicle.</p>
            <p>Provides cover for damage caused to another person and their property if you are responsible for an accident.</p>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">What is Third Party Car Insurace?</h4>
            <p className="mb-2">Third party fire and theft Car Insurance provides cover for damage caused to another person and their property if you are responsible for an accident.</p>
            <p>Covers you if your car is stolen or damaged in the event of a hijacking, theft or fir</p>
          </div>
        </div>
        <div className="guide-row">
          <div className="guide-div">
            <h4 className="text-lg font-normal">What is third party only cover?</h4>
            <p className="mb-2">What is third party only cover?Third party only Car Insurance Covers the damage caused to another person and their property if you are responsible for an accident.</p>
            <p>Does not provide cover if your vehicle is damaged or stolen.</p>
          </div>
          <div className="guide-div">
            <h4 className="text-lg font-normal">How do I get a quote?</h4>
            <p className="font-light">What is third party only cover?Third party only Car Insurance Covers the damage caused to another person and their property if you are responsible for an accident. Does not provide cover if your vehicle is damaged or stolen.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-secondary">
          View glossary
        </button>
      </div>
    </div>
  </section>
);

export default Guide;