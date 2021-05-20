import * as s from "./Student.styles";
import StudentChart from "./StudentChart";
import ProjectFilter from "../../ProjectFilter/ProjectFilter";
import { data } from "../../../Utils";
import { useState } from "react";
import StudentProfile from "./StudentProfile.js";
import ProjectSorter from "../../ProjectSorter/ProjectSorter";

const Students = (props) => {
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
  const [settings, setPlotSettings] = useState(initialPlotSettings);

  const handleProjectCheckbox = (state) => {
    setProjects([...state.projects]);
  };

  const handleSortingChanged = (state) => {
    setPlotSettings({ ...state });
  };

  const studentName = `${props.match.params.name}`;
  const student = data.studentProfiles.filter((profile) => {
    return profile.first_name === studentName;
  });

  return (
    <s.StudentMainViewContainer>
      <s.StudentProfile>
        <s.StudentHeader>{`${studentName}'s Dashboard`}</s.StudentHeader>
        <StudentProfile student={student[0]} />
      </s.StudentProfile>
      <s.StudentContainer>
        <StudentChart
          projects={projects}
          studentName={studentName}
          settings={settings}
        />
      </s.StudentContainer>
      <s.MainContainer>
        <ProjectSorter
          settings={settings}
          changedHandler={handleSortingChanged}
        />
      </s.MainContainer>
      <ProjectFilter
        projects={projects}
        changedHandler={handleProjectCheckbox}
      />
    </s.StudentMainViewContainer>
  );
};

export default Students;

<s.StudentProfileContainer></s.StudentProfileContainer>;
