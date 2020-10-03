import { combineReducers } from 'redux';
import appReducer from '../components/App/appReducer';

export default combineReducers({
  app: appReducer
});
