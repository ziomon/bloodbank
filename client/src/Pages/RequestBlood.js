import React, { useState } from 'react';
import "../Assets/RequestBlood.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RequestBlood() {
  const [formValues, setFormValues] = useState({
    patientName: '',
    patientAge: '',
    patientBloodGroup: '',
    patientBloodUnits: '',
    patientLocation: '',
    standeeName: '',
    standeeNumber: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://blood-bank-4lln.vercel.app/search', formValues)
      .then((response) => {
        console.log(response);
        navigate(`${formValues.patientBloodGroup}/${formValues.patientLocation}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="formContainer">
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='formTitle'>Request Blood</h3>
          <div className="formGroup">
            <label htmlFor="patientName">Patient Name:</label>
            <input type="text" id='patientName' autoFocus onChange={handleChange} value={formValues.patientName} />
          </div>
          <div className="formGroup">
            <label htmlFor="patientAge">Age:</label>
            <input type="number" id='patientAge' inputMode='number' onChange={handleChange} value={formValues.patientAge} />
          </div>
          <div className="formGroup">
            <label htmlFor="patientBloodGroup">Blood Group:</label>
            <select id="patientBloodGroup" defaultValue="" onChange={handleChange}>
  <option value="">Select Blood Group</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
</select>
          </div>
          <div className="formGroup">
            <label htmlFor="patientBloodUnits">No of Units:</label>
            <input type="number" inputMode='number' id='patientBloodUnits' onChange={handleChange} value={formValues.patientBloodUnits} />
          </div>
          <div className="formGroup">
            <label htmlFor="patientLocation">Hospital Location:</label>
            <input type="text" id='patientLocation' onChange={handleChange} value={formValues.patientLocation} />
          </div>
          <div className="formGroup">
            <label htmlFor="standeeName">Standee Name:</label>
            <input type="text" id='standeeName' onChange={handleChange} value={formValues.standeeName} />
          </div>
          <div className="formGroup">
            <label htmlFor="standeeNumber">Standee Mobile Number:</label>
            <input type="text" id='standeeNumber' inputMode='number' onChange={handleChange} value={formValues.standeeNumber} />
          </div>
          <input className="primaryButton searchButton" type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default RequestBlood;
