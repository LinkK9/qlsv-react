import { Redirect, Route } from "react-router-dom";

export function PrivateRoute(props) {
  const token = localStorage.getItem('token');

  return token ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
