import React from 'react';
import { upsellData } from './constants';
import './upsell.scss';
import { Link } from 'react-router-dom';

const Upsell = () => (
  <div className="upsell mt-16">
    <div className="container mx-auto">
      <h4 className="text-base">Here are other top selling Monkeysure products we’ve selected for you</h4>
      <div className="flex flex-wrap sm:justify-between justify-center upsell-cards">
        {
          upsellData.map((card, index) => (
            <div className="upsell-card mb-4" key={index}>
              <div className="image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="details">
                <div className="title">
                  {card.title}
                </div>
                <div className="description mb-6">
                  {card.description}
                </div>
                <Link to={card.link}>
                  <button className="btn button w-full">Select</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

export default Upsell;