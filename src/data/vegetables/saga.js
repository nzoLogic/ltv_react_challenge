import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import {
  AnimalsSuccess,
  AnimalsError,
} from './actions';

import {
  ANIMALS_FETCHING,
} from './constants';

function animalsFetchApi(categoryType) {
  return fetch(`/api/v1/categories.json?category=${categoryType}`, {

    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => { throw error; });
}

export function* AnimalsFetchFlow(action, api) {
  if (!api) {
    api = animalsFetchApi;
  }

  const categoryType = 'animals';
  try {
    const animalsResponse = yield call(api, categoryType);
    yield put(AnimalsSuccess(animalsResponse[categoryType], categoryType));
  } catch (errors) {
    yield put(AnimalsError(errors));
  }
}

function* animalsWatcher() {
  yield takeLatest(ANIMALS_FETCHING, AnimalsFetchFlow);
}

export default animalsWatcher;

