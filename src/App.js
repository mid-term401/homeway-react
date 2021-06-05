import React, { useState } from "react";
import axios from "axios";
import './App.css';
import SignUpFormHost from './component/signUp/host'
import SignUpVolunteer from './component/signUp/volunteer'

function App() {

  // states for registration

  const [userNameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // axios.defaults.withCredentials = true;

  const register = () => {
    axios.post("http://localhost:9000/volunteers/sign_up", {
      username: userNameReg,
      password: passwordReg,
      first_name: firstName,
      last_name: lastName,
      email,
      country,
      address,
      birth_date: birthDate
    }).then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  // states for login

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios.post("http://localhost:9000/sign_in", {}, {
      auth: {
        username: username,
        password: password
      }
    }).then((res) => {
      if (res.data.username) {
        console.log(res.data);
        setLoginStatus(res.data.username)
      }
    }).catch(err => {
      console.log("err");
    })
  }

  // useEffect(() => {
  //   axios.get("http://localhost:9000/sign_in")
  //     .then(res => {
  //       console.log("inside useEffect",res);
  //     }).catch(e => {
  //       console.log(e);
  //     })
  // }, [])

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" onChange={(e) => { setUserNameReg(e.target.value) }} />
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" onChange={(e) => { setPasswordReg(e.target.value) }} />
        <label htmlFor="First-Name">First-Name</label>
        <input type="text" id="First-Name" onChange={(e) => { setFirstName(e.target.value) }} />
        <label htmlFor="Last-Name">Last-Name</label>
        <input type="text" id="Last-Name" onChange={(e) => { setLastName(e.target.value) }} />
        <label htmlFor="Email">Email</label>
        <input type="text" id="Email" onChange={(e) => { setEmail(e.target.value) }} />
        <label htmlFor="Country">Country</label>
        <input type="text" id="Country" onChange={(e) => { setCountry(e.target.value) }} />
        <label htmlFor="Address">Address</label>
        <input type="text" id="Address" onChange={(e) => { setAddress(e.target.value) }} />
        <label htmlFor="Birth-Date">Birth-Date</label>
        <input type="text" id="Birth-Date" onChange={(e) => { setBirthDate(e.target.value) }} />
        <button onClick={register}>Register</button>
      </div>


      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
        <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        <button onClick={login}>Login</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  )
}

// Haneen code:

{/* <div className="App">
<header className="App-header">
 <SignUpFormHost/>

</header>

<header className="App-header">
 <SignUpVolunteer/>
</header>


</div> */}

export default App;
