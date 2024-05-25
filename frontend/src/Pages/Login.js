import React, { useState } from "react";
import axios from "axios";
function Login() {
    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const loginUser =(e)=>{ 
    e.preventDefault(); 
      console.log(email,password); 
   axios.post('http://localhost:4000/api/user/login',{email,password}).then((response)=>{ 
        console.log('Login successful:',response.data); 
    }
    ).catch((error)=>{ 
      // Server responded with a status code outside of the 2xx range
        if(error.response){ 
            console.error('Register error response:',error.response.data); 
        }else if(error.request){ 
          // No response received after the request was sent
            console.error('Register error request:',error.request); 
        }else{ 
            // Something went wrong in setting up the request
            console.error('Register error:',error.message); 
        }
    });
} 
  return (
    <div>
      <form onSubmit={loginUser} method="post">
        <h1> Login page</h1>
        <label>Enter Your Email</label>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label>Enter Your Password</label>
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>{" "}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Login;
