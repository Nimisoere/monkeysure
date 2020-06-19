import React from 'react';
import MainBanner from './MainBanner';
import BannerNav from './BannerNav';
import Services from './Services';
import ValueProposition from './ValueProposition';
import Partners from './Partners';
import Testimonials from './Testimonials';

const Home = () => (
  <>
    <MainBanner />
    <BannerNav />
    <Services />
    <ValueProposition />
    <Partners />
    <Testimonials />
  </>
);

export default Home;