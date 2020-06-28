import React from 'react';
import './home-insurance.scss';
import homeBackground from '../../../../assets/images/home-insurance.png';
import { useHistory } from "react-router-dom";

const Banner = ({ compare }) => {
  const history = useHistory();
  return (
    <section className="home-banner flex">
      <div className="container mx-auto py-12 flex items-center justify-between">
        <div className=" self-start">
          <div className="banner-text">
            {
              compare ? (
                <>
                  <p className="font-light text-5xl color-primary">Compare home insurance quotes</p>
                  <p className="font-light text-base">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-5xl color-primary">Home Insurance</p>
                    <p className="font-light text-5xl">in simple steps</p>
                  </>
                )
            }
            <div className="mt-6">
              <h4 className="mb-2 text-lg font-light">Click below for Home Insurance Quotes</h4>
              <button className="btn bg-primary banner-btn" onClick={() => history.push(compare ? '/home/compare-quotes' : '/home/insurance-form')}>Get Quote</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <img src={homeBackground} className="h-56" alt="car" />
        </div>
      </div>
    </section>
  )
};

export default Banner;