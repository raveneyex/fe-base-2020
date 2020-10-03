/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

import React from 'react';
import * as PropTypes from 'prop-types';

export default function App(props) {
  const { message, changeMessage, resetMessage } = props;

  return (
    <>
      <div>{ message }</div>
      <button onClick={() => changeMessage()}>Change Message</button>
      <button onClick={() => resetMessage()}>Reset Message</button>
    </>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired
};
