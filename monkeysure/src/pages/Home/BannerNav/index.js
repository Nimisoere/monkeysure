import React from 'react';
import './banner.scss';
import { menu } from './constants';
import { Link } from 'react-router-dom';

const BannerNav = () => (
  <section className="flex">
    <div className="container mx-auto py-4 flex items-center">
      <div className="flex p-3 bg-primary banner-nav w-full justify-center">
        <div className="flex justify-between w-full">
          {
            menu.map((item, index) => (
              <Link to={item.link} className="flex items-center flex-wrap justify-center banner-links" key={index}>
                <img className="mr-2 h-6" src={item.icon} alt={item.text} />
                {item.text}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

export default BannerNav;