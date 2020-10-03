import { createReducerFromActionMap } from '../../utils/reduxUtils';
import { APP_CHANGE_MESSAGE, APP_RESET_MESSAGE } from './appActions';

// Freeze initialState to ensure immutability
const initialState = Object.freeze({
  message: 'hello world'
});

const changeMessage = (state) => ({
  ...state,
  message: 'new message'
});

const resetMessage = () => ({
  ...initialState
});

// Map of action-types: reducer-functions
const reducerActionMap = {
  [APP_CHANGE_MESSAGE]: changeMessage,
  [APP_RESET_MESSAGE]: resetMessage
};

export default createReducerFromActionMap(reducerActionMap, initialState);
