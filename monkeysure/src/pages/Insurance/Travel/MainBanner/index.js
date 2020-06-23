import React from 'react';
import './travel-insurance.scss';
import { inputs } from './constants';

import travelBackground from '../../../../assets/images/travel.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const CarBanner = () => (
  <section className="travel-banner flex">
    <div className="container mx-auto py-12 flex items-center justify-between">
      <div className=" self-start">
        <div className="banner-text">
          <p className="font-light text-5xl color-primary">Travel Insurance</p>
          <p className="font-light text-5xl">made easy</p>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img src={travelBackground} className="h-64" alt="car" />
      </div>
    </div>
    <div className="car-widget">
      <h4 className="mb-4 text-lg font-light">Search below for Auto Insurance Quote</h4>
      <FormGroup inputs={inputs} actionText="Search" />
    </div>
  </section>
);

export default CarBanner;