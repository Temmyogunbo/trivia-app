export const getResultsReducer = (state: any) => state.resultsReducer;

export const getResults = (state: any) => getResultsReducer(state).results;

export const resultsHasError = (state: any) => state.resultsReducer.hasError;

export const getResultsError = (state: any) =>
  getResultsReducer(state).errorMessage;
