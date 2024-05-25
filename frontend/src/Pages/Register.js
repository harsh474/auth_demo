import React, { useState } from 'react'
import axios from 'axios';
function Register() { 
    const registerUser =(e)=>{ 
        e.preventDefault(); 
        console.log(name,email,password); 
       axios.post('http://localhost:4000/api/user/signup',{email,password}).then((response)=>{ 
            console.log('Register successful:',response.data); 
        }
        ).catch((error)=>{ 
            if(error.response){ 
                console.error('Register error response:',error.response.data); 
            }else if(error.request){ 
                console.error('Register error request:',error.request); 
            }else{ 
                console.error('Register error:',error.message); 
            }
        });
    } 
    const [name, setName] = useState() ; 
    const [email, setEmail] = useState() ; 
    const [password, setPassword] = useState() ; 
  return (
    <div> 
         <form onSubmit={registerUser}>  
        <h1> Resiter page</h1>
          <label>Enter Your Name</label> 
          <input type='text' placeholder='enter your name'  value={name} onChange={(e)=>{setName(e.target.value)}}></input> <br/>
          <label>Enter Your Email</label> 
          <input type='email' placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/>
          <label>Enter Your Password</label> 
          <input type='password' placeholder='enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input> <br/>
          <button type='submit'>Register</button>
       </form>
    </div>
  )
}

export default Register