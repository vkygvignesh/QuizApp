import React, { useState } from 'react';
import './Registerpage.css';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Registration details:', {
      firstName,
      lastName,
      username,
      email,
      password
    });
  };

  return (
    <div className="reg">
    <div className="register-container">
      <h1>QUIZ APP</h1>
      <h2>Register</h2>
      <div className="input-container">
        <label htmlFor="firstName"><b>First Name:</b></label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="lastName"><b>Last Name:</b></label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="username"><b>Username:</b></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email"><b>Email:</b></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password"><b>Password:</b></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="register-button" onClick={handleRegister} style={{width:"25%"}}>
        Register
      </button>
    </div>
  </div>
  );
};

export default RegisterPage;
