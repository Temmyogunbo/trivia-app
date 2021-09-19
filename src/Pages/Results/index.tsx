import { findCorrectResults } from '../../utils';
import { Results } from '../../component/Results';
import { useResults } from './useResults';

export const ResultsPage = () => {
  const { models, operations } = useResults();
  const { results, answers } = models;
  const { handleClick } = operations;

  return (
    <div className="col-span-12 row-auto p-4 md:h-screen">
      <h1 className="text-black font-bold text-2xl text-center px-24 mb-8">
        You scored {findCorrectResults(results, answers)?.length}/
        {results?.length}
      </h1>
      {results && <Results results={results} answers={answers} />}

      <div className="font-medium text-2xl text-center text-gray-800 px-12 mt-24 mb-4">
        <button onClick={handleClick}>PLAY AGAIN?</button>
      </div>
    </div>
  );
};
