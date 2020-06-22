import React from 'react';
import './life-insurance.scss';
import { inputs } from './constants';

import lifeBackground from '../../../../assets/images/life-banner.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const FuneralBanner = () => (
  <section className="life-banner flex">
    <div className="container mx-auto py-20 pb-0 flex items-center justify-between">
      <div className=" self-start">
        <div className="banner-text">
          <p className="font-light text-4xl color-primary">Life Insurance</p>
          <p className="font-light text-4xl">made easy</p>
          <div className="funeral-widget mt-4">
            <h4 className="mb-1 text-base font-light">Get free life insurance quote here</h4>
            <FormGroup inputs={inputs} actionText="Continue" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img src={lifeBackground} className="banner-img" alt="tombstone" />
      </div>
    </div>

  </section>
);

export default FuneralBanner;