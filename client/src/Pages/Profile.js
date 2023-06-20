import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Assets/Profile.css";
function Profile() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem('isAuth'));
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return (
    <div className='profileContainer'>
      <div className="profileCard">
        <div className="profileCardBlood">
          {userData.bloodGroup}
        </div>
        <div className="profileCardDetails">
          <p className='profileCardName'>{userData.name}</p>
          <p className='profileCardAge'>Age : {userData.age} | Weight :{userData.weight} </p>
          <p className='profileCardLocation'>{userData.location}</p>
          <p className='profileCardEmail'>{userData.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
