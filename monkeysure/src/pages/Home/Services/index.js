import React from 'react';
import { Link } from 'react-router-dom';
import './services.scss';
import Card from '../../../components/Shared/Cards';
import { menu } from './constants';
import Carousel from '../../../components/Shared/Carousel';

const Services = () => (
  <section className="services flex">
    <div className="container mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Find, Compare &amp; Save!</h4>
        <p>Monkeysure lists the best deals on Insurance, travel, life and auto cover</p>
      </div>
      <div className="w-full py-4">
        <Carousel settings={{
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }}>
          {
            menu.map((item, index) => (
              <Card key={index} classes="mr-6 my-5">
                <div className="service-card flex items-center justify-between flex-col h-full">
                  <img src={item.icon} alt="car" className="inline-block my-4 h-10" />
                  <h4 className="text-lg font-medium">{item.text}</h4>
                  <p>{item.description}</p>
                  <Link to={item.link} className="mt-3 flex justify-center items-center service-btn w-full">{item.btnText}</Link>
                </div>
              </Card>
            ))
          }
        </Carousel>
      </div>
    </div>

  </section>
);

export default Services;