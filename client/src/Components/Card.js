import React from 'react'
import "../Assets/Card.css"
function Card(props) {
  const handleCallButtonClick = () => {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      window.location.href = `tel:${props.phoneNumber}`;
    } else {
      navigator.clipboard.writeText(props.phoneNumber);
      alert(`Phone number ${props.phoneNumber} copied to clipboard!`);
    }
    console.log(props.phoneNumber);
  };
  return (
    <>
    <div className="card">
        <div className="bloodGroup">
            <p className='boldText'>{props.bloodGroup}</p>
        </div>
        <div className="details">
            <p className='boldText'> {props.name} </p>
            <p>Age : {props.age}</p>
            <p>location : {props.location} </p>
            <button className="primaryButton-invert cardButton" onClick={handleCallButtonClick}>Contact</button>
        </div>
    </div>
    </>
  )
}

export default Card