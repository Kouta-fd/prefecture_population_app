import React from 'react';

type Props = {
  secTitle: string;
};

const CheckList: React.FC<Props> = ({ secTitle }) => (
  <div>
    <h2>{secTitle}</h2>
    <ul>
      <li>
        <input type="checkbox" />
        <span>大阪</span>
      </li>
    </ul>
  </div>
);

export default CheckList;
