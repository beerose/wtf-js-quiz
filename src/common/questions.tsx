/** @jsx jsx */
import { Heading, jsx } from 'theme-ui';
import { Code } from '../components/Code';

export type Question = {
  id: number;
  content: React.ReactNode;
  answers: {
    id: number;
    answer: string;
    correct?: boolean;
  }[];
};
export const questions: Question[] = [
  {
    id: 0,
    content: (
      <div>
        <Heading as="h3">
          What will be the result of the following code?
        </Heading>
        <Code
          code={`
(1) === 1; // true

Number.prototype.isOne = function () {
  return this === 1;
}

(1).isOne(); // ❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'true' },
      { id: 2, answer: 'false', correct: true },
    ],
  },
];
