import VegetableDataList from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderMockComponent } from '../../store/helpers';

describe('VegetableDataList', () => {
  test('should render', async () => {
    renderMockComponent(VegetableDataList)
  })
})