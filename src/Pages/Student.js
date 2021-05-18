// import "../styles/Student.css";
// import StudentChart from "../components/StudentChart";
// import ProjectFilter from "../components/ProjectFilter";
// import { data } from "../Utils";
// import { useState } from "react";

// const Students = (props) => {
//   const projList = data.studentData.map((student) => {
//     return student.project;
//   });

//   const projectList = projList.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });

//   const initialState = projectList.map((item, index) => {
//     return {
//       id: index,
//       value: item,
//       isChecked: true,
//     };
//   });

//   const [projects, setProjects] = useState(initialState);

//   const handleProjectCheckbox = (state) => {
//     console.log("student bam bam", state);
//     setProjects([...state.projects]);
//   };

//   const studentName = `${props.match.params.name}`;
//   return (
//     <div className="student-container">
//       <h1 className="student-title">{`${studentName}'s page`}</h1>
//       <div className="container">
//         <StudentChart className="student-chart" projects={projects} studentName={studentName} />
//       </div>
//       <div>
//         <ProjectFilter
//           projects={projects}
//           changedHandler={handleProjectCheckbox}
//         />
//       </div>
//     </div>
//   );
// };

// export default Students;
