import "antd/dist/antd.css";
import Home from "./components/Home/Home";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import ModifyStudent from "./components/ModifyStudent/ModifyStudent";
import { LoginPage } from "./components/Login/Login";
import { PrivateRoute } from './components/PrivateRoute';
import axios from "axios";
import { useEffect } from "react";
import { LogoutPage } from "./components/Logout/Logout";


function App() {

  const history = useHistory();

  useEffect(() => {
    axios.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response.status === 401) {
        history.push("/logout");
      }
      return error;
    });

  }, [history]);



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
          <Route path="/logout">
            <LogoutPage />
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
