import React from 'react';
import { Link } from 'react-router-dom';
import './banner.scss';

import phoneIcon from '../../../assets/images/phone.png';
import carBackground from '../../../assets/images/Background copy 10.png';
import shield from '../../../assets/images/Vector Smart Object copy 3.png';

const MainBanner = () => (
  <section className="banner flex">
    <div className="container mx-auto py-24 flex items-center justify-between">
      <div>
        <div className="banner-text">
          <p className="font-light text-5xl animate__animated animate__backInLeft">Affordable</p>
          <p className="font-light  text-5xl color-primary animate__animated animate__backInLeft animate__delay-1s">car protection</p>
          <p className="font-light text-5xl animate__animated animate__backInLeft animate__delay-2s">products</p>
        </div>
        <div className="flex py-4 items-center">
          <Link to="/">
            <span className="phone-btn mr-6"><img width="20px" src={phoneIcon} alt="phone" /></span>
          </Link>
          <Link to="/cars">
            <button className="btn bg-primary">Get a Quote</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img className="animate__animated animate__backInRight" src={carBackground} width="500"  alt="car" />
        <img className="animate__animated animate__backInUp" src={shield} width="120" alt="car" />
      </div>
    </div>

  </section>
);

export default MainBanner;