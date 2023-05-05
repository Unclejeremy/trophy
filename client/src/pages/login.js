import React, {useState} from 'react'

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

const loginFormStyle = {
    width: "400px",
    border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
}
  return (
    <main>
        <form style={loginFormStyle}>
        <label for="email">email</label>
        
        <input name="email" type="email" placeholder="Enter your email" required></input>
        <label for="password">password</label>
        <input name="password" type="password" placeholder="" required></input>
        <button type="submit">LOGIN</button>
        </form>
    </main>
  )
}

export default Login