import React, { useState } from 'react'
import "../Assets/RequestBlood.css"
import { useNavigate } from 'react-router-dom';

function RequestBlood() {
  const [patientName, setPatientName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [hospitalLocation, setHospitalLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${bloodGroup}/${hospitalLocation}`);
  }

  return (
    <div className="emergencyBackground formContainer">
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='formTitle' >Emergency Blood</h3>
        <div className="formGroup">
          <label htmlFor="patientName">
            Patient Name :
          </label>
          <input type="text" id='patientName' autoFocus value={patientName} onChange={(e) => setPatientName(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="patientBloodGroup">
            Blood Group :
          </label>
          <select name="bloodGroup" id="patientBloodGroup" defaultValue={bloodGroup} value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
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
          <label htmlFor="hospitalLocation">
            Hospital Location :
          </label>
          <input type="text" id='hospitalLocation' value={hospitalLocation} onChange={(e) => setHospitalLocation(e.target.value)} />
        </div>
        <input type="submit" className="primaryButton searchButton" value="Search" />
      </form>
    </div>
  )
}

export default RequestBlood
