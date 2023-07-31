import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css'; 

const AdminPage = () => {
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
        <h2><b>ADMIN LOGIN</b></h2>
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
        { <button type="submit" ><Link to='/admindata' style={{color:'#ffffff'}} >LOGIN</Link></button> }
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
