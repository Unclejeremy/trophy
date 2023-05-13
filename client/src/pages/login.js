import React, {useState} from 'react'

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

const loginFormStyle = {
    width: "400px",
    border: "3px solid blue",
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
}
const inputStyle = {
  width: "200px",
  height: "30px",
  marginBottom: "10px",
  border: "2px solid blue",
  borderRadius: "15px",
  paddingLeft: "5px",
}

const buttonStyle = {
  width: "150px",
  height: "40px",
  marginBottom: "10px",
  border: "2px solid blue",
  borderRadius: "15px",
  paddingLeft: "5px",
  color: "white",
  fontWeight: "bold",
  backgroundColor: "grey",
  
}
  return (
    <main>
        <form style={loginFormStyle}>
        <label for="email">email</label>
        
        <input style={inputStyle} name="email" type="email" placeholder="Enter your email" required></input>
        <label for="password">password</label>
        <input style={inputStyle} name="password" type="password" placeholder="" required></input>
        <button style={buttonStyle} type="submit">LOGIN</button>
        </form>
    </main>
  )
}

export default Login