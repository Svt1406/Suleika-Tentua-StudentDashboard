import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

const ChartLine = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={450}>
      <LineChart
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
        <Legend verticalAlign="top" height={25} />
        <Line type="monotone" dataKey="difficulty" stroke="#028090" />
        <Line type="monotone" dataKey="niceness" stroke="#dfa375" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
