/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.scss';

import configureStore, { history } from './redux/storeConfig';
import routes from './router/routes';

const store = configureStore(/* provide initial state */);

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('app'));
