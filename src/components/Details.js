import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
const Details = ({ singleUser }) => {
  const [inPerson, setInPerson] = useState(true);

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(singleUser);
    e.target.value === "inPerson" ? setInPerson(true) : setInPerson(false);
  };

  return (
    <div className="dash-main-left">
      <div className="dash-left-div">
        <h2 className="dash-details-head ">Student Details</h2>
        <div className="table-responsive dash-table-div">
          <table className="dash-deet-table table table-striped table-borderless">
            <tbody>
              <tr className="table-dark">
                <th scope="col">Field</th>
                <th scope="col">Details</th>
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
                <th>Faculty</th>
                <td>{singleUser.faculty}</td>
              </tr>
              <tr>
                <th>School</th>
                <td>{singleUser.school}</td>
              </tr>
              <tr>
                <th>Program</th>
                <td>{singleUser.programme}</td>
              </tr>
              <tr>
                <th>Registration No</th>
                <td>{singleUser.reg_no}</td>
              </tr>
              <tr>
                <th>Student Name</th>
                <td>{singleUser.student_name}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{singleUser.gender}</td>
              </tr>
              <tr>
                <th>Batch</th>
                <td>{singleUser.batch}</td>
              </tr>
              <tr>
                <th>Credits</th>
                <td>{singleUser.credits}</td>
              </tr>
              <tr>
                <th>GPA</th>
                <td>{singleUser.cgpa}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{singleUser.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        {inPerson && (
          <>
            <div className="dash-left-companions-div">
              <p className="dash-companions">
                <strong>Choose no. of companions attending with you</strong>
              </p>
              <select
                name="companions"
                id="companions"
                className="form-select companions-select"
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>

            <br />
            <br />
          </>
        )}
        <div className="dash-attendDiv">
          <p>
            <strong>Will you be attending the convocation In-Person? </strong>
          </p>
          <div
            className="form-check"
            style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="attend"
              value="inPerson"
              id="inPerson"
              onChange={handleChange}
              style={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                borderColor: "lightgray",
              }}
            />
            <label className="form-check-label" htmlFor="inPerson">
              I will collect degree certificate in Person.
            </label>
          </div>
          {/* <input type="radio" name="inPersonopt" id="inPerson" value='inPerson'/>
        <label htmlFor="inPerson"> I will collect degree certificate in Person.</label> */}
          <div
            className="form-check"
            style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="attend"
              value="courrier"
              id="courrier"
              onChange={handleChange}
              style={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                borderColor: "lightgray",
              }}
            />
            <label className="form-check-label" htmlFor="courrier">
              I will collect degree certificates through courrier service.
            </label>
          </div>
        </div>
        <br />
        <br />
        <div
          className="form-check dash-infoCheckDiv"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="infoCheck"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              borderColor: "lightgray",
            }}
          />
          <label className="form-check-label" htmlForr="infoCheck">
            <strong>
              I hereby declare that the information above stated above is true
              to the best of my knowlegde.
            </strong>
          </label>
        </div>
        <br />
        <br />
        {!singleUser.is_paid ? (
          <div>
            <button className="btn btn-dark dash-confirmBtn">
              CONFIRM & PAY
            </button>
          </div>
        ) : (
          <div style={{textAlign:'center',margin:'20px 0'}}>
            <h4>
              CONGRATULATIONS! <br/> You have successfully registerd for <br/>MUJ 10th
              Convocation.
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
