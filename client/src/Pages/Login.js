  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import '../Assets/RequestBlood.css'; // import the stylesheet
  import axios from 'axios';

  function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // send login request to server
      axios.post('https://blood-bank-4lln.vercel.app/login', {
        email,
        password,
      })
        .then(response => {
          console.log('Success:', response);
          localStorage.setItem('isAuth',"true");
          localStorage.setItem('userData', JSON.stringify(response.data)); // set the user data in localStorage
          onLogin(true);
          navigate('/profile');
        })
        .catch(error => {
          if (error.response.status === 400 && error.response.data === 'Invalid password') {
            setPasswordError('Invalid password');
          } else if (error.response.status === 400 && error.response.data === 'Invalid email') {
            setEmailError('Invalid email');
          } else {
            console.log(error);
          }
        });
    }

    return (
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <h3 className="formTitle">Login</h3>
          <div className={`formGroup ${emailError ? 'error' : ''}`}>
            <label htmlFor="userEmail">{emailError || 'Email'}:</label>
            <input type="email" id="userEmail" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={`formGroup ${passwordError ? 'error' : ''}`}>
            <label htmlFor="userPassword">{passwordError || 'Password'}:</label>
            <input type="password" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <input type="submit" className="primaryButton searchButton" value="Login" />
        </form>
      </div>
    );
  }

  export default Login;
