import React from "react";
import "../style/depDash.css";
import vector from "../assets/Vector.svg";
import DepDetails from "./DepDetails";
import DepForm from "./DepForm";
import DepTable from "./DepTable";

const DepDash = () => {
  return (
    <>
      <div className='home'>
        <div className='layer'>
          <div className='Form-outer'>
            <div className='Form-inner'>
              <div className='Form-Header'>
                <h1>Admin</h1>
              </div>
              <div className='Dash-Upper'>
                <DepDetails />
                <DepForm />
              </div>
              <DepTable />
            </div>
          </div>
        </div>
        <img src={vector} alt='' className='vector' />
      </div>
    </>
  );
};

export default DepDash;
