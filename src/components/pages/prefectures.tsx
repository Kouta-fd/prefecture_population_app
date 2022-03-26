import React, { useState, useEffect } from 'react';
import Header from '../module/Header';
import CheckList from '../module/checkList';
import Graph from '../module/Graph';
import { populationData } from '../../mock_data/population';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const layout = css({
  width: 80 + '%',
  maxWidth: 1025 + 'px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 30 + 'px',
  paddingRight: 30 + 'px',
});

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
        setPrefectures(json);
      });
    });
  }, []);

  //都道府県の人口
  const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
    console.log(prefName);
    console.log(prefCode);
    console.log(check);
    let population_data_new = population_data.slice();
    if (check) {
      fetch(
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
          String(prefCode),
        {
          headers: { 'X-API-KEY': process.env.REACT_APP_PREFECTURES_KEY },
        },
      ).then((res) => {
        res.json().then((json) => {
          population_data_new.push({
            prefName: prefName,
            data: json.result.data[0].data,
          });
          set_population_data(population_data_new);
        });
      });
    } else {
      const delete_index = population_data_new.findIndex((val) => val.prefName === prefName);
      population_data_new.splice(delete_index, 1);
      set_population_data(population_data_new);
    }
  };
  return (
    <main css={layout}>
      <Header title="タイトル" />
      {prefectures && (
        <CheckList pref={prefectures.result} onChange={handleCheck} secTitle="都道府県" />
      )}
      <Graph population={population_data} />
    </main>
  );
};

export default Prefectures;
