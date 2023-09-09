import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
const Details = ({ singleUser }) => {
  return (
    <div className='dash-main-left'>
      <div className='dash-left-div'>
        <h2 className='dash-details-head '>Student Details</h2>
        <div className='table-responsive dash-table-div'>
          <table className='dash-deet-table table table-striped table-borderless'>
            <tbody>
              <tr>
                <th scope='col'>Field</th>
                <th scope='col'>Details</th>
              </tr>
              {/* {Object.keys(user).forEach((key) => {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{user[key]}</td>
                </tr>
              );
            })} */}
              <tr>
                <td>Faculty</td>
                <td>{singleUser.faculty}</td>
              </tr>
              <tr>
                <td>School</td>
                <td>{singleUser.school}</td>
              </tr>
              <tr>
                <td>Program</td>
                <td>{singleUser.programme}</td>
              </tr>
              <tr>
                <td>Registration No</td>
                <td>{singleUser.reg_no}</td>
              </tr>
              <tr>
                <td>Student Name</td>
                <td>{singleUser.student_name}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{singleUser.gender}</td>
              </tr>
              <tr>
                <td>Batch</td>
                <td>{singleUser.batch}</td>
              </tr>
              <tr>
                <td>Credits</td>
                <td>{singleUser.credits}</td>
              </tr>
              <tr>
                <td>GPA</td>
                <td>{singleUser.cgpa}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{singleUser.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div className='dash-left-companions-div'>
          <p className='dash-companions'>
            <strong>Choose no. of companions attending with you</strong>
          </p>
          <select
            name='companions'
            id='companions'
            className='form-select companions-select'
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='1'>0</option>
            <option value='1'>1</option>
            <option value='1'>2</option>
          </select>
        </div>
        <br />
        <br />
        <div className='dash-attendDiv'>
          <p>
            <strong>Will you be attending the convocation In-Person? </strong>
          </p>
          <div class='form-check'>
            <input
              class='form-check-input'
              type='radio'
              name='attend'
              value='inPerson'
              id='inPerson'
            />
            <label class='form-check-label' for='inPerson'>
              I will collect degree certificate in Person.
            </label>
          </div>
          {/* <input type="radio" name="inPersonopt" id="inPerson" value='inPerson'/>
        <label htmlFor="inPerson"> I will collect degree certificate in Person.</label> */}
          <div class='form-check'>
            <input
              class='form-check-input'
              type='radio'
              name='attend'
              value='courrier'
              id='courrier'
            />
            <label class='form-check-label' for='courrier'>
              I will collect degree certificates through courrier service.
            </label>
          </div>
        </div>
        <br />
        <br />
        <div class='form-check dash-infoCheckDiv'>
          <input
            class='form-check-input'
            type='checkbox'
            value=''
            id='infoCheck'
          />
          <label class='form-check-label' for='infoCheck'>
            <strong>
              I hereby declare that the information above stated above is true
              to the best of my knowlegde.
            </strong>
          </label>
        </div>
        <br />
        <br />
        <div>
          <button className='btn btn-dark dash-confirmBtn'>
            CONFIRM & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
