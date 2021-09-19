import { IResult, IAnswer } from '../types';
import hash from 'object-hash';

export const findCorrectResults = (results: IResult[], answers: IAnswer[]) => {
  if (!results) return [];

  return results.filter((result) => {
    const passedQuestion = answers.filter(
      (answer) =>
        answer.questionId === hash(result.question) &&
        result.correct_answer === answer.answer,
    );
    if (passedQuestion.length !== 0) return result;
  });
};

export const questionScoredRight =
  (question: string) => (results: IResult[], answers: IAnswer[]) => {
    const correctResult = findCorrectResults(results, answers).filter(
      (correctResult) => correctResult.question === question,
    );
    if (correctResult.length === 0) return false;
    return true;
  };
