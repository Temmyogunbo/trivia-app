import {
  GET_RESULTS,
  RESULTS_RECEIVED,
  RESULTS_FAILED,
  SET_ANSWERS,
  CLEAR_ANSWERS,
} from '../constants';
import { IAnswer, IResult } from '../types';

export const getResults = () => ({
  type: GET_RESULTS,
});

export const getResultsSuccess = (results: IResult[]) => ({
  type: RESULTS_RECEIVED,
  results,
});

export const getResultsFailure = (message: string) => ({
  type: RESULTS_FAILED,
  message,
});

export const setAnswers = (answers: IAnswer[]) => ({
  type: SET_ANSWERS,
  answers,
});

export const clearAnswers = () => ({
  type: CLEAR_ANSWERS,
});
