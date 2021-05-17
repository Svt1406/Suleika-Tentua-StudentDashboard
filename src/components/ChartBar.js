import "../styles/ChartBar.css";
import { data } from "../Utils";
import React from "react";
import Chart from "./Chart";

// reducer
const sum = (a, b) => {
  return {
    project: a.project,
    dificulty: a.dificulty + b.dificulty,
    niceness: a.niceness + b.niceness,
  };
};

class ChartBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("chartbar", props);
    this.selectedProjects = props.projects;
    this.studentData = data.studentData;
    this.allvals = [];

    this.projectList = this.selectedProjects.filter((value, index, self) => {
      return value.isChecked;
    });

    this.projList = this.projectList.map((project) => {
      return project.value;
    });

    this.projList.forEach((project) => {
      const vals = this.studentData.filter((value) => {
        return value.project === project;
      });

      this.allvals.push(this.getAverage(vals));
    });
  }

  getAverage = (array) => {
    const sums = array.reduce(sum);
    return {
      project: sums.project,
      dificulty: sums.dificulty / array.length,
      niceness: sums.niceness / array.length,
    };
  };


  render() {
    console.log("hepale", this.props);
    const activeProjectsTmp = this.props.projects.filter(active => {
      return active.isChecked;
    });

    const activeProjects = activeProjectsTmp.map(proj => {
      return proj.value;
    })

    const activeStudentTmp = this.props.students.filter(active => {
      return active.isChecked;
    });

    const activeStudents = activeStudentTmp.map(student => {
      return student.value;
    });

    const test = data.studentData.filter(value => {
      return activeProjects.includes(value.project) && activeStudents.includes(value.name);
    });

    console.log("filted and sliced", test)

    return (
      <>
        <Chart data={test} />
      </>
    );
  }
}

export default ChartBar;
