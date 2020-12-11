/* @jsx jsx */
import { useReducer } from 'react';
import { Button, jsx } from 'theme-ui';

import { Hero } from '../components/Hero';
import { Page } from '../components/Page';
import { Question } from '../components/Question';
import { Section } from '../components/Section';

const COUNT = 10;

type State = {
  status: 'initial' | 'quiz-in-progress' | 'quiz-finished';
  answers: { [questionId: number]: number };
  currentQuestion: number;
};

const initialState: State = {
  status: 'initial',
  answers: {},
  currentQuestion: 0,
};

type Action =
  | {
      type: 'start-quiz';
    }
  | {
      type: 'select-answer';
      questionId: number;
      answerId: number;
    }
  | {
      type: 'go-to-next-question';
    }
  | {
      type: 'go-to-prev-question';
    }
  | {
      type: 'finish-quiz';
    }
  | {
      type: 'start-over';
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'start-quiz':
      return {
        ...state,
        status: 'quiz-in-progress',
      };
    case 'go-to-next-question':
      if (state.currentQuestion + 1 >= COUNT) {
        return state;
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case 'go-to-prev-question':
      if (state.currentQuestion - 1 <= 0) {
        return state;
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      };
    case 'select-answer':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.answerId,
        },
      };
    case 'finish-quiz':
      return {
        ...state,
        status: 'quiz-finished',
      };
    case 'start-over':
      return initialState;

    default:
      return state;
  }
};

export default function IndexPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Page>
      <Section>
        <Hero />
      </Section>
      <Section sx={{ height: '100%' }}>
        <Button>Start</Button>
      </Section>
      <Section sx={{ height: '100%' }}>
        <Question
          count={5}
          question="What is the result of the following"
          answers={[{ answer: 'yes', correct: false }]}
        />
      </Section>
    </Page>
  );
}
