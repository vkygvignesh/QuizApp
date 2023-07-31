import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css'; 
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';


const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate=useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g. send a request to the server
    console.log('Email:', email);
    console.log('Password:', password);
    axios
    .post("http://localhost:2023/checkLogin",
    {
      email:email,
      password:password,
    })
    .then((response) => {
      alert(response.data);              
      navigate("/home");
    }).catch(error => {
      alert("error==="+error);
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2><b>LOGIN</b></h2>
        <div className="form-group">
          <label htmlFor="email"><b>Email:</b></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="log" >
        <button type="submit" > LOGIN</button>
        </div>
        <div className='re'>
        <p style={{color:"#ffffff"}}> Don't have an Account </p>
      
       </div>
      </form>
    </div>
  );
};

export default Loginpage;
