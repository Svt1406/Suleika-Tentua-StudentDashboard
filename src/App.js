import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Aranka from "./Pages/Aranka";
import Evelyn from "./Pages/Evelyn";
import Floris from "./Pages/Floris";
import Hector from "./Pages/Hector";
import Maurits from "./Pages/Maurits";
import Martina from "./Pages/Martina";
import Rahima from "./Pages/Rahima";
import Sandra from "./Pages/Sandra";
import Storm from "./Pages/Storm";
import Wietske from "./Pages/Wietske";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Aranka" component={Aranka} />
            <Route path="/Evelyn" component={Evelyn} />
            <Route path="/Floris" component={Floris} />
            <Route path="/Hector" component={Hector} />
            <Route path="/Martina" component={Martina} />
            <Route path="/Maurits" component={Maurits} />
            <Route path="/Rahima" component={Rahima} />
            <Route path="/Sandra" component={Sandra} />
            <Route path="/Storm" component={Storm} />
            <Route path="/Wietske" component={Wietske} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
