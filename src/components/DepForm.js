import React from "react";

const DepForm = () => {
  return (
    <div className='form'>
      <h3 className='form-heading'>REGISTER/CLEAR STUDENT DUE</h3>
      <div>
        <form className='form-group'>
          <input
            className='inputs form-control'
            placeholder='Enter Student Registration Number'
            name='reg_no'
            inputmode='numeric'
          ></input>
          <br />
          <button className='btn btn-secondary' type='submit'>
            Search Student
          </button>
        </form>
        <form className='form-group'>
          <input
            className='inputs form-control'
            placeholder='Enter Student Due Amount'
            name='amount_due'
            type='text'
          ></input>
          <br />
          <textarea
            className='inputs text-Box'
            placeholder='Enter Student Due Details'
            name='details'
          ></textarea>
          <br />
          <button className='success-btn' type='submit'>
            REGISTER STUDENT DUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepForm;
