import { all } from 'redux-saga/effects';
import watchResults from './resultsSaga';

export default function* rootSaga() {
  yield all([watchResults()]);
}
