import React from "react";
import "../style/dashboard.css";
import vector from "../assets/Vector.svg";
import Details from "../components/Details";
import CommForm from "../components/CommForm";

const Dash = () => {
  return (
    <>
      <div className='layer'>
        <div className='super'>
          <div className='main'>
            <Details />
            <CommForm />
          </div>
        </div>
        <img src={vector} alt='' className='vector' />
      </div>
    </>
  );
};

export default Dash;
