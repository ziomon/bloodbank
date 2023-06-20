import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/RequestBlood.css'; // For searchbutton css
import axios from 'axios';

function RegisterUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      age,
      bloodGroup,
      weight,
      location,
      email,
      contactNumber: number, // the field in the model is called "contactNumber", so map "number" to "contactNumber"
      password,
    })
    // post user data to server
    axios.post('https://blood-bank-4lln.vercel.app/register', {
      name,
      age,
      bloodGroup,
      weight,
      location,
      email,
      contactNumber: number, // the field in the model is called "contactNumber", so map "number" to "contactNumber"
      password,
    })
      .then(response => {
        console.log('Success:', response);
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="formTitle">Register As Donor</h3>
        <div className="formGroup">
          <label htmlFor="userName">Name :</label>
          <input type="text" id="userName" autoFocus value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="formGroup">
          <label htmlFor="userEmail">Email :</label>
          <input type="email" id="userEmail" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="formGroup">
          <label htmlFor="userPassword">Password :</label>
          <input type="password" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="formGroup">
          <label htmlFor="userNumber">Mobile Number :</label>
          <input type="text" id="userNumber" inputMode="tel" value={number} onChange={(e) => setNumber(e.target.value)} required/>
        </div>
        <div className="formGroup">
          <label htmlFor="userAge">Age :</label>
          <input type="number" id="userAge" inputMode="number" value={age} onChange={(e) => setAge(e.target.value)} required/>
        </div>
        <div className="formGroup">
          <label htmlFor="userBloodGroup">Blood Group :</label>
          <select name="bloodGroup" id="userBloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} >
            <option value="A-">A -ve</option>
            <option value="A+">A +ve</option>
            <option value="AB+">AB +ve</option>
            <option value="AB-">AB -ve</option>
            <option value="B+">B +ve</option>
            <option value="B-">B -ve</option>
            <option value="O+">O +ve</option>
            <option value="O-">O -ve</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="userWeight">Weight</label>
          <input type="number" inputMode="number" id="userWeight" placeholder="in kg" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
        </div>
        <div className="formGroup">
          <label htmlFor="userLocation">Location :</label>
          <input type="text" id="userLocation" placeholder="District" value={location} onChange={(e) => setLocation(e.target.value)} required/>
        </div>

        <input type="submit" className="primaryButton searchButton" value="Register" />
      </form>
    </div>
  );  
}

export default RegisterUser;