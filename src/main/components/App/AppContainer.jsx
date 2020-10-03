/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

import { connect } from 'react-redux';

import App from './App';
import { changeMessage, resetMessage } from './appActions';

const mapStateToProps = ({ app }) => ({
  ...app
});

const mapDispatchToProps = {
  changeMessage,
  resetMessage
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
