/** @jsx jsx */
import React from 'react';
import {
  jsx,
  Button,
  Card,
  Container,
  Divider,
  Heading,
  Label,
  Radio,
} from 'theme-ui';

type QuestionProps = {
  count: number;
  question: React.ReactNode;
  answers: {
    answer: string;
    correct: boolean;
  }[];
};

//random order of answers
export const Question = (props: QuestionProps) => {
  return (
    <Container
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Card
        sx={{
          width: '60%',
          p: 4,
        }}
      >
        <Heading as="h3">{props.question}</Heading>
        <Divider></Divider>
        <div sx={{ py: 4 }}>
          {props.answers.map(a => (
            <Label
              key={a.answer}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Radio name="dark-mode" value="true" />
              {a.answer}
            </Label>
          ))}
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            pt: 3,
          }}
        >
          <Button variant="secondary">Prev</Button>
          <span>
            <b>1</b>/5
          </span>
          <Button>Next</Button>
        </div>
      </Card>
    </Container>
  );
};
