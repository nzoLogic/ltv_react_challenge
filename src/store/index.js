import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import RootSagas from './index-sagas';
import reducers from './reducers';
import { apiMiddleware, vegetableMiddleware } from './middleware';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */


const store = createStore(
  reducers,
  composeSetup(applyMiddleware(sagaMiddleware, apiMiddleware, vegetableMiddleware, logger)), // allows redux devtools to watch sagas
);

sagaMiddleware.run(RootSagas);

export default store;