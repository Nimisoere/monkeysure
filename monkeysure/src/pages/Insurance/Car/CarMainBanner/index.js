import React from 'react';
import './car-insurance.scss';
import { inputs } from './constants';
import { useHistory } from "react-router-dom";
import carBackground from '../../../../assets/images/mercedes.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const CarBanner = ({ compare }) => {
  const history = useHistory();

  return (
    <section className="car-banner flex">
      <div className="container mx-auto py-20 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Compare car quotes</p>
                  <p className="font-light text-base animate__animated animate__backInLeft">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Car insurance quotes</p>
                    <p className="font-light text-5xl animate__animated animate__backInLeft">in 2 simple steps</p>
                  </>
                )
            }
          </div>
        </div>
        <div className="flex justify-end items-center animate__animated animate__backInRight">
          <img src={carBackground} className="h-48" alt="car" />
        </div>
      </div>
      <div className="car-widget animate__animated animate__slideInUp">
        <h4 className="mb-4 text-lg font-light">Search below for Auto Insurance Quote</h4>
        <FormGroup inputs={inputs} actionText="Search" action={() => history.push(compare ? '/cars/compare-quotes' : '/cars/insurance-form')} />
      </div>
    </section>
  )
};

export default CarBanner;