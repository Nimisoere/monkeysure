import React from 'react';
import { menu } from '../Footer/constants';
import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="flex items-center">
    <div className="container mx-auto flex justify-between">
      <div className="flex-col w-full justify-between">
        <div className="flex flex-wrap py-8">
          {
            menu.map((item, index) => (
              <Link to={item.link} className="mr-6 mb-2" key={index}>{item.text}</Link>
            ))
          }
        </div>
        <hr />
        <div className="flex py-8 flex-wrap pb-10 justify-between">
          <div className="mb-2">&copy; 2020 Monkeysure. All Rights Reserved</div>
          <div className="flex flex-wrap">
            {
              menu.map((item, index) => (
                <Link to={item.link} className="mr-6 mb-2" key={index}>{item.text}</Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;