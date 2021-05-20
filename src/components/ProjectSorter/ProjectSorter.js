import React from "react";
import * as s from "../ProjectSorter/ProjectSorter.styles";

class ProjectSorter extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.settings;

    this.handler = props.changedHandler;
  }

  handleSortingChanged = (event) => {
    let state = this.state;
    state.sorting = event.target.value;
    this.setState(state);
    this.handler(state);
  };

  handleChartTypeChanged = (event) => {
    let state = this.state;
    state.type = event.target.value;
    this.setState(state);
    this.handler(state);
  };

  handleSortingDirChanged = (event) => {
    let state = this.state;
    state.direction = event.target.value;
    this.setState(state);
    this.handler(state);
  };

  render() {
    return (
      <s.ProjectSorterContainer>
        <s.ChartSettingsHeader>Chart Settings</s.ChartSettingsHeader>
        <s.SortContainer>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingChanged(event)}
            checked={this.state.sorting === "project"}
            value="project"
          />
          <s.LabelSort> Sort on project</s.LabelSort>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingChanged(event)}
            checked={this.state.sorting === "difficulty"}
            value="difficulty"
          />
          <s.LabelSort> Sort on difficulty</s.LabelSort>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingChanged(event)}
            checked={this.state.sorting === "niceness"}
            value="niceness"
          />
          <s.LabelSort>Sort on Niceness</s.LabelSort>
        </s.SortContainer>
        <s.TypeContainer>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleChartTypeChanged(event)}
            checked={this.state.type === "bar"}
            value="bar"
          />
          <s.LabelType>Bar Chart</s.LabelType>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleChartTypeChanged(event)}
            checked={this.state.type === "line"}
            value="line"
          />
          <s.LabelType>Line Chart</s.LabelType>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleChartTypeChanged(event)}
            checked={this.state.type === "table"}
            value="table"
          />
          <s.LabelType>Table</s.LabelType>
        </s.TypeContainer>
        <s.DirectionContainer>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingDirChanged(event)}
            checked={this.state.direction === "asc"}
            value="asc"
          />
          <s.LabelDirection> Sort Ascending</s.LabelDirection>
          <s.Input
            // key={project.id}
            type="radio"
            onChange={(event) => this.handleSortingDirChanged(event)}
            checked={this.state.direction === "dsc"}
            value="dsc"
          />
          <s.LabelDirection>Sort Descending</s.LabelDirection>
        </s.DirectionContainer>
      </s.ProjectSorterContainer>
    );
  }
}

export default ProjectSorter;
