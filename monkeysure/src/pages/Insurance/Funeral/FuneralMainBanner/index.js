import React from 'react';
import './funeral-insurance.scss';
import { inputs } from './constants';
import { useHistory } from "react-router-dom";
import funeralBackground from '../../../../assets/images/funeral-banner.png';
import FormGroup from '../../../../components/Shared/FormControls/Formgroup/FormGroup';

const FuneralBanner = ({ compare }) => {
  const history = useHistory();
  return (
    <section className="funeral-banner flex">
      <div className="container mx-auto py-20 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary">Compare funeral quotes</p>
                  <p className="font-light text-base">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-4xl color-primary">Funeral Insurance</p>
                    <p className="font-light text-4xl">quotes made easy</p>
                  </>
                )
            }
            <div className="funeral-widget mt-4">
              <h4 className="mb-1 text-base font-light">Get free funeral quote, select cover cost</h4>
              <FormGroup inputs={inputs} actionText="Continue" action={() => history.push(compare ? '/funeral/compare-quotes' : '/funeral/insurance-form')} />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <img src={funeralBackground} className="h-48" alt="tombstone" />
        </div>
      </div>

    </section>
  )
};

export default FuneralBanner;