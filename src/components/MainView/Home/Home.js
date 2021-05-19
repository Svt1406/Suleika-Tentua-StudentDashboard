import * as s from "./Home.styles";
import React, { useState } from "react";
import { data } from "../../../Utils";
import HomeChart from "./HomeChart";
import ProjectFilter from "../../ProjectFilter";
import FilterStudent from "./FilterStudent";
import ProjectSorter from "../../ProjectSorter";

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

  const initialSorting = { sorting: "project" };

  const [projects, setProjects] = useState(initialState);
  const [students, setStudents] = useState(initialStateNames);
  const [sorting, setSorting] = useState(initialSorting);

  const handleStudentCheckbox = (studentState) => {
    setStudents([...studentState.students]);
  };

  const handleProjectCheckbox = (state) => {
    setProjects([...state.projects]);
  };

  const handleSortingChanged = (state) => {
    setSorting(state);
  };

  return (
    <s.HomeContainer>
      <s.HomeHeader>Welcome</s.HomeHeader>
      <s.MainContainer>
        <HomeChart projects={projects} students={students} sorting={sorting} />
        <FilterStudent
          students={students}
          changedHandler={handleStudentCheckbox}
        />
      </s.MainContainer>
      <ProjectFilter
        projects={projects}
        changedHandler={handleProjectCheckbox}
      />
      <ProjectSorter
        selectedsorting={sorting}
        changedHandler={handleSortingChanged}
      />
    </s.HomeContainer>
  );
};

export default Home;
