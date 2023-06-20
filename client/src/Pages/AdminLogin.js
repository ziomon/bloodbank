import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/RequestBlood.css'; // import the stylesheet

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') || false); // initialize isAdmin with the value from localStorage, or false if it doesn't exist
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'admin@gmail.com' && password === '1234567') {
      localStorage.setItem('isAdmin', true);
      window.location.reload()
      setIsAdmin(true);
    } else {
      setEmailError('Invalid email or password');
      setPasswordError('Invalid email or password');
    }
  }
  useEffect(() => {
    if (isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

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

export default AdminLogin;
