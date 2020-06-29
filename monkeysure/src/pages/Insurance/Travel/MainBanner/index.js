import React from 'react';
import './travel-insurance.scss';
import { inputs } from './constants';
import { useHistory } from "react-router-dom";
import travelBackground from '../../../../assets/images/travel.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const CarBanner = ({ compare }) => {
  const history = useHistory();

  return (
    <section className="travel-banner flex">
      <div className="container mx-auto py-12 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Compare phone insurance quotes</p>
                  <p className="font-light text-base animate__animated animate__backInLeft animate__delay-3s">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Travel Insurance</p>
                    <p className="font-light text-5xl animate__animated animate__backInLeft">made easy</p>
                  </>
                )
            }

          </div>
        </div>
        <div className="flex justify-end items-center animate__animated animate__backInRight">
          <img src={travelBackground} className="h-64" alt="car" />
        </div>
      </div>
      <div className="car-widget animate__animated animate__slideInUp">
        <h4 className="mb-4 text-lg font-light">Search below for Auto Insurance Quote</h4>
        <FormGroup inputs={inputs} actionText="Search" action={() => history.push(compare ? '/travel/compare-quotes' : '/travel/insurance-form')} />
      </div>
    </section>
  )
};

export default CarBanner;