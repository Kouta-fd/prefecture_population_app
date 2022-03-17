import React from 'react';
import Header from '../module/Header';
import CheckList from '../module/checkList';
import Graph from '../module/Graph';

export const Prefectures: React.FC = () => (
  <>
    <Header title="タイトル" />
    <CheckList secTitle="都道府県" />
    <Graph />
  </>
);

export default Prefectures;
