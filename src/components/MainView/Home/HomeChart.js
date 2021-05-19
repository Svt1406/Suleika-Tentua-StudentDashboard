import { data } from "../../../Utils"; //TOOD remove me
import React from "react";
import Chart from "../../Chart";

// reducer

class HomeChart extends React.Component {
  sum = (a, b) => {
    return {
      project: a.project,
      difficulty: a.difficulty + b.difficulty,
      niceness: a.niceness + b.niceness,
    };
  };

  getAverage = (array) => {
    const sums = array.reduce(this.sum);
    return {
      project: sums.project,
      difficulty: sums.difficulty / array.length,
      niceness: sums.niceness / array.length,
    };
  };

  render() {
    const activeProjects = this.props.projects.reduce((filtered, project) => {
      if (project.isChecked) {
        filtered.push(project.value);
      }
      return filtered;
    }, []);

    const activeStudents = this.props.students.reduce(
      (filteredStudents, student) => {
        if (student.isChecked) {
          filteredStudents.push(student.value);
        }
        return filteredStudents;
      },
      []
    );

    const activeData = data.studentData.filter((value) => {
      return (
        activeProjects.includes(value.project) &&
        activeStudents.includes(value.name)
      );
    });

    let allvals = [];
    activeProjects.forEach((project) => {
      if (activeData.length > 0) {
        const vals = activeData.filter((value) => {
          return value.project === project;
        });

        allvals.push(this.getAverage(vals));
      }
    });

    return (
      <>
        <Chart data={allvals} />
      </>
    );
  }
}

export default HomeChart;
