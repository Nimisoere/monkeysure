import React from 'react';
import './style.scss';
import { menu, inputs } from './constants';
import FormGroup from '../Shared/FormControls/Formgroup/FormGroup';
import { Link } from 'react-router-dom';

const Newsletter = () => (
  <section className="wrapper-newsletter flex items-center">
    <div className="container mx-auto py-4 flex items-center justify-between">
      <div className="flex">
        <div>
          <h4 className="text-lg font-medium">Subscribe to our newsletter</h4>
          <p className="font-light">Get the latest offers, news and updates</p>
        </div>
        <div className="flex px-8 items-center">
          <FormGroup inputs={inputs} actionText="Subscribe" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between">
          {
            menu.map((item, index) => (
              <Link to={item.link} className="mr-6" key={index}>
                <span className={`social-icons fa ${item.text}`} key={index} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;