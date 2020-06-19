import React from 'react';
import { menu } from '../Footer/constants';
import './style.scss';

const Footer = () => (
  <footer className="flex items-center">
    <div className="container mx-auto flex justify-between">
      <div className="flex justify-between">
        <div className="flex justify-between">
          {
            menu.map((item, index) => (
              <div className="mr-6" key={index}>{item.text}</div>
            ))
          }
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;