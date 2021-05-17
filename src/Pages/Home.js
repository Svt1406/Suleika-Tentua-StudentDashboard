import "../styles/Home.css";
import { data } from "../Utils";
import ChartBar from "../components/ChartBar";
import ProjectFilter from "../components/ProjectFilter";
import { useState } from "react";

const Home = () => {
  const names = data.studentNames;
  const initialStateNames = names.map((name, index) => {
    return {
      id: index,
      value: name,
      isChecked: true,
    };
  });

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

  const handleStudentCheckbox = (event) => {
    let lstudents = students;
    lstudents.forEach((student) => {
      console.log("looping through ", student.value)
      if (student.value === event.target.value) {
        console.log("we doen wel wat", event.target.value, student.value);
        student.isChecked = event.target.checked;
      }
    });
    console.log("local studets", lstudents);
    setStudents([ ...lstudents ]);
  };

  const handleProjectCheckbox = (state) => {
    console.log("bam bam", state);
    setProjects([...state.projects]);
  };

  console.log("just before changed", projects, students)
  return (
    <>
      <div className="container">
        <ul>
          {students.map((item, index) => {
            return (
              <div className="form-control checkbox">
                <li key={item.index}>
                  <input
                    key={item.id}
                    label={item.value}
                    type="checkbox"
                    name={item.value}
                    onChange={(event) => handleStudentCheckbox(event)}
                    checked={item.isChecked}
                    value={item.value}
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <ChartBar
          className="chartbar"
          projects={projects}
          students={students}
        />
      </div>
      <div>
        <ProjectFilter
          projects={projects}
          changedHandler={handleProjectCheckbox}
        />
      </div>
    </>
  );
};

export default Home;
