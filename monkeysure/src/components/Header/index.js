import React from 'react';
import './style.scss';
import { menu } from './constants';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/monkeysure-logo-horizontal.png';
import searchIcon from '../../assets/images/search.png';

const Header = () => (
  <header className="flex header items-stretch">
    <div className="container mx-auto items-stretch flex flex-wrap justify-between">
      <div className="">
        <Link to="/">
          <img src={logo} className="h-16" alt="logo" />
        </Link>
      </div>
      <button class="flex items-center sm:hidden px-3 py-2">
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
      <div className="sm:flex hidden sm:flex-wrap sm:w-auto w-full sm:justify-between justify-start sm:items-stretch">
        <div className="flex flex-wrap sm:w-auto w-full  sm:justify-between justify-start ">
          {
            menu.map((item, index) => (
              <Link to={item.link} className="sm:mr-6 py-2 sm:py-0 sm:w-auto w-full border-nav text-base" key={index}>{item.text}</Link>
            ))
          }
        </div>
        <div className="mr-6 sm:py-0 py-2 sm:self-center sm:w-auto w-full "><span className="account-menu">Account</span></div>
        <div className="mr-6 sm:py-0 py-2 sm:self-center sm:w-auto w-full "><img src={searchIcon} className="h-5" alt="logo" /></div>
      </div>
    </div>
  </header>
);

export default Header;