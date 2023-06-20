import React, { Component } from 'react'
import "../Assets/Emergency.css"
import {Link} from "react-router-dom";
export class Emergency extends Component {
  render() {
    return (
      <div className='emergencyBanner boldText'>
        <Link to="/emergency"><h3><u>EMERGENCY BLOOD REQUIRED !! CLICK HERE</u></h3></Link>
      </div>
    )
  }
}

export default Emergency