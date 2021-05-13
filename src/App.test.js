import { screen } from '@testing-library/react';
import { renderMockComponent } from './store/helpers';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {

  test('render app', async () => {
    renderMockComponent(App)
    screen.getByText('LTV Challenge')
  })
})

