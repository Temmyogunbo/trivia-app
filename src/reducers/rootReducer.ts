import { combineReducers } from 'redux';
import { resultsReducer } from './resultsReducer';
import { answersReducer } from './answersReducer';

// import { IInitialState } from '../types';

const appReducer = combineReducers({
  resultsReducer,
  answersReducer,
});

const initialState = {
  resultReducer: { results: [] },
  answersReducer: { answers: [] },
};
/**
 * Handles all state
 *
 * @param {object} state - application state
 * @param {object} action - contains what to do
 *
 * @returns {object} new state
 */
export const rootReducer = (
  state: Readonly<any> = initialState,
  action: any,
  //@ts-ignore
) => appReducer(state, action);
