import React from 'react';
import './health-insurance.scss';
// import { inputs } from './constants';
import { useHistory } from "react-router-dom";
// import travelBackground from '../../../../assets/images/travel.png';
// import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';
import HealthForm from '../HealthForm';

const CarBanner = ({ compare }) => {
  const history = useHistory();

  return (
    <section className="health-banner flex flex-wrap">

      {/*       <div className="container mx-auto py-12 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Compare health insurance quotes</p>
                  <p className="font-light text-base animate__animated animate__backInLeft animate__delay-3s">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Health Insurance</p>
                    <p className="font-light text-5xl animate__animated animate__backInLeft">made easy</p>
                  </>
                )
            }

          </div>
        </div>
        <div className="sm:flex hidden justify-end items-center animate__animated animate__backInRight">
          <img src={travelBackground} className="h-64" alt="health" />
        </div>
      </div>
      <div className="health-widget animate__animated animate__slideInUp">
        <h4 className="mb-4 text-lg font-light">Search below for Health Insurance Quote</h4>
        <FormGroup className="widget-form" inputs={inputs} actionText="Search" action={() => history.push(compare ? '/health/compare-quotes' : '/health/insurance-form')} />
      </div>
     */}
     <HealthForm action={() => history.push(compare ? '/health/compare-quotes' : '/health/insurance-form')} />
    </section>
  )
};

export default CarBanner;