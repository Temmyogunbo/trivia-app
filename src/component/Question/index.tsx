import { IResult } from '../../types';
import React from 'react';

export const Question: React.FunctionComponent<Pick<IResult, 'question'>> = ({
  question,
}) => (
  <p
    role="main"
    className="break-words"
    dangerouslySetInnerHTML={{ __html: question }}
  />
);
