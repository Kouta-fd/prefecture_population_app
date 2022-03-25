import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const prefListWrap = css({
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap',
  paddingLeft: 0,
});

const prefListItem = css({
  margin: 5 + 'px',
});

type Props = {
  pref: {
    prefCode: number;
    prefName: string;
  }[];
  onChange: (prefName: string, prefCode: number, check: boolean) => void;
  secTitle: string;
};

const CheckList: React.FC<Props> = ({ secTitle, pref, onChange }) => (
  <div>
    <h2>{secTitle}</h2>
    <ul css={prefListWrap}>
      {pref.map((prefecture) => (
        <li css={prefListItem} key={prefecture.prefName}>
          <input
            id={'n' + prefecture.prefCode}
            type="checkbox"
            name="prefName"
            onChange={(e) => onChange(prefecture.prefName, prefecture.prefCode, e.target.checked)}
          />
          <label htmlFor={prefecture.prefName}>{prefecture.prefName}</label>
        </li>
      ))}
    </ul>
  </div>
);

export default CheckList;
