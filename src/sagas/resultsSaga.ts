import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '../config/env';
import { GET_RESULTS } from '../constants';
import { IResult } from '../types';
import { getResultsSuccess, getResultsFailure } from '../actions';

const getResults = () =>
  axios.get<IResult[]>(
    `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`,
  );

function* fetchResults(): any {
  try {
    const response = yield call(getResults);
    yield put(getResultsSuccess(response.data.results));
  } catch (error) {
    yield put(getResultsFailure(error.message));
  }
}
function* watchResults(): any {
  yield takeLatest(GET_RESULTS, fetchResults);
}
export default watchResults;
