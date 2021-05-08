import { apiError, apiRequest, apiSuccess, API_REQUEST } from "../api/actions";
import { FETCH_VEGETABLES } from "./vegetables/actions";

/**
 * 
 * This is middleware meant to manage and route actions from our 
 * front end ui pieces towards our core functionality. This creates 
 * a nice layer and separation of concern between application 
 * specific logic, UI logic, and business logic (various api calls)
 * 
 */
export const vegetableMiddleware = ({ dispatch }) => next => action => 
{
  // always invoke next(action) first because we are using redux-logger
  next(action);

  /**
   * below we are checking for vegetable specific actions.
   * since we have determined that FETCH_VEGETABLES requires some
   * external resources, an api request in this case, we can route
   * this action to where it needs to go.
   * 
   * This way our UI specific features don't know any of the details 
   * about 'how' or 'what'. They are only concerned with behaving 
   * like UI features.
   */
  if (action.type === FETCH_VEGETABLES) {
    dispatch(apiRequest(null, 'GET', '/api/v1/categories.json?category=vegetables', '[Vegetables]:'))
  }
}

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { entity, method, url } = action.payload.meta;

    fetch(url, { method })
      .then(res => res.json())
      .then(data => dispatch(apiSuccess(data, entity)))
      .catch(error => dispatch(apiError(error, entity)))
  }
}