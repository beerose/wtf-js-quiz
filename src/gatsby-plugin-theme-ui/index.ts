import { funk, dark } from '@theme-ui/presets';
import { Theme, merge } from 'theme-ui';
import { alpha } from '@theme-ui/color';

const primary = {
  fontFamily: 'inherit',
  cursor: 'pointer',
  borderRadius: 0,
  paddingTop: '5px',
  transition: 'transform 150ms linear',
  ':hover, :focus': {
    transform: 'translateY(-0.125rem)',
  },
  '&&': {
    color: 'background',
    ':hover, :focus': {
      textDecoration: 'none',
    },
  },
};

const secondaryLight = alpha('secondary', 0.2);
const theme: Theme = merge(funk as Theme, {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    shadow: 'rgba(0,0,0,0.2)',
    heading: 'rgb(51, 51, 51)',
    primary: '#B80000',
    secondary: 'rgb(51, 51, 51)',
    headingLight: 'rgba(51,51,51,0.8)',
    modes: {
      dark: {
        ...dark.colors,
        shadow: 'rgba(0,0,0,0.4)',
        text: 'hsl(210, 60%, 97%)',
        heading: '#fff',
        background: 'rgb(0, 18, 35)',
        primary: 'rgb(255, 203, 139)',
        secondary: 'hsl(210, 60%, 97%)',
        headingLight: '#878787',
      },
    },
  },
  sizes: {
    container: 1100,
  },
  fonts: {
    heading: 'Andika New Basic, serif',
    body: 'Andika New Basic, system-ui, sans-serif',
    mono: 'Monolisa, Fira Code, Hasklig, Hack, Menlo, Monaco',
  },
  radii: {
    tiny: '4px',
    small: '5px',
    medium: '10px',
  },
  styles: {
    progress: {
      position: 'absolute',
      bottom: '-10px',
      left: '-10px',
      height: '20px',
      borderRadius: 0,
      border: t => `4px solid ${t.colors.background}`,
    },
    root: {
      fontSize: 3,
    },
    time: {
      fontWeight: '200',
      color: 'gray',
    },
    // comment in LiveEdit
    article: {
      backgroundColor: 'muted',
      marginBottom: '6px',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      borderRadius: '6px',
      '> div': {
        display: 'flex',
        fontWeight: 'bold',
        paddingBottom: '6px',
        '> p': {
          fontWeight: '200',
          paddingLeft: '5px',
        },
      },
    },
    textarea: {
      fontFamily: 'body',
    },
    footer: {
      fontSize: 2,
    },
    section: {
      width: '100%',
      px: [3, 3, 3, 4],
    },
    p: {
      fontSize: 3,
      my: 2,
      width: '70ch',
      maxWidth: '100%',
    },
    inlineCode: {
      '&&': {
        bg: 'muted',
        color: 'text',
      },
    },
    a: {
      color: 'primary',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: '2px solid',
      borderBottomColor: 'primary',
      position: 'relative',
      ':focus, :hover': {
        ':before': {
          content: '""',
          backgroundColor: secondaryLight,
          opacity: 0.9,
          position: 'absolute',
          top: -1,
          bottom: -1,
          right: -1,
          left: -1,
          transform: 'rotate(-2deg)',
        },
      },
    },
    h1: {
      padding: 0,
      lineHeight: ['50px', '70px'],
      color: 'heading',
      fontSize: [6, 7],
      fontWeight: 700,
    },
    h2: {
      color: 'heading',
      fontSize: 5,
      fontWeight: 700,
    },
    h3: {
      color: 'heading',
      fontSize: 4,
      fontWeight: 700,
    },
    h4: {
      color: 'heading',
      fontFamily: 'body',
    },
    hr: {
      borderStyle: 'dashed',
    },
    ul: {
      width: '70ch',
      maxWidth: '100%',
    },
    ol: {
      listStyle: 'none',
      counterReset: 'i',
      paddingInlineStart: 4,
      li: {
        position: 'relative',
        counterIncrement: 'i',
        '> p:first-of-type': {
          display: 'inline-block',
        },
      },
      'li:before': {
        position: 'absolute',
        top: '10px',
        fontWeight: 'bold',
        fontFamily: 'heading',
        fontSize: 3,
        display: 'inline-block',
        transform: 'rotate(5deg)',
        verticalAlign: 'middle',
        content: 'counters(i, ".") ". "',
        px: '7px',
        my: '-7px',
        ml: -4,
        opacity: 0.9,
        bg: secondaryLight,
      },
    },
    img: {
      marginY: '25px',
      borderRadius: '5px',
      boxShadow: '0 6px 42px rgba(0,0,0,0.12)',
    },
  },
  buttons: {
    primary: primary,
    secondary: {
      ...primary,
      backgroundColor: 'secondary',
    },
  },
  cards: {
    primary: {
      position: 'relative',
      zIndex: 10,
      backgroundColor: 'background',
      border: t => `2px solid ${t.colors.headingLight}`,
      transform: 'translateX(5px)',
      p: [2, 3],
      pt: [3, 4],
      pr: ['20px', 4],
      pl: 0,
      width: ['100%', '80%', '60%'],
      '::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        border: t => `2px solid ${t.colors.headingLight}`,
        backgroundColor: 'background',
        top: '8px',
        left: '-12px',
        zIndex: -1,
      },
    },
  },
  links: {
    navLink: {
      borderBottom: 'none',
    },
    button: {
      ...primary,
      ':focus, :hover': { '::before': { display: 'none' } },
    },
  },
  forms: {
    input: {
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    label: {
      correct: {
        '::before': {
          content: '""',
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'green',
        },
      },
    },
  },
  messages: {
    primary: {
      backgroundColor: alpha('secondary', 0.2),
    },
  },
});

export default theme;
