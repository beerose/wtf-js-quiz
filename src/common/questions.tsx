/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Code } from '../components/Code';

export type Question = {
  id: number;
  content: React.ReactNode;
  answers: {
    id: number;
    answer: string;
    correct?: boolean;
  }[];
  explanation?: React.ReactNode;
};
export const questions: Question[] = [
  {
    id: 0,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
typeof NaN; // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'number', correct: true },
      { id: 2, answer: 'object' },
      { id: 3, answer: 'undefined' },
    ],
    explanation:
      'https://stackoverflow.com/questions/2801601/why-does-typeof-nan-return-number',
  },
  {
    id: 1,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
"wtf" instanceof String; // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'true' },
      { id: 2, answer: 'false', correct: true },
    ],
    explanation:
      'https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals',
  },
  {
    id: 2,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
[] == ![]; // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'true', correct: true },
      { id: 2, answer: 'false' },
    ],
    explanation:
      'https://stackoverflow.com/questions/38662231/evaluates-to-true',
  },
  {
    id: 3,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
Object.prototype.wtf = "wtf";
console.log(wtf); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'undefined' },
      { id: 2, answer: 'null' },
      { id: 3, answer: '"wtf"', correct: true },
    ],
  },
  {
    id: 4,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
const num = 02020;
console.log(num); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: '2020' },
      { id: 2, answer: '20' },
      { id: 3, answer: '0' },
      { id: 4, answer: '1040', correct: true },
    ],
  },
  {
    id: 5,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
Number.MIN_VALUE > 0; // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'true', correct: true },
      { id: 2, answer: 'false' },
    ],
  },
  {
    id: 6,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
"foo" + + "bar" // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: '"fooNaNbar"' },
      { id: 2, answer: 'NaN' },
      { id: 3, answer: 'fooNaN', correct: true },
    ],
  },
  {
    id: 7,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
(1) === 1; // true
Number.prototype.isOne = function () {
  return this === 1;
}
(1).isOne(); // ❓❓❓
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
  {
    id: 8,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
++[[]][+[]] // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: '1', correct: true },
      { id: 2, answer: '0' },
      { id: 3, answer: 'undefined' },
      { id: 4, answer: 'NaN' },
    ],
  },
  {
    id: 9,
    content: (
      <div>
        <p>What will happen after excuting the following code?</p>
        <Code
          code={`
const WTF = "constructor";
WTF[WTF][WTF]("alert('wtf')")();
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'Nothing' },
      { id: 2, answer: 'Alert "wtf"', correct: true },
      { id: 3, answer: 'console log "Alert "wtf""' },
    ],
  },
  {
    id: 10,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
5.toString(); // Uncaught SyntaxError: Invalid or unexpected token
5..toString(); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: '5' },
      { id: 2, answer: 'undefined' },
      { id: 3, answer: '"5"', correct: true },
    ],
  },
  {
    id: 11,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
parseInt(null, 24); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'null' },
      { id: 2, answer: '23', correct: true },
      { id: 3, answer: '24' },
      { id: 4, answer: '25' },
    ],
    explanation:
      'https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what',
  },
  {
    id: 12,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
Math.min() < Math.max(); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'false', correct: true },
      { id: 2, answer: 'true' },
    ],
    explanation: (
      <Code
        code={`
Math.max(); // -Infinity
Math.min(); // Infinity
`}
      />
    ),
  },
  {
    id: 13,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
parseInt('Infinity', 24); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'NaN' },
      { id: 2, answer: 'Infinity' },
      { id: 3, answer: '151176378', correct: true },
    ],
    explanation:
      'https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what',
  },
  {
    id: 14,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
[,,,].join() // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: '",,"', correct: true },
      { id: 2, answer: '",,,"' },
      { id: 3, answer: '""' },
    ],
  },
  {
    id: 15,
    content: (
      <div>
        <p>What will happen after excuting the following code?</p>
        <Code
          code={`
localStorage[0] = undefined;
if (localStorage[0]) {
  console.log('wtf');
}
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'Nothing' },
      { id: 2, answer: 'Console log "wtf"', correct: true },
      { id: 3, answer: 'Alert "wtf"' },
    ],
  },
  {
    id: 16,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
typeof document.all[0]; // object
typeof document.all; // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'object' },
      { id: 2, answer: 'undefined', correct: true },
    ],
  },
  {
    id: 17,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
const r = new RegExp('wtf', 'gi');
r.test('wtf'); // true
r.test('wtf'); // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'true' },
      { id: 2, answer: 'undefined' },
      { id: 3, answer: 'false', correct: true },
    ],
  },
  {
    id: 18,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
const a = [1,2,3];
a[-1] = "wtf";
a[-1] // ❓❓❓
a[a.indexOf(-1)] // ❓❓❓
a[a.indexOf(100)] // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'undefined, undefined, undefined' },
      { id: 2, answer: '"wtf", undefined, undefined' },
      { id: 3, answer: '"wtf", "wtf", undefined' },
      { id: 4, answer: '"wtf", "wtf", "wtf"', correct: true },
    ],
  },
  {
    id: 19,
    content: (
      <div>
        <p>What is the result of the following code?</p>
        <Code
          code={`
[] + {} // ❓❓❓
        `}
        />
      </div>
    ),
    answers: [
      { id: 0, answer: 'Error' },
      { id: 1, answer: 'undefined' },
      { id: 2, answer: '"[object Object]"', correct: true },
      { id: 3, answer: '0' },
      { id: 4, answer: 'NaN' },
    ],
  },
];
