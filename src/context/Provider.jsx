import React, { useState } from 'react';
import { useMemo } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({children}) {
  const [chat, setChat] = useState([]);

  const contextValue = useMemo(() => ({
    chat,
    setChat
  }), [chat]);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;