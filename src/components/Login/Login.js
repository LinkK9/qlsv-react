import { useState } from "react"
import { Login } from "../../servies/UserService";

export function LoginPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginButtonClick = async () => {
        const token = await Login(userName, password);
        localStorage.setItem("token", token);
    }

    return (
        <div>
            <h2>Login</h2>
            <div>
                <input value={userName} onChange={handleChangeUserName} placeholder="username" />
            </div>
            <div>
                <input value={password} onChange={handleChangePassword} placeholder="password" />
            </div>
            <button onClick={handleLoginButtonClick}>Login</button>
        </div>
    )
}
