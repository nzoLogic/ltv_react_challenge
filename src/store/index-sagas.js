import { all } from 'redux-saga/effects';
import AnimalsSaga from './animals/saga';

export default function* IndexSaga() {
  yield all([ AnimalsSaga() ]);
}

