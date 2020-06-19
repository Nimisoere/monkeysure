import React from 'react';
import './style.scss';
import { menu } from './constants';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex items-center">
    <div className="container py-4 mx-auto flex justify-between">
      <div className="">Monkey Sure</div>
      <div className="flex justify-between">
        <div className="flex justify-between">
          {
            menu.map((item, index) => (
              <Link to={item.link} className="mr-6" key={index}>{item.text}</Link>
            ))
          }
        </div>
        <div className="mr-6">Account</div>
        <div className="mr-6">Search Icon</div>
      </div>
    </div>
  </header>
);

export default Header;