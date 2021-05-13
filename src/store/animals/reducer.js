import {
  ANIMALS_FETCHING,
  ANIMALS_FETCH_SUCCESS,
  ANIMALS_FETCH_ERROR,
} from './constants';

const initialState = {
  requesting: false,
  successful: false,
  data: [],
  messages: [],
  errors: [],
};

const reducer = function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case ANIMALS_FETCHING:
      return {
        requesting: true,
        successful: false,
        data: [],
        messages: [{
          body: 'Animals being fetched',
          time: new Date(),
        }],
        errors: [],
        };
    case ANIMALS_FETCH_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        data: action.animals,
        messages: [{
          body: 'Animals fetched',
          time: new Date(),
        }],
        errors: [],
      };
    case ANIMALS_FETCH_ERROR:
      return {
        requesting: false,
        successful: false,
        messages: [],
        errors: state.animals.errors.concat([{
          body: action.errors.toString(),
          time: new Date(),
        }]),
      };
    default:
      return state;
  }
};

export default reducer;
