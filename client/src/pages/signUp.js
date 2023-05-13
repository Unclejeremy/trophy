import React, {useState} from 'react'
//import {FaEye, FaEyeSlash} from "react-icons/fa"


const SignUp = () => {

  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  // const handleChange = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email)
  //   }
const registerNewUser = async (event)  => {
  event.preventDefault();
  const response = await fetch("http://localhost:6000/signup", {
    method: "POST",
    body: JSON.stringify({firstname, lastname, email, password, phoneNumber}),
    headers: {"Content-Type": "application/json"},
  });

  if (response.status === 200) {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    alert("registration successful!");
    //setRedirect(!redirect);
  } else {
    alert("registration failed!")
  }
}



  const SignupFormStyle = {
    width: "400px",
    border: "2px solid blue",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
    position: "relative",
    left: "450px",
    top: "100px",
    //Colour: "green",
}
  return (
    <main >
        <form onSubmit={registerNewUser} style={SignupFormStyle}>
        <label for="firstname">firstname</label>
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstname" type="text" placeholder="Enter your firstname" required></input>
        <label for="lastname">lastname</label>
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastName" type="text" placeholder="Enter your lastname" required></input>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Enter your email" required></input>
        <label for="phonenumber">phonenumber</label>
        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phonenumber" type="tel" placeholder="Enter your phone number" required></input>
        <label for="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type={isRevealPwd ? "text" : "password"} placeholder="" required></input>
        {/* <span style={{marginLeft: "10px"}}
              title={isRevealPwd ? "Hide password" : "Show"}
              onClick={() => setIsRevealPwd(prevState => !prevState) }
            >
                {
                  isRevealPwd ? <FaEyeSlash /> : <FaEye />
                }
            </span> */}
        <button type="submit" value="Submit">SIGN UP</button>
        </form>
    </main>
  )
}

export default SignUp