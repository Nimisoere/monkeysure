import React from 'react';
import { menu } from '../Footer/constants';
import './style.scss';

const Footer = () => (
  <footer className="flex items-center">
    <div className="container mx-auto flex justify-between">
      <div className="flex-col w-full justify-between">
        <div className="flex py-8">
          {
            menu.map((item, index) => (
              <div className="mr-6" key={index}>{item.text}</div>
            ))
          }
        </div>
        <hr />
        <div className="flex py-8 pb-10 justify-between">
          <div className="">&copy; 2020 Monkeysure. All Rights Reserved</div>
          <div className="flex">
            {
              menu.map((item, index) => (
                <div className="mr-6" key={index}>{item.text}</div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;