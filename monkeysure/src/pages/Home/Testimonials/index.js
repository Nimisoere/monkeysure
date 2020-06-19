import React from 'react';
import './testimonials.scss';
import Card from '../../../components/Shared/Cards';
import { menu } from './constants';
import Carousel from '../../../components/Shared/Carousel';

const Testimonials = () => (
  <section className="testimonials flex">
    <div className="container thick-border mx-auto py-4">
      <div className="w-full text-center">
        <h4 className="text-xl font-normal">Our growing community of satisfied customer</h4>
        <p>Take our word for it, but see also what others have to say</p>
      </div>
      <div className="w-full py-4">
        <Carousel settings={{
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
        }}>
          {
            menu.map((item, index) => (
              <Card key={index} classes="mr-6 my-5">
                <div className="testimonial-card flex items-start justify-between flex-col h-full">
                  <h4 className="text-lg font-medium">{item.text}</h4>
                  <p>{item.description}</p>
                  <hr className="w-full" />
                  <div className="flex mt-2 w-full">
                    <img className="rounded-full w-8 h-8 mr-2" src="https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard" alt="avatar" />
                    <div>
                      <h5 className="font-medium">Kenneth Yanga</h5>
                      <p className="italic"> Lagos</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          }
        </Carousel>
      </div>
    </div>

  </section>
);

export default Testimonials;