/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducers';

/**
 * Browser history object for connected-react-router
 */
export const history = createBrowserHistory();

/**
 * Configures and creates a redux store that uses the given reducer
 */
export default function configureStore(preloadedState) {
  const rootReducer = createRootReducer(history);
  const middlewares = [thunk, logger, routerMiddleware(history)];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middleWareEnhancer);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
