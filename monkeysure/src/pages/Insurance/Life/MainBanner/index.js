import React from 'react';
import './life-insurance.scss';
import { inputs } from './constants';
import { useHistory } from "react-router-dom";
import lifeBackground from '../../../../assets/images/life-banner.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const FuneralBanner = ({ compare }) => {
  const history = useHistory();
  return (
    <section className="life-banner flex">
      <div className="container mx-auto py-20 pb-0 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Compare life insurance quotes</p>
                  <p className="font-light text-base animate__animated animate__backInLeft">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-4xl color-primary animate__animated animate__backInLeft">Life Insurance</p>
                    <p className="font-light text-4xl animate__animated animate__backInLeft">made easy</p>
                  </>
                )
            }
            <div className="funeral-widget mt-4 animate__animated animate__backInUp">
              <h4 className="mb-1 text-base font-light">Get free life insurance quote here</h4>
              <FormGroup inputs={inputs} actionText="Continue" action={() => history.push(compare ? '/life/compare-quotes' : '/life/insurance-form')} />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center animate__animated animate__backInRight">
          <img src={lifeBackground} className="banner-img" alt="tombstone" />
        </div>
      </div>

    </section>
  )
};

export default FuneralBanner;