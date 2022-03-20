import React, { useState } from 'react';
import Header from '../module/Header';
import CheckList from '../module/checkList';
import Graph from '../module/Graph';
import { prefectures } from '../../mock_data/prefectures';
import { populationData } from '../../mock_data/population';

export const Prefectures: React.FC = () => {
  const [population_data, set_population_data] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([]);
  const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
    console.log(prefName);
    console.log(prefCode);
    console.log(check);
    let population_data = [];
    population_data.push({
      prefName: prefName,
      data: populationData.result.data[0].data,
    });
    set_population_data(population_data);
    console.log(population_data);
  };
  return (
    <>
      <Header title="タイトル" />
      <CheckList secTitle="都道府県" prefectures={prefectures.result} onChange={handleCheck} />
      <Graph population={population_data} />
    </>
  );
};

export default Prefectures;
