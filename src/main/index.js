import 'babel-polyfill';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reduxConfig/reducers';
import configureStore from './reduxConfig/storeConfig';

import AppContainer from './components/App/AppContainer';

const store = configureStore(reducers);

const ConnectedApp = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('app'));
