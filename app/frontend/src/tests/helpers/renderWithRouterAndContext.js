import React from 'react';
import { render } from '@testing-library/react';
import {  BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Provider from '../../context/Provider';

function renderWithRouterAndContext(component, path = '/') {
  const history = createMemoryHistory({ initialEntries: [path] });

  return {
    ...render(
      <Provider>
        <BrowserRouter history={ history }>
          {component}
        </BrowserRouter>
      </Provider>,
    ),
    history,
  };
}

export default renderWithRouterAndContext;
