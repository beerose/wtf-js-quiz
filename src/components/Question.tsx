/** @jsx jsx */
import { Dispatch, useMemo } from 'react';
import { jsx, Button, Card, Label, Radio, Progress } from 'theme-ui';

import { Action, State } from '../pages/index';
import { questions } from '../common/questions';

type QuestionProps = {
  dispatch: Dispatch<Action>;
  questionIndex: number;
  selectedAnswer: State['answers'][0];
};

export const Question = ({
  questionIndex,
  dispatch,
  selectedAnswer,
}: QuestionProps) => {
  const currentQuestion = useMemo(() => questions[questionIndex], [
    questionIndex,
  ]);

  return (
    <Card
      as="form"
      onSubmit={e => {
        e.preventDefault();
        if (questionIndex === questions.length - 1) {
          dispatch({ type: 'finish-quiz' });
          return;
        }
        dispatch({ type: 'go-to-next-question' });
      }}
    >
      {currentQuestion.content}
      {currentQuestion.answers.map(a => (
        <Label key={a.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Radio
            name={currentQuestion.id.toString()}
            value={a.answer}
            checked={selectedAnswer === a.id}
            onChange={() => {
              dispatch({
                type: 'select-answer',
                questionId: currentQuestion.id,
                answerId: a.id,
              });
            }}
          />
          {a.answer}
        </Label>
      ))}
      <Label sx={{ display: 'flex', alignItems: 'center' }}>
        <Radio
          name={currentQuestion.id.toString()}
          value="wtf"
          autoFocus
          checked={selectedAnswer === -1 || selectedAnswer === undefined}
          onChange={() => {
            dispatch({
              type: 'select-answer',
              questionId: currentQuestion.id,
              answerId: -1,
            });
          }}
        />
        Wtf?! I don&apos;t know
      </Label>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          pt: 3,
          pb: 2,
        }}
      >
        <div>
          {questionIndex > 0 ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => dispatch({ type: 'go-to-prev-question' })}
            >
              Prev
            </Button>
          ) : null}
        </div>
        {questionIndex === questions.length - 1 ? (
          <Button type="submit">🎉 Finish quiz 🎉</Button>
        ) : (
          <Button type="submit">Next</Button>
        )}
      </div>
      <Progress max={questions.length} value={questionIndex + 1} />
    </Card>
  );
};
