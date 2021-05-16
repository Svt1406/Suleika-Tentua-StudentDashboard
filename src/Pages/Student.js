import ChartBar from '../components/ChartBar';

const Students = (props) => {

  const studentName = `${props.match.params.name}`
  return (
    <div>
      <h1>{`${studentName}'s page`}</h1>
      <ChartBar name={studentName } />
    </div>
  );
};

export default Students;
