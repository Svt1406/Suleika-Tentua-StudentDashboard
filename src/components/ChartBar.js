import { data } from "../Utils";
import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

const studentData = data.studentData;
// reducer
const sum = (a, b) => {
  return {
    project: a.project,
    dificulty: a.dificulty + b.dificulty,
    niceness: a.niceness + b.niceness,
  };
};

const getAverage = (array) => {
  const sums = array.reduce(sum);
  return {
    project: sums.project,
    dificulty: sums.dificulty / array.length,
    niceness: sums.niceness / array.length,
  };
};

const projList = studentData.map((student) => {
  return student.project;
});

const projectList = projList.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log("proj list", projectList);

const allvals = [];
projectList.forEach((project) => {
  const vals = studentData.filter((value) => {
    return value.project === project;
  });

  allvals.push(getAverage(vals));
});

//console.log("vals", vals);
console.log("avg", allvals);

class ChartBar extends React.Component {
  render() {
    return (
      <div className="BarChart">
        <BarChart
          width={800}
          height={400}
          data={allvals}
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
          <YAxis type="number" tickCount={8} />
          <Tooltip />
          <Legend verticalAlign="top" height={75} />
          <Bar
            barSize={10}
            dataKey="dificulty"
            fill="#f7797d"
          />
          <Bar barSize={10} dataKey="niceness" fill="#FBD786" />
        </BarChart>
      </div>
    );
  }
}

export default ChartBar;
