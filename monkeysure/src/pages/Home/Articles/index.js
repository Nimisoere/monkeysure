import React from 'react';
import './articles.scss';
import { menu } from './constants';
import Carousel from '../../../components/Shared/Carousel';

const Articles = () => (
  <section className="articles flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Articles and News</h4>
        <p>A summary of tips, industry news and updates</p>
      </div>
      <div className="w-full py-16">
        <Carousel
          aritcleArrowClassPrev="article-slider-arrow-prev"
          aritcleArrowClassNext="article-slider-arrow-next"
          settings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  slidesToScroll: 1
                }
              }
            ]
          }}>
          {
            menu.map((item, index) => (
              <div className="mr-8 h-full max-w-xl w-48 p-1" key={index}>
                <img src={item.image} className="rounded" alt="" />
                <h4 className="text-lg mt-4 font-normal">{item.text}</h4>
                <p>{item.description}</p>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>

  </section>
);

export default Articles;