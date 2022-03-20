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
  Tooltip,
} from 'recharts';

type Props = {
  population: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
};

export const Graph: React.FC<Props> = ({ population }) => {

  return (
    <div style={{ height: 500 + 'px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
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
            allowDuplicatedCategory={false}
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
          <Tooltip />
          {population.map((p) => (
            <Line dataKey="value" data={p.data} name={p.prefName} key={p.prefName} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
