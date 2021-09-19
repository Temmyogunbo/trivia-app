import { IResult, IAnswer } from '../../types';
import { getResults } from '../../selectors/results';
import { getAnswers } from '../../selectors/answers';
import { clearAnswers } from '../../actions';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const useResults = () => {
  const results: IResult[] = useSelector(getResults);
  const answers: IAnswer[] = useSelector(getAnswers);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAnswers());
    history.push('/');
  };

  useEffect(() => {
    if (answers.length === 0) return history.push('/');
  }, [answers]);

  return { models: { results, answers }, operations: { handleClick } };
};
