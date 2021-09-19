import { GET_RESULTS, RESULTS_RECEIVED, RESULTS_FAILED } from '../constants';

export const resultsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_RESULTS:
      return { ...state, loading: true, hasError: false };
    case RESULTS_RECEIVED:
      return {
        ...state,
        results: action.results,
        loading: false,
        hasError: false,
      };
    case RESULTS_FAILED:
      return {
        ...state,
        errorMessage: action.message,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
