/** @jsx jsx */
import { Dispatch, useMemo } from 'react';
import {
  jsx,
  Button,
  Card,
  Divider,
  Heading,
  Label,
  Radio,
  Progress,
} from 'theme-ui';

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

  // const shuffledAnswers = useMemo(() => shuffleArray(currentQuestion.answers), [
  //   currentQuestion.answers,
  // ]);

  return (
    <Card
      sx={{
        px: [2, 4],
        py: [3, 4],
        width: ['100%', '80%', '60%'],
        position: 'relative',
      }}
    >
      <Heading as="h3">{currentQuestion.content}</Heading>
      <Divider sx={{ my: 3 }} />
      {currentQuestion.answers.map(a => (
        <Label key={a.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Radio
            name={a.answer}
            value={a.answer}
            checked={selectedAnswer === a.id}
            onChange={() => {
              console.log('select');
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
      <Progress max={10} value={(questionIndex + 1) / 10} />
    </Card>
  );
};
