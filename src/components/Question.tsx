/** @jsx jsx */
import React, { Dispatch } from 'react';
import { jsx, Button, Card, Divider, Heading, Label, Radio } from 'theme-ui';

import { Action } from '../pages/index';
import { shuffleArray } from '../common/utils';

type QuestionProps = {
  question: {
    id: number;
    content: React.ReactNode;
    answers: {
      id: number;
      answer: string;
      correct: boolean;
    }[];
  };
  dispatch: Dispatch<Action>;
  questionIndex: number;
};

//random order of answers
export const Question = ({
  question,
  questionIndex,
  dispatch,
}: QuestionProps) => {
  return (
    <Card
      sx={{
        p: 4,
        width: ['100%', '80%', '60%'],
      }}
    >
      <Heading as="h3">{question.content}</Heading>
      <Divider></Divider>
      {shuffleArray(question.answers).map(a => (
        <Label key={a.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Radio
            name={a.answer}
            value={a.answer}
            onSelect={() =>
              dispatch({
                type: 'select-answer',
                questionId: question.id,
                answerId: a.id,
              })
            }
          />
          {a.answer}
        </Label>
      ))}
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          pt: 3,
        }}
      >
        <div>
          {questionIndex > 0 ? (
            <Button
              variant="secondary"
              onClick={() => dispatch({ type: 'go-to-prev-question' })}
            >
              Prev
            </Button>
          ) : null}
        </div>
        {questionIndex < 10 ? (
          <Button onClick={() => dispatch({ type: 'go-to-next-question' })}>
            Next
          </Button>
        ) : (
          <Button onClick={() => dispatch({ type: 'finish-quiz' })}>
            🎉 Finish quiz 🎉
          </Button>
        )}
      </div>
    </Card>
  );
};
