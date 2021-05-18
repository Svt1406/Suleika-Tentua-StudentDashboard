import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
  Label,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="75%" height={400}>
      <BarChart
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
          dy={5}
          dataKey="project"
          tick={{
            tickMargin: 5,
          }}
        />
        <YAxis
          allowDecimals={false}
          type="number"
          tickCount={5}
          dx={-5}
          interval={1}
        />
        <Tooltip cursor={{ fill: "#ecf0f1" }} />
        <Legend verticalAlign="top" height={75} />
        <Bar
          barSize={10}
          dataKey="difficulty"
          fill="#028090"
          radius={[10, 10, 10, 10]}
        />
        <Bar
          barSize={10}
          dataKey="niceness"
          fill="#dfa375"
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
