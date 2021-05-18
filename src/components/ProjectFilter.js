import { data } from "../Utils";
import React from "react";

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
    projects.forEach((project) => (project.isChecked = event.target.checked));
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
      <div className="filter-container">
        <ul>
          {this.state.projects.map((project) => {
            return (
              <li key={project.value}>
                <input
                  key={project.id}
                  type="checkbox"
                  onChange={(event) => this.handleCheckChieldElement(event)}
                  checked={project.isChecked}
                  value={project.value}
                />
                {project.value}
              </li>
            );
          })}
        </ul>
        <input
          key="0"
          type="checkbox"
          onClick={this.handleAllChecked}
          value="checkedAll"
        />
        <p>Check / uncheck all</p>
      </div>
    );
  }
}

export default ProjectFilter;
