import "../styles/Home.css";
import { data } from "../Utils";
import ChartBar from "../components/ChartBar";

const Home = () => {
  const names = data.studentNames;

  const handleCheckbox = () => {
    console.log("handle");
  };

  return (
    <>
      <div className="container">
        {names.map((item, index) => {
          return (
            <div className="form-control checkbox">
              <input
                label={item}
                key={index}
                type="checkbox"
                name={item}
                onChange={handleCheckbox}
                value={item}
              />
            </div>
          );
        })}
      </div>
      <div className="container">
        <ChartBar className="chartbar" />
      </div>
    </>
  );
};

export default Home;
