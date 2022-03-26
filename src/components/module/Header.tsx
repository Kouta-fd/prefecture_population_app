import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const header = css({
  width: 100 + 'vw',
  background: 'rgba(200,190,247,0.5)',
});

const text = css({
  textAlign: 'center',
  margin: 0,
  padding: 20 + 'px',
});

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => (
  <header css={header}>
    <h1 css={text}>{title}</h1>
  </header>
);

export default Header;
