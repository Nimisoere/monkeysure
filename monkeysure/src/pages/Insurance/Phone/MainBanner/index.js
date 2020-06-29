import React from 'react';
import './phone-insurance.scss';
import { inputs } from './constants';
import { useHistory } from "react-router-dom";
import lifeBackground from '../../../../assets/images/life-banner.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const PhoneBanner = ({ compare }) => {
  const history = useHistory();
  return (
    <section className="phone-banner flex">
      <div className="container mx-auto py-20 pb-0 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Compare phone insurance quotes</p>
                  <p className="font-light text-base animate__animated animate__backInLeft">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Phone insurance</p>
                    <p className="font-light text-5xl animate__animated animate__backInLeft">easy as you like</p>
                  </>
                )
            }
          </div>
        </div>
        <div className="flex justify-end items-center animate__animated animate__backInRight">
          <img src={lifeBackground} className="h-64" alt="car" />
        </div>
      </div>
      <div className="phone-widget animate__animated animate__slideInUp">
        <h4 className="mb-4 text-lg font-light">Get your free device Insurance Quote</h4>
        <div className="max-w-xl">
          <FormGroup inputs={inputs} actionText="Search" action={() => history.push(compare ? '/phone/compare-quotes' : '/phone/insurance-form')} />
        </div>
      </div>
    </section>
  )
};

export default PhoneBanner;