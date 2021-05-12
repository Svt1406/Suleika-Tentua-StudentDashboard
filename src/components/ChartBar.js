import { studentData } from "../Utils";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryGroup
} from "victory";

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

const ChartBar = () => {
  return (
    <VictoryChart theme={VictoryTheme.grayscale} domainPadding={120}>
      <VictoryGroup offset={5} style={{ data: { width: 10 } }}>
        <VictoryStack colorScale={"red"}>
          <VictoryBar data={allvals} key={0} x="project" y="dificulty" />
        </VictoryStack>
        <VictoryStack colorScale={"green"}>
          <VictoryBar data={allvals} key={1} x="project" y="niceness" />
        </VictoryStack>
      </VictoryGroup>
    </VictoryChart>
  );
};

export default ChartBar;
