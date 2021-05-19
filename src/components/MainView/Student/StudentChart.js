import { data } from "../../../Utils";
import React from "react";
import Chart from "../../Chart";

class StudentChart extends React.Component {
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

    return (
      <>
        <Chart data={renderData} />
      </>
    );
  }
}

export default StudentChart;
