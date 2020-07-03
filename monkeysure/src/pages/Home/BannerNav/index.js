import React, { useState } from 'react';
import './banner.scss';
import { menu, more_menu } from './constants';
import { Link } from 'react-router-dom';

const BannerNav = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="flex">
      <div className="container mx-auto py-4 flex flex-wrap items-center">
        <div className="flex p-3 bg-primary banner-nav w-full justify-center">
          <div className="flex justify-start w-full">
            {
              menu.map((item, index) => (
                <Link to={item.link} className="flex items-center flex-wrap justify-center banner-links" key={index}>
                  <img className="mr-2 h-6" src={item.icon} alt={item.text} />
                  {item.text}
                </Link>
              ))
            }
            <button onClick={() =>setShowMore(!showMore)} className="flex more-link items-center flex-wrap justify-center banner-links" >{ showMore ? 'Less' : 'More' }</button>
          </div>
        </div>
        {
          showMore && <div className="flex p-3 bg-primary more banner-nav w-full justify-center">
            <div className="flex justify-start w-full">
              {
                more_menu.map((item, index) => (
                  <Link to={item.link} className="flex items-center flex-wrap justify-center banner-links" key={index}>
                    <img className="mr-2 h-6" src={item.icon} alt={item.text} />
                    {item.text}
                  </Link>
                ))
              }
            </div>
          </div>
        }

      </div>
    </section>
  )
};

export default BannerNav;