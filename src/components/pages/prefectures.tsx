import React, { useState, useEffect } from 'react';
import Header from '../module/Header';
import CheckList from '../module/checkList';
import Graph from '../module/Graph';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const layout = css({
  width: 80 + '%',
  maxWidth: 1025 + 'px',
  marginBottom: 60 + 'px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 30 + 'px',
  paddingRight: 30 + 'px',
});

const Prefectures: React.FC = () => {
  const [prefectures, setPrefectures] = useState<{
    message: null;
    result: {
      prefCode: number; //都道府県番号
      prefName: string; //都道府県名
    }[];
  }>();
  const [population_data, set_population_data] = useState<
    {
      prefName: string; //都道府県名
      data: {
        year: number; //年度
        value: number; //人口数
      }[];
      color: string; //線の色
    }[]
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

  //都道府県の人口グラフ
  const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
    let population_data_new = population_data.slice();
    //都道府県ごとに色をランダム生成
    let r = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let g = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let b = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let color = '#' + r + g + b;

    //チェックが入ってい都道府県のグラフ描画
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
            color: color,
          });
          set_population_data(population_data_new);
        });
      });
    } else {
      //チェックが外れた場合は配列から削除
      const delete_index = population_data_new.findIndex((val) => val.prefName === prefName);
      population_data_new.splice(delete_index, 1);
      set_population_data(population_data_new);
    }
  };
  return (
    <>
      <Header title="都道府県別の総人口推移" />
      <div css={layout}>
        {prefectures && (
          <CheckList pref={prefectures.result} onChange={handleCheck} secTitle="都道府県" />
        )}
        <Graph population={population_data} />
      </div>
    </>
  );
};

export default Prefectures;
