import { data } from "../Utils";

const Home = () => {
  const names = data.studentNames;

  const handleCheckbox = () => {
    console.log("handle");
  } 


  return (
    <div>
      <h1>Home</h1>
      {names.map((item, index) => {
        return (
          <div>
            <form>
              <label>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{item}
                <input key={index} type="checkbox" name={item} checked="" onChange={handleCheckbox}/>
              </label>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
