import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import AppContainer from '../components/App/AppContainer';

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
