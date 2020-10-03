/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import AppContainer from '../components/app/AppContainer';

const routes = (
  <div className="main">
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default routes;
