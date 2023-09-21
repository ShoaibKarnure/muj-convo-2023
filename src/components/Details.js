import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import randomize from "randomatic";
const PAYU_MERCHANT_KEY = "kqfd6O";
const PAYU_SALT_KEY = "n0Qpybgx";

const Details = ({ singleUser }) => {
  const [companions, setCompanions] = useState("");
  const [attending, setAttending] = useState();

  //payment for without courier service
  const pd_in = {
    key: PAYU_MERCHANT_KEY,
    txnid: randomize("A0", 8),
    amount: 1,
    firstname: singleUser.student_name,
    email: singleUser.email,
    phone: singleUser.phone,
    productinfo: "Convocation Fees",
    surl: "http://localhost:3000/success",
    furl: "http://localhost:3000/fail",
    hash: "",
  };

  //payment for with courier service
  const pd_out = {
    key: PAYU_MERCHANT_KEY,
    txnid: randomize("A0", 8),
    amount: 2,
    firstname: singleUser.student_name,
    email: singleUser.email,
    phone: singleUser.phone,
    productinfo: "Convocation Fees",
    surl: "http://localhost:3000/success",
    furl: "http://localhost:3000/fail",
    hash: "",
  };

  // Data to be Sent to API to generate hash.
  let paymentData_out = {
    txnid: pd_out.txnid,
    email: pd_out.email,
    amount: pd_out.amount,
    productinfo: pd_out.productinfo,
    firstname: pd_out.firstname,
  };

  let paymentData_in = {
    txnid: pd_in.txnid,
    email: pd_in.email,
    amount: pd_in.amount,
    productinfo: pd_in.productinfo,
    firstname: pd_in.firstname,
  };

  const handlePaymentClick = () => {
    if (attending === "in-person") {
      handleClick_out();
    } else {
      handleClick_in();
    }
  };

  const handleClick_out = async () => {
    try {
      const res = await axios.post(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/student/payment/payumoney",
        {
          ...paymentData_out,
        }
      );
      const data = res.data;
      pd_out.hash = data.hash;
      redirectToPayU(pd_out);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick_in = async () => {
    try {
      const res = await axios.post(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/student/payment/payumoney",
        {
          ...paymentData_in,
        }
      );
      const data = res.data;
      pd_in.hash = data.hash;
      redirectToPayU(pd_in);
    } catch (err) {
      console.log(err);
    }
  };

  const redirectToPayU = (pd) => {
    console.log(pd);
    //use window.bolt.launch if you face an error in bolt.launch
    window.bolt.launch(pd, {
      responseHandler: async function (response) {
        try {
          console.log(response);
          const body = JSON.stringify(response.response);
          // your payment response Code goes here

          const res = await axios.post(
            "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/student/paymentResponse",
            body
          );
          const data = res.data;
          const { success, status } = data;
          if (status === "success") {
            try {
              let data;
              if (attending) {
                data = await axios.put(
                  `https://us-central1-muj-convocation-2023.cloudfunctions.net/app/student/update-student-payment-status/${singleUser.reg_no}`,
                  singleUser.reg_no,
                  response.response.payuMoneyId,
                  // outPersonDetails.day,
                  companions
                );
              } else {
                data = await axios.put(
                  `https://us-central1-muj-convocation-2023.cloudfunctions.net/app/student/update-student-payment-status/${singleUser.reg_no}`,
                  singleUser.reg_no,
                  response.response.payuMoneyId,
                  // inPersonDetails.day,
                  0
                );
              }
            } catch (err) {
              console.log(err);
            }
          }
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
    });
  };

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
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
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
              onChange={(e) => setAttending(e.target.value)}
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
              onChange={(e) => setAttending(e.target.value)}
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
          <button
            className='btn btn-dark dash-confirmBtn'
            onClick={handlePaymentClick}
          >
            CONFIRM & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
