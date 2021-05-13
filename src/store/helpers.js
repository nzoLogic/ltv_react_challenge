import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '.';

export function renderMockComponent(Component, props = {}) {
  return render(
    <Provider store={ store }>
      <Component { ...props } />
    </Provider>
  )
}
