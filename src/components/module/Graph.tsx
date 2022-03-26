import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Legend,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const text = css({
  marginTop: 60 + 'px',
  textAlign: 'center',
});

type Props = {
  population: {
    prefName: string;
    data: { year: number; value: number }[];
    color: string;
  }[];
};

export const Graph: React.FC<Props> = ({ population }) => {
  if (population.length > 0) {
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
            {population.map((p, index) => (
              <Line dataKey="value" data={p.data} name={p.prefName} stroke={p.color} key={index} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <div css={text}>チェックを入れると総人口推移のグラフがここに表示されます。</div>;
  }
};

export default Graph;
