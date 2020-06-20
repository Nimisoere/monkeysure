import React from 'react';
import './feature.scss';
import carBackground from '../../../assets/images/Background copy 10.png';
import { Link } from 'react-router-dom';


const Feature = () => (
  <section className="feature flex">
    <div className="container mx-auto py-4 flex items-center justify-between">
      <div className="w-4/12">
        <h4 className="text-xl font-normal">The complete car guide</h4>
        <p>The complete guide to car brand and manufactirers in Nigeria. Find out all the information you need on insurance, renting and purchasing your dream car in this guide</p>
        <Link className="flex mt-8" to="/">
          <button className="btn border-primary">Explore</button>
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <img src={carBackground} width="500"  alt="car" />
      </div>
    </div>
  </section>
);

export default Feature;