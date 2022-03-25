import React, { useState, useEffect } from 'react';
import Header from '../module/Header';
import CheckList from '../module/checkList';
import Graph from '../module/Graph';
import { populationData } from '../../mock_data/population';

const Prefectures: React.FC = () => {
  const [prefectures, setPrefectures] = useState<{
    message: null;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  }>();
  const [population_data, set_population_data] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([]);
  useEffect(() => {
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': process.env.REACT_APP_PREFECTURES_KEY },
    }).then((res) => {
      res.json().then((json) => {
        console.log(json.result);
        setPrefectures(json);
      });
    });
  }, []);

  // });
  const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
    console.log(prefName);
    console.log(prefCode);
    console.log(check);

    //人口
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
      {prefectures && (
        <CheckList pref={prefectures.result} onChange={handleCheck} secTitle="都道府県" />
      )}
      <Graph population={population_data} />
    </>
  );
};

export default Prefectures;
