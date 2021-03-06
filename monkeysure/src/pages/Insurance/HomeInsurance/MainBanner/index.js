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
                  <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Compare home insurance quotes</p>
                  <p className="font-light text-base animate__animated animate__backInLeft">You can add up to 3 quotes side by side</p>
                </>
              ) : (
                  <>
                    <p className="font-light text-5xl color-primary animate__animated animate__backInLeft">Home Insurance</p>
                    <p className="font-light text-5xl animate__animated animate__backInLeft">in simple steps</p>
                  </>
                )
            }
            <div className="mt-6 animate__animated animate__backInUp">
              <h4 className="mb-2 text-lg font-light">Click below for Home Insurance Quotes</h4>
              <button className="btn bg-primary banner-btn" onClick={() => history.push(compare ? '/home/compare-quotes' : '/home/insurance-form')}>Get Quote</button>
            </div>
          </div>
        </div>
        <div className="sm:flex hidden justify-end items-center animate__animated animate__backInRight">
          <img src={homeBackground} className="h-56" alt="car" />
        </div>
      </div>
    </section>
  )
};

export default Banner;