import * as s from "./Home.styles";
import React, { useState } from "react";
import { data } from "../../../Utils";
import HomeChart from "../Home/HomeChart";
import ProjectFilter from "../../ProjectFilter/ProjectFilter";
import FilterStudent from "./FilterStudent";
import ProjectSorter from "../../ProjectSorter/ProjectSorter";

const Home = () => {
  const names = data.studentProfiles;
  const initialStateNames = names.map((name, index) => {
    return {
      id: index,
      value: name.first_name,
      isChecked: true,
    };
  });

  //TODO: make me in a reduce.
  const projList = data.studentData.map((student) => {
    return student.project;
  });

  const projectList = projList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const initialState = projectList.map((item, index) => {
    return {
      id: index,
      value: item,
      isChecked: true,
    };
  });

  const initialPlotSettings = {
    sorting: "project",
    type: "bar",
    direction: "asc",
    plot: "all" /*not implemented yet */,
  };

  const [projects, setProjects] = useState(initialState);
  const [students, setStudents] = useState(initialStateNames);
  const [settings, setPlotSettings] = useState(initialPlotSettings);

  const handleStudentCheckbox = (studentState) => {
    setStudents([...studentState.students]);
  };

  const handleProjectCheckbox = (state) => {
    setProjects([...state.projects]);
  };

  const handleSortingChanged = (state) => {
    setPlotSettings({ ...state });
  };

  return (
    <s.HomeContainer>
      <s.HomeHeader>Welcome</s.HomeHeader>
      <s.ChartBarContainer>
        <HomeChart
          projects={projects}
          students={students}
          settings={settings}
        />
      </s.ChartBarContainer>
      <s.MainContainer>
        <FilterStudent
          students={students}
          changedHandler={handleStudentCheckbox}
        />
        <ProjectSorter
          settings={settings}
          changedHandler={handleSortingChanged}
        />
      </s.MainContainer>
      <ProjectFilter
        projects={projects}
        changedHandler={handleProjectCheckbox}
      />
    </s.HomeContainer>
  );
};

export default Home;
