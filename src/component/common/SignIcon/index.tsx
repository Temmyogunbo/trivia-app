import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { Sign } from '../../../types';

export const SignIcon = ({ sign }: { sign: Sign }) => {
  return (
    <>
      {sign === Sign.PLUS ? (
        <PlusIcon className="h-6 w-6  text-gray-500" />
      ) : (
        <MinusIcon className="h-6 w-6  text-gray-500" />
      )}
    </>
  );
};
