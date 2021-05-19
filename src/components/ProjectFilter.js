import React from "react";
import * as s from "../components/ProjectFilter.styles";

class ProjectFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: props.projects,
    };

    this.handler = props.changedHandler;
  }

  handleAllChecked = (event) => {
    let projects = this.state.projects;
    projects.forEach((project) => (project.isChecked = true));
    this.setState({ projects: projects });
    let newstate = { projects: projects };
    this.setState(newstate);
    this.handler(newstate);
  };

  handleAllUnChecked = (event) => {
    let projects = this.state.projects;
    projects.forEach((project) => (project.isChecked = false));
    this.setState({ projects: projects });
    let newstate = { projects: projects };
    this.setState(newstate);
    this.handler(newstate);
  };

  handleCheckChieldElement = (event) => {
    let projects = this.state.projects;
    projects.forEach((project) => {
      if (project.value === event.target.value)
        project.isChecked = event.target.checked;
    });
    let newstate = { projects: projects };
    this.setState(newstate);
    this.handler(newstate);
  };

  render() {
    return (
      <s.ProjectFilter>
        <s.Header>Please select below which projects you want to see in the Chart:</s.Header>
        {this.state.projects.map((project) => {
          return (
            <s.ProjectFilterP key={project.value}>
              <input
                type="checkbox"
                onChange={(event) => this.handleCheckChieldElement(event)}
                checked={project.isChecked}
                value={project.value}
              />
              <s.ProjectFilterLabel>{project.value}</s.ProjectFilterLabel>
            </s.ProjectFilterP>
          );
        })}
          <s.Input
            key="0"
            type="reset"
            onClick={this.handleAllUnChecked}
            value="Reset"
          />
        <s.Input
          key="1"
          type="button"
          onClick={this.handleAllChecked}
          value="Select all"
        />
      </s.ProjectFilter>
    );
  }
}

export default ProjectFilter;
