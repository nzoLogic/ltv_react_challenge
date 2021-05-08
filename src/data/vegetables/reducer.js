import * as actions from './actions';

const initialState = {
  vegetables: []
}

const vegetableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_VEGETABLES:
      return {
        isFetching: true
      }
    default:
      return state
  }
}

export default vegetableReducer