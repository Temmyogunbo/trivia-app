import { useSelector } from 'react-redux';
import hash from 'object-hash';
import { useState, useEffect, useCallback } from 'react';
import { Options, IResult } from '../../types';
import {
  getResults,
  resultsHasError,
  getResultsError,
} from '../../selectors/results';
import { useDispatch } from 'react-redux';
import { getResults as getResultsAction, setAnswers } from '../../actions';
import { useHistory } from 'react-router-dom';

export const useQuiz = () => {
  const [answer, setAnswer] = useState<Options>(Options.NULL);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [result, setResult] = useState<IResult>();

  const results: IResult[] = useSelector(getResults);
  const hasError = useSelector(resultsHasError);
  const errorMessage = useSelector(getResultsError);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleResults = () => {
    if (result && answer !== Options.NULL) {
      setAnswer(Options.NULL);
      setResult(results[questionNumber + 1]);
      setQuestionNumber(questionNumber + 1);
      dispatch(setAnswers([{ questionId: hash(result?.question), answer }]));
    }

    if (questionNumber + 1 === results?.length) {
      return history.push('/results');
    }
  };

  const handleResultsCallback = useCallback(handleResults, [answer])

  useEffect(() => {
    if (results) {
      setTimeout(() => handleResultsCallback(), 1000);
    }
    return () => clearTimeout();
  }, [answer]);

  useEffect(() => {
    dispatch(getResultsAction());
  }, []);

  useEffect(() => {
    if (results && results.length !== 0) {
      setResult(results[questionNumber]);
    }
  }, [questionNumber]);

  return {
    models: { answer, questionNumber, result, results, hasError, errorMessage },
    operations: { setAnswer },
  };
};
