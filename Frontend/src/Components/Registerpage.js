import React, { useState } from 'react';
import './Registerpage.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';



const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const navigate=useNavigate();

  const validateForm = () => {
    const newErrors = {};
  
    if (firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
    } else if (firstName.length < 3) {
      newErrors.firstName = 'First Name must be at least 3 characters long';
    }
  
    if (lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
    } else if (lastName.length < 3) {
      newErrors.lastName = 'Last Name must be at least 3 characters long';
    }
  
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z]{5}[0-9]{2}$/.test(username)) {
      newErrors.username = 'Username should be a combination of 5 alphabets and 2 numbers';
    }
  
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/[a-zA-Z]+@gmail.com/.test(email)) {
      newErrors.email = 'Email should be in the format example@gmail.com';
    }
  
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    } else if (!/[A-Za-z]{3}[0-9]{2}[@$!%#?&_]{2}$/.test(password)) {
      newErrors.password = 'Password should be a combination of 3 alphabets, 2 numbers, and 2 special characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid)
     {
      console.log('Registration details:', {
        firstName,
        lastName,
        username,
        email,
        password
      });
      axios
      .post("http://localhost:2023/Userdetails",
      {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email:email,
        password:password,
      })
      .then((response) => {
        alert("participant "+ username +" added!");
        navigate("/login");
      }).catch(error => {
        alert("error==="+error);
      });
    }
  };

  return (
    <div className="reg">
      <div className="register-container">
        {/* <div className='tle'><h1>QUIZ APP</h1></div> */}
        <h2>REGISTER</h2>
        <form onSubmit={handleRegister}>
          <div className="input-container">
            {/* <label htmlFor="firstName" style={{color:'orange'}}><b><h3>FIRST NAME:</h3></b></label> */}
            <input
              type="text"
              id="firstName"
              placeholder='FirstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? 'input-error' : ''}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="input-container">
            {/* <label htmlFor="lastName" style={{color:'orange'}}><b><h3>LAST NAME:</h3></b></label> */}
            <input
              type="text"
              id="lastName"
              placeholder='LastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={errors.lastName ? 'input-error' : ''}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="input-container">
            {/* <label htmlFor="username" style={{color:'orange'}}><b><h3>USER NAME</h3></b></label> */}
            <input
              type="text"
              id="username"
              placeholder='UsertName'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'input-error' : ''}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="input-container">
            {/* <label htmlFor="email" style={{color:'orange'}}><b><h3>EMAIL:</h3></b></label> */}
            <input
              type="email"
              id="email"
              placeholder='Email ID'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-container">
            {/* <label htmlFor="password" style={{color:'orange'}}><b><h3>PASSWORD:</h3></b></label> */}
            <input
              type="password"
              id="password"
              placeholder='Password '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <br/>
          <button className="register-button" type="submit">
          REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;