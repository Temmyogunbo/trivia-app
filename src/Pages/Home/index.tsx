import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/quiz');
  };

  return (
    <div className="col-span-12 row-auto bg-gray-300 p-4 md:h-screen">
      <h1 className="font-bold text-3xl px-12 mb-44 text-center">
        Welcome to the Trivia Challenge!
      </h1>
      <div className="font-medium text-2xl text-center px-12 mb-44">
        <span>You will be presented with 10 True or False questions</span>
      </div>
      <div className="font-medium text-2xl text-center px-12 mb-44">
        <span>Can you score 100%?</span>
      </div>

      <div className="font-medium text-2xl text-center px-12 mt-24">
        <button onClick={handleClick}>BEGIN</button>
      </div>
    </div>
  );
};

export default Home;
