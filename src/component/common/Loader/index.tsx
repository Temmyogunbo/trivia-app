import { FunctionComponent } from 'react';
import { FaSpinner } from 'react-icons/fa';

export const Loading: FunctionComponent = () => (
  <div className="h-1/3 flex justify-center">
    <FaSpinner className="absolute mt-36 animate-spin h-10 w-10 text-primary" />
  </div>
);
