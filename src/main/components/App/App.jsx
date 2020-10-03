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
