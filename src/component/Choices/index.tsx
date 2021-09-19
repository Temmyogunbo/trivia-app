import { CheckBox } from '../common/CheckBox';
import { Options } from '../../types';

import React from 'react';

export const Choices: React.FunctionComponent<{
  answer: Options;
  setAnswer: React.Dispatch<React.SetStateAction<Options>>;
}> = ({ answer, setAnswer }) => (
  <div className="mt-8">
    <div
      className="relative cursor-pointer"
      onClick={() => setAnswer(Options.TRUE)}
    >
      <CheckBox checked={answer === Options.TRUE} />
      <span className="absolute  bottom-1 left-12">True</span>
    </div>

    <div
      role="button"
      className="relative cursor-pointer focus:outline-none"
      onClick={() => setAnswer(Options.FALSE)}
    >
      <CheckBox checked={answer === Options.FALSE} />
      <span className="absolute  bottom-1 left-12">False</span>
    </div>
  </div>
);
