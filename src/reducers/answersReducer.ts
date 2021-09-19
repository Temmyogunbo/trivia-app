import { CLEAR_ANSWERS, SET_ANSWERS } from '../constants';

export const answersReducer = (state = { answers: [] }, action: any) => {
  switch (action.type) {
    case SET_ANSWERS:
      return {
        ...state,
        answers: [...action.answers, ...state.answers],
      };
    case CLEAR_ANSWERS:
      return {
        ...state,
        answers: [],
      };
    default:
      return state;
  }
};
