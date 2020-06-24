import React from 'react';
import { upsellData } from './constants';
import './upsell.scss';

const Upsell = () => (
  <div className="upsell mt-16">
    <div className="container mx-auto">
      <h4 className="text-base">Here are other top selling Monkeysure products we’ve selected for you</h4>
      <div className="flex justify-between upsell-cards">
        {
          upsellData.map((card, index) => (
            <div className="upsell-card" key={index}>
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
                <button className="btn button w-full">Select</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

export default Upsell;