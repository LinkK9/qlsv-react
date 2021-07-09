import "antd/dist/antd.css";
import Home from "./components/Home/Home";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModifyStudent from "./components/ModifyStudent/ModifyStudent";

// add-student

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-student">
            <AddStudent />
          </Route>
          <Route path="/modify-student/:id">
            <ModifyStudent />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
