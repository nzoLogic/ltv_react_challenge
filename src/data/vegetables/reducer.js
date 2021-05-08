import * as actions from './actions';

const initialState = {
  vegetables: []
}

const vegetableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_VEGETABLES:
      return {
        isFetching: true,
        ...state,
      }
    case actions.FETCH_VEGETABLES_SUCCESS:
      return {
        isFetching: false
      }
    case actions.SET_VEGETABLES:
      return {
        vegetables: action.payload
      }
    default:
      return state
  }
}

export default vegetableReducer