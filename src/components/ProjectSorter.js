import React from "react";
// import * as s from "./ProjectFilter.styles";

class ProjectSorter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: props.selectedsorting.sorting,
    };

    this.handler = props.changedHandler;
  }

  handleSortingChanged = (event) => {
    this.setState({ selectedOption: event.target.value });
    this.handler(event.target.value);
  };

  render() {
    return (
      <div>
        <label>
          <input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingChanged(event)}
            checked={this.state.selectedOption === "project"}
            value="project"
          />
          Sort on project
        </label>
        <label>
          <input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingChanged(event)}
            checked={this.state.selectedOption === "difficulty"}
            value="difficulty"
          />
          Sort on difficulty
        </label>
        <label>
          <input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingChanged(event)}
            checked={this.state.selectedOption === "niceness"}
            value="niceness"
          />
          Sort on Niceness
        </label>
      </div>
    );
  }
}

export default ProjectSorter;
