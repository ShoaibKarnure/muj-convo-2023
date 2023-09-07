import React from "react";
import graduationLogo from "../assets/Graduation_Logo.png";

const DepDetails = () => {
  return (
    <div className='detailsPage'>
      <img
        src={graduationLogo}
        alt='admin-img'
        className='graduationLogo'
      ></img>

      <div>
        <h5>Student Details</h5>
        <h6>TEST</h6>
        <h6>School of Architecture & Design</h6>
        <h6>Architecture</h6>
      </div>
    </div>
  );
};

export default DepDetails;
