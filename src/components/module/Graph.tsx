import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Legend,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';

export const Graph = () => {
  const data = [
    {
      year: '2010',
      大阪: 4000,
      京都: 2400,
    },
    {
      year: '2011',
      大阪: 3000,
      京都: 1398,
    },
    {
      year: '2012',
      大阪: 2000,
      京都: 9800,
    },
    {
      year: '2013',
      大阪: 2780,
      京都: 3908,
    },
    {
      year: '2014',
      大阪: 1890,
      京都: 4800,
    },
    {
      year: '2015',
      大阪: 2390,
      京都: 3800,
    },
    {
      year: '2016',
      大阪: 3490,
      京都: 4300,
    },
    {
      year: '2017',
      大阪: 5700,
      京都: 6300,
    },
    {
      year: '2018',
      大阪: 5490,
      京都: 3200,
    },
  ];
  return (
    <div style={{ height: 500 + 'px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            interval="preserveStartEnd"
            label={{
              value: '日時',
              offset: -5,
              position: 'insideBottomRight',
            }}
          />
          <YAxis
            interval="preserveStartEnd"
            label={{
              value: '人口数',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="大阪" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="京都" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
