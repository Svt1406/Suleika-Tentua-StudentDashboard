import * as s from "./Student.styles";
import StudentChart from "./StudentChart";
import ProjectFilter from "../../ProjectFilter";
import { data } from "../../../Utils";
import { useState } from "react";
import StudentProfile from "./StudentProfile.js";

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

  const [projects, setProjects] = useState(initialState);

  const handleProjectCheckbox = (state) => {
    console.log("student bam bam", state);
    setProjects([...state.projects]);
  };

  const studentName = `${props.match.params.name}`;
  return (
    <s.StudentMainViewContainer>
      <s.StudentHeader>{`${studentName}'s Dashboard`}</s.StudentHeader>
      <s.StudentContainer>
        <StudentChart projects={projects} studentName={studentName} />
        <StudentProfile />
      </s.StudentContainer>
      <ProjectFilter
        projects={projects}
        changedHandler={handleProjectCheckbox}
      />
    </s.StudentMainViewContainer>
  );
};

export default Students;
