import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './app.scss';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Layout component={<Home />} />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
