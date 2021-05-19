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

  projectSorter = (a, b) => {
    if (a.start === b.start) {
      return 0;
    } else {
      return a.start < b.start ? -1 : 1;
    }
  };

  difficultySorter = (a, b) => {
    if (a.difficulty === b.difficulty) {
      return 0;
    } else {
      return a.difficulty < b.difficulty ? -1 : 1;
    }
  };

  nicenessSorter = (a, b) => {
    if (a.niceness === b.niceness) {
      return 0;
    } else {
      return a.niceness < b.niceness ? -1 : 1;
    }
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

    if (this.props.sorting === "niceness") {
      allvals.sort(this.nicenessSorter);
    } else if (this.props.sorting === "difficulty") {
      allvals.sort(this.difficultySorter);
    } else {
      allvals.sort(this.projectSorter);
    }

    return (
      <>
        <Chart data={allvals} />
      </>
    );
  }
}

export default HomeChart;
