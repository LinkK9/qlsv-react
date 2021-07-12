import { useState } from "react"
import { Redirect, useHistory } from "react-router-dom";
import { Login } from "../../servies/UserService";

export function LoginPage() {

    localStorage.removeItem('token');

    return <Redirect to="/login" />

}
