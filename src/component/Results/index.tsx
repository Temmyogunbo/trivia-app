import { IResult, IAnswer, Sign } from '../../types';
import { SignIcon } from '../common/SignIcon';
import { questionScoredRight } from '../../utils';
import { Question } from '../Question';

export const Results = ({
  results,
  answers,
}: {
  results: IResult[];
  answers: IAnswer[];
}) => (
  <ul>
    {results.map((result, index) => (
      <li key={index} className="flex item-start p-4">
        {questionScoredRight(result.question)(results, answers) ? (
          <SignIcon sign={Sign.PLUS} />
        ) : (
          <SignIcon sign={Sign.MINUS} />
        )}
        <div className="text-gray-500  ml-4 text-xl">
          <Question question={result.question} />
        </div>
      </li>
    ))}
  </ul>
);
