import React from 'react';
import './style.scss';
import { menu } from './constants';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/monkeysure-logo-horizontal.png';
import searchIcon from '../../assets/images/search.png';

const Header = () => (
  <header className="flex header items-stretch">
    <div className="container mx-auto items-stretch flex justify-between">
      <div className="">
        <Link to="/">
          <img src={logo} className="h-16" alt="logo" />
        </Link>
      </div>
      <div className="flex justify-between items-stretch">
        <div className="flex justify-between">
          {
            menu.map((item, index) => (
              <Link to={item.link} className="mr-6 border-nav text-base" key={index}>{item.text}</Link>
            ))
          }
        </div>
        <div className="mr-6 self-center"><span className="account-menu">Account</span></div>
        <div className="mr-6 self-center"><img src={searchIcon} className="h-5" alt="logo" /></div>
      </div>
    </div>
  </header>
);

export default Header;