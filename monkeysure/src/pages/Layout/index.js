import React from 'react';
import Header from '../../components/Header';
import Newsletter from '../../components/NewsLetter';
import Footer from '../../components/Footer';

const Layout = ({ component }) => (
  <>
    <Header />
    <main>
      {component}
    </main>
    <Newsletter />
    <Footer />
  </>
);

export default Layout;