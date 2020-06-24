import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './app.scss';
import CarInsurance from './pages/Insurance/Car';
import LifeInsurance from './pages/Insurance/Life';
import HomeInsurance from './pages/Insurance/HomeInsurance';
import PhoneInsurance from './pages/Insurance/Phone';
import TravelInsurance from './pages/Insurance/Travel';
import FuneralInsurance from './pages/Insurance/Funeral';
import Confirmation from './pages/Confirmation';
import CompareQuotes from './pages/CompareQuotes';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Layout component={<Home />} />
          </Route>
          <Route exact path="/cars">
            <Layout component={<CarInsurance />} />
          </Route>
          <Route exact path="/life">
            <Layout component={<LifeInsurance />} />
          </Route>
          <Route exact path="/home-insurance">
            <Layout component={<HomeInsurance />} />
          </Route>
          <Route exact path="/phone">
            <Layout component={<PhoneInsurance />} />
          </Route>
          <Route exact path="/travel">
            <Layout component={<TravelInsurance />} />
          </Route>
          <Route exact path="/funeral">
            <Layout component={<FuneralInsurance />} />
          </Route>
          <Route exact path="/confirmation">
            <Layout component={<Confirmation />} />
          </Route>
          <Route exact path="/compare-select">
            <Layout component={<CompareQuotes />} />
          </Route>
          <Route exact path="/compare">
            <Layout component={<Confirmation />} />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
