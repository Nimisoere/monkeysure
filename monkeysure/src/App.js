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
import ListingGrid from './pages/ListingGrid';
import CompareQuotesTable from './pages/CompareQuotesTable';
import InsuranceForm from './pages/InsuranceForms';
import CarList from './pages/CarList';

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
          <Route exact path="/health">
            <Layout component={<LifeInsurance />} />
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
          
          <Route exact path="/compare/cars">
            <Layout component={<CarInsurance compare />} />
          </Route>
          <Route exact path="/compare/life">
            <Layout component={<LifeInsurance compare />} />
          </Route>
          <Route exact path="/compare/home-insurance">
            <Layout component={<HomeInsurance compare />} />
          </Route>
          <Route exact path="/compare/health">
            <Layout component={<LifeInsurance compare />} />
          </Route>
          <Route exact path="/compare/phone">
            <Layout component={<PhoneInsurance compare />} />
          </Route>
          <Route exact path="/compare/travel">
            <Layout component={<TravelInsurance compare />} />
          </Route>
          <Route exact path="/compare/funeral">
            <Layout component={<FuneralInsurance compare />} />
          </Route>

          <Route exact path="/confirmation">
            <Layout component={<Confirmation />} />
          </Route>
          <Route exact path="/:category/compare-quotes">
            <Layout component={<CompareQuotes />} />
          </Route>
          <Route exact path="/listing-1">
            <Layout component={<ListingGrid type="grid" />} />
          </Route>
          <Route exact path="/listing-car">
            <Layout component={<CarList />} />
          </Route>
          <Route exact path="/listing-2">
            <Layout component={<ListingGrid type="list" />} />
          </Route>
          <Route exact path="/:category/insurance-form">
            <Layout component={<InsuranceForm />} />
          </Route>
          <Route exact path="/compare">
            <Layout component={<CompareQuotesTable />} />
          </Route>
          <Route exact path="/:category/compare">
            <Layout component={<CompareQuotesTable />} />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
