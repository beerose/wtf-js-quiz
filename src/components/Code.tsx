/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from '@emotion/styled';
import theme from 'prism-react-renderer/themes/nightOwl';

export const copyToClipboard = str => {
  const clipboard = window.navigator.clipboard;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== 'function') {
    const textarea = document.createElement('textarea');
    textarea.value = str;
    textarea.setAttribute('readonly', 'true');
    textarea.setAttribute('contenteditable', 'true');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand('copy');
    document.body.removeChild(textarea);

    return Promise.resolve();
  }

  return clipboard.writeText(str);
};

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1em;
  padding-top: 1.3em;
  overflow: scroll;
  font-size: 16px;
  font-family: 'monospace';
  font-weight: 100;
`;

const Line = styled.div`
  display: table-row;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export const Code = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      sx={{
        position: 'relative',
        width: '90ch',
        maxWidth: '100%',
      }}
    >
      <button
        type="button"
        sx={{
          appearance: 'none',
          position: 'absolute',
          top: 0,
          right: 0,
          bg: 'transparent',
          border: 'none',
          color: 'white', // assumes dark background syntax theme
          p: 2,
          cursor: 'copy',
          opacity: 0.7,
          borderRadius: 'small',
          fontSize: '0.6em',
          ':focus, :hover': {
            bg: 'rgba(255, 255, 255, 0.1)',
            opacity: 1,
            outline: 'none',
          },
        }}
        onClick={() => {
          const text = String(code);
          setCopied(true);
          copyToClipboard(text).then(() => {
            window.setTimeout(() => {
              setCopied(false);
            }, 1500);
          });
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code.trim()}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </div>
  );
};
