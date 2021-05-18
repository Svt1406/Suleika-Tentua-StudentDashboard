import * as s from "./Home.styles";
import React, { useState } from "react";
import { data } from "../../../Utils";
import HomeChart from "./HomeChart";
import ProjectFilter from "../../ProjectFilter";
import FilterStudent from "./FilterStudent";

const Home = () => {
  const names = data.studentNames;
  const initialStateNames = names.map((name, index) => {
    return {
      id: index,
      value: name,
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

  const [projects, setProjects] = useState(initialState);
  const [students, setStudents] = useState(initialStateNames);

  const handleStudentCheckbox = (studentState) => {
    setStudents([...studentState.students]);
  };

  const handleProjectCheckbox = (state) => {
    setProjects([...state.projects]);
  };

  return (
    <s.HomeContainer>
      <s.HomeHeader>Welcome</s.HomeHeader>
      <s.MainContainer>
        <HomeChart
          projects={projects}
          students={students} />
        <FilterStudent
          students={students}
          changedHandler={handleStudentCheckbox}
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
