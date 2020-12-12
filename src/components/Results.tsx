/** @jsx jsx */
import { Dispatch, Fragment, useMemo } from 'react';
import { jsx, Button, Card, Label, Radio, Divider } from 'theme-ui';

import { Action, State } from '../pages/index';
import { questions } from '../common/questions';

const resultToEmoji = (res: number) => {
  if (res === questions.length) {
    return 'Wtf ⁉️ You got everything right. Are you okay?';
  }
  if (res === 0) {
    return 'Yay! Looks like you\'re free from JS bullshit! 🎉🎉🎉';
  }
  if (res < 4) {
    return 'Yay! Looks like you\'re almost free from JS bullshit! 🎉🎉🎉';
  }
  if (res >= 4 && res < 8) {
    return 'Not bad! Few more point and I\'d be worried about you 🥴';
  }
  if (res >= 8 && res < 16) {
    return 'Well, you\'re quite experienced in JavaScript\'s quirks. I\'m so sorry. 🥲';
  }
  return '';
};

type ResultsProps = {
  dispatch: Dispatch<Action>;
  answers: State['answers'];
};

export const Results = ({ answers, dispatch }: ResultsProps) => {
  const correctAnswers = useMemo(() => {
    return questions.reduce((acc, q) => {
      if (q.answers.find(a => a.correct)?.id === answers[q.id]) {
        return (acc += 1);
      }
      return acc;
    }, 0);
  }, [answers]);

  return (
    <Card>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: ['column', 'row'],
          width: '100%',
          pb: 2,
        }}
      >
        <h3>
          Your score: {correctAnswers} / {questions.length}{' '}
        </h3>
        <div
          sx={{
            display: 'flex',
            a: {
              m: '5px !important',
              color: 'background',
              border: 'none',
              margin: 0,
              borderRadius: 0,
              '::before': {
                content: 'none !important',
              },
            },
          }}
        >
          <a
            href={`https://twitter.com/intent/tweet/?text=I%20got%20${correctAnswers}%2F${questions.length}%20correct%20answers%20in%20wtf%3F!%20JavaScript%20Quiz%20by%20%40aleksandrasays!%20%0ATry%20it%20out%20https%3A%2F%2Fwtf-js-quiz.netlify.com&amp;url=`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              sx={{
                mr: 3,
              }}
              onClick={() => dispatch({ type: 'go-to-prev-question' })}
            >
              Tweet
            </Button>
          </a>
          <Button onClick={() => dispatch({ type: 'start-over' })}>
            Start over
          </Button>
        </div>
      </div>
      <div sx={{ pb: 2 }}>{resultToEmoji(correctAnswers)}</div>
      <Divider />
      <h3>Answers</h3>
      {questions.map(question => (
        <Fragment key={question.id}>
          {question.content}
          {question.answers.map(a => (
            <Label
              key={a.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                py: '2px',
                boxShadow: a.correct ? '0px 0px 0px 2px green' : 'unset',
              }}
            >
              <Radio
                name={a.answer}
                value={a.answer}
                checked={answers[question.id] === a.id}
                disabled
              />
              {a.answer}
            </Label>
          ))}
          <Label
            sx={{ display: 'flex', alignItems: 'center', p: 1, py: '2px' }}
          >
            <Radio
              name={`${question.id}-wtf`}
              value={`${question.id}-wtf`}
              checked={
                answers[question.id] === -1 ||
                answers[question.id] === undefined
              }
              disabled
            />
            Wtf?! I don&apos;t know
          </Label>
          <Divider />
        </Fragment>
      ))}
      <a role="button" onClick={() => window.scrollTo(0, 0)} sx={{ mt: 2 }}>
        Scroll to the top
      </a>
    </Card>
  );
};
