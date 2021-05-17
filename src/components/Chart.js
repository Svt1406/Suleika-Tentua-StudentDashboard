import React from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

const Chart = ({ data }) => {
    return (
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 1,
          left: -5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="project"
          tick={{
            tickMargin: 5,
          }}
        />
        <YAxis type="number" tickCount={5} />
        <Tooltip />
        <Legend verticalAlign="top" height={75} />
        <Bar barSize={10} dataKey="dificulty" fill="#f7797d" />
        <Bar barSize={10} dataKey="niceness" fill="#FBD786" />
      </BarChart>
    );
}
 
export default Chart;