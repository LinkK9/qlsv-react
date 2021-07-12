import "antd/dist/antd.css";
import Home from "./components/Home/Home";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModifyStudent from "./components/ModifyStudent/ModifyStudent";
import { LoginPage } from "./components/Login/Login";
import {PrivateRoute} from './components/PrivateRoute';

// add-student

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/add-student">
            <AddStudent />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/modify-student/:id">
            <ModifyStudent />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
