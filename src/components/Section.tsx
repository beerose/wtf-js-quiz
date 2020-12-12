/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';

export const Section: React.FC<React.ComponentProps<'section'>> = props => (
  <section
    sx={{
      px: [1, 4],
      py: [4],
      width: '800px',
      position: 'relative',
      ...props.sx,
    }}
    {...props}
  >
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Container>
  </section>
);
