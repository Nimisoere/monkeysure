import React from 'react';
import './feature.scss';
import carBackground from '../../../assets/images/Background copy 10.png';
import { Link } from 'react-router-dom';


const Feature = () => (
  <section className="feature flex">
    <div className="container mx-auto py-4 flex flex-wrap items-center justify-between">
      <div className="sm:w-4/12 w-full">
        <h4 className="text-xl font-normal sm:text-left text-center">The complete car guide</h4>
        <p className="sm:text-left text-center">The complete guide to car brand and manufactirers in Nigeria. Find out all the information you need on insurance, renting and purchasing your dream car in this guide</p>
        <div className="w-full flex sm:justify-start justify-center">
          <Link className="flex mt-8" to="/cars">
            <button className="btn border-secondary">Explore</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center sm:mt-0 mt-4">
        <img src={carBackground} width="500" alt="car" />
      </div>
    </div>
  </section>
);

export default Feature;