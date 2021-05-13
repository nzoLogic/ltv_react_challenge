import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from './store';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App', () => {
  function renderApp(props = {}) {
    return render(
      <Provider store={ store }>
        <App { ...props } />
      </Provider>
    )
  }

  test('render app', async () => {
    renderApp()
    screen.getByText('LTV Challenge')
  })
})

