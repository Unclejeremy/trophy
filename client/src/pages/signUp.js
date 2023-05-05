import React, {useState} from 'react'


const SignUp = () => {

  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <main onsubmit="alert('Successful submission')" style={{display: "inline-block", border: "2px solid blue", height: "400px", width: "200px", alignItems: "center" }}>
        <form>
        <label for="firstname">firstname</label>
        <input name="firstname" type="text" placeholder="Enter your firstname" required></input>
        <label for="lastname">lastname</label>
        <input name="lastName" type="text" placeholder="Enter your lastname" required></input>
        <label for="email">email</label>
        <input name="email" type="email" placeholder="Enter your email" required></input>
        <label for="phonenumber">phonenumber</label>
        <input name="phonenumber" type="number" placeholder="Enter your phone number" required></input>
        <label for="password">password</label>
        <input name="password" type="password" placeholder="" required></input>
        <button type="submit" value="Submit">SIGN UP</button>
        </form>
    </main>
  )
}

export default SignUp