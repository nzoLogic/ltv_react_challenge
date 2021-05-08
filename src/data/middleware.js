import { apiError, apiRequest, apiSuccess, API_REQUEST } from "../api/actions";
import { FETCH_VEGETABLES } from "./vegetables/actions";


export const vegetableMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === FETCH_VEGETABLES) {
    dispatch(apiRequest(null, 'GET', '/api/v1/categories.json?category=vegetables', '[Vegetables]'))
  }
}

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    const { entity, method, url } = action.payload.meta;

    fetch(url, { method })
      .then(res => res.json())
      .then(data => apiSuccess(data, entity))
      .catch(error => apiError(error, entity))
  }
}