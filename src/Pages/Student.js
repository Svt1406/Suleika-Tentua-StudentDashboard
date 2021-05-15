import ChartBar from '../components/ChartBar';

const Students = (props) => {

  const studentName = `${props.match.params.name}`
    console.log("name=", studentName, props);
  return (
    <div>
      <h1>halloiiiiiiiiiiiiiiiadfadsfasdfasdfadsfasdf { studentName}</h1>
      <h1>{`${studentName}'s page`}</h1>
    </div>
  );
};

export default Students;
