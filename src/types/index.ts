export enum Options {
  FALSE = 'False',
  TRUE = 'True',
  NULL = 'NULL',
}

export interface IResult {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string];
}

export interface IAnswer {
  questionId: string;
  answer: string;
}

export enum Sign {
  PLUS = 'Plus',
  MINUS = 'Minus',
}
