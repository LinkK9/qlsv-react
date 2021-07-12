import { useState } from "react"

export function LoginPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginButtonClick = () => {
        
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
