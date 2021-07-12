import { Redirect } from "react-router-dom";

export function LogoutPage() {

    localStorage.removeItem('token');

    return <Redirect to="/login" />
}
