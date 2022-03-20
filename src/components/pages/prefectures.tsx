import React from 'react';
import Header from '../module/Header';
import CheckList from '../module/checkList';
import Graph from '../module/Graph';
import { prefectures } from '../../mock_data/prefectures';
import { population } from '../../mock_data/population';

const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
  console.log(prefName);
  console.log(prefCode);
  console.log(check);
};

export const Prefectures: React.FC = () => (
  <>
    <Header title="タイトル" />
    <CheckList secTitle="都道府県" prefectures={prefectures.result} onChange={handleCheck} />
    <Graph population={population} />
  </>
);

export default Prefectures;
