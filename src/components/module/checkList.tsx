import React from 'react';

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];
  onChange: (prefName: string, prefCode: number, check: boolean) => void;
  secTitle: string;
};

const CheckList: React.FC<Props> = ({ secTitle, prefectures, onChange }) => (
  <div>
    <h2>{secTitle}</h2>
    <ul>
      {prefectures.map((prefecture) => (
        <li key={prefecture.prefName}>
          <input
            id={prefecture.prefName}
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
