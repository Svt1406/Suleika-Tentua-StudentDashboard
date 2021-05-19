import { data } from "../../../Utils";
import React from "react";
import Chart from "../../Chart";

class StudentChart extends React.Component {
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
    const activeProjectsTmp = this.props.projects.filter((active) => {
      return active.isChecked;
    });

    const activeProjects = activeProjectsTmp.map((proj) => {
      return proj.value;
    });

    const studentData = data.studentData.filter((item) => {
      return item.name === this.props.studentName;
    });

    const renderData = studentData.filter((value) => {
      return activeProjects.includes(value.project);
    });

    if (this.props.sorting === "niceness") {
      renderData.sort(this.nicenessSorter);
    } else if (this.props.sorting === "difficulty") {
      renderData.sort(this.difficultySorter);
    } else {
      renderData.sort(this.projectSorter);
    }

    return (
      <>
        <Chart data={renderData} />
      </>
    );
  }
}

export default StudentChart;
