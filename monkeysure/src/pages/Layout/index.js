import  React from 'react';
import Header from '../../components/Header';
import Newsletter from '../../components/NewsLetter';
import Footer from '../../components/Footer';

const Layout = ({component}) => (
    <>
      <Header />
        {component}
      <Newsletter />
      <Footer />
    </>
);

export default Layout;