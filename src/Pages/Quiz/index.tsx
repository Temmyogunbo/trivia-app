import { Loading } from '../../component/common/Loader';
import { useQuiz } from './useQuiz';
import { Question } from '../../component/Question';
import { Choices } from '../../component/Choices';

export const Quiz = () => {
  const { models, operations } = useQuiz();
  const { result, answer, questionNumber, results, hasError, errorMessage } =
    models;
  const { setAnswer } = operations;

  if (hasError) return <div>{errorMessage}</div>;
  if (!result) return <Loading />;

  return (
    <div className="col-span-12 row-auto bg-gray-300 p-4 md:h-screen">
      <h1 className="font-bold text-xl px-4 mb-24 text-center">
        {result?.category}
      </h1>
      <div className="font-medium text-2xl text-center px-4 mb-8">
        <div className="border border-black py-36 px-8 ">
          {result && <Question question={result.question} />}
          <Choices answer={answer} setAnswer={setAnswer} />
        </div>
        <div className="font-medium text-2xl text-center mt-4">
          {questionNumber + 1} of {results.length}
        </div>
      </div>
    </div>
  );
};
