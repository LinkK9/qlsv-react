import "antd/dist/antd.css";
import Home from "./components/Home/Home";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModifyStudent from "./components/ModifyStudent/ModifyStudent";
import { LoginPage } from "./components/Login/Login";
import { PrivateRoute } from './components/PrivateRoute';
import axios from "axios";

// add-student

axios.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  window.location.href = "/logout"
 }
 return error;
});


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
