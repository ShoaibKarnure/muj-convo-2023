import React, { useEffect } from "react";
import axios from "axios";
const Details = () => {
  async function getUsers() {
    // const [details, setDetails] = useState();
    try {
      const response = await axios.get(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/auth/getUser",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjMzYTk2ODZmOWQ3ZWU1YWNhMzM1NSIsImlhdCI6MTY5MzcyMDM3NCwiZXhwIjoxNjkzNzU2Mzc0fQ.wX-wkgtj4QyEKyHuZ146XM-gXjUVjPWuBdbkHzXiQuI
`,
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  const user = {
    Faculty: "Faculty of CSE",
    School: "School of Computer Science",
    Program: "BTech. CSE",
    RegistrationNo: 12,
    StudentName: "Ananya",
    Gender: "F",
    Batch: "2025",
    Credits: "120",
    GPA: 10.26,
    Email: "ananya.219311187@muj.manipal.edu",
  };
  return (
    <div className='main-left'>
      <div className='left-div'>
        <h2 className='details-head '>Student Details</h2>
        <table className='deet-table table table-striped table-borderless'>
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
              <td>{user.Faculty}</td>
            </tr>
            <tr>
              <td>School</td>
              <td>{user.School}</td>
            </tr>
            <tr>
              <td>Program</td>
              <td>{user.Program}</td>
            </tr>
            <tr>
              <td>Registration No</td>
              <td>{user.RegistrationNo}</td>
            </tr>
            <tr>
              <td>Student Name</td>
              <td>{user.StudentName}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.Gender}</td>
            </tr>
            <tr>
              <td>Batch</td>
              <td>{user.Batch}</td>
            </tr>
            <tr>
              <td>Credits</td>
              <td>{user.Credits}</td>
            </tr>
            <tr>
              <td>GPA</td>
              <td>{user.GPA}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.Email}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div className='left-companions-div'>
          <p className='companions'>
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
        <div className='attendDiv'>
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
        <div class='form-check infoCheckDiv'>
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
          <button className='btn btn-dark confirmBtn'>CONFIRM & PAY</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Details;
