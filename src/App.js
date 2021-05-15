import "./index.css";
import Home from "./pages/Home";
import Students from "./pages/Student";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Students/:name" component={Students} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
