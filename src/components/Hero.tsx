/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';
import { Code } from './Code';

export const Hero = () => (
  <Fragment>
    <h2 sx={{ mb: 3, mt: 0 }}>wtf?! JavaScript Quiz</h2>
    <Code
      code={`
> 'w' + (!![] + [])[+[]] + (![] + [])[+[]] + '?!'
'wtf?!'
    `}
    />
    <p>
      Have you ever experienced these WTF moments when working with JavaScript?
      I bet you did. Solve the quiz to see how much you don&apos;t know about
      JS!
    </p>
  </Fragment>
);
