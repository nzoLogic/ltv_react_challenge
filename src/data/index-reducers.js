import { combineReducers } from 'redux';

import animals from './animals/reducer';
import vegetableReducer from './vegetables/reducer';

export default combineReducers({
  animals,
  vegetable: vegetableReducer
});

