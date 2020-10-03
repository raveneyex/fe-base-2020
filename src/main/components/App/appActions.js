import { noPayloadActionCreator } from '../../utils/reduxUtils';

// action types
export const APP_CHANGE_MESSAGE = 'APP_CHANGE_MESSAGE';
export const APP_RESET_MESSAGE = 'APP_RESET_MESSAGE';

// action creators
export const changeMessage = noPayloadActionCreator(APP_CHANGE_MESSAGE);
export const resetMessage = noPayloadActionCreator(APP_RESET_MESSAGE);
