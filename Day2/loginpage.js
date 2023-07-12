import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css'; // Import the CSS file for styling

const Loginpage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <div className="log">
        <button type="submit"><b>Login</b></button>
        </div>
        <div className='re'>
        <p style={{color:"#ffffff"}}> Don't have an Account </p>
       <p><Link to='reg'style={{color:"#ffffff"}}><u>Click here</u></Link>
       </p>
       </div>
      </form>
    </div>
  );
};

export default Loginpage;
