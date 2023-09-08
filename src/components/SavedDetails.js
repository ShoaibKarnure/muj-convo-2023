import React from "react";

const SavedDetails = ({ singleUser, setSingleUser }) => {
  return (
    <div className='table-responsive table-div'>
      <div className='savedDeet-div '>
        <h2
          style={{ textAlign: "center", margin: "10px", marginBottom: "20px" }}
        >
          Communication & Refund Details
        </h2>
        <table className='table table-striped table-borderless'>
          <tbody>
            <tr>
              <th scope='col'>Field</th>
              <th scope='col'>Details</th>
            </tr>
            <tr>
              <td>Address</td>
              <td></td>
            </tr>
            <tr>
              <td>Bank Address</td>
              <td></td>
            </tr>
            <tr>
              <td>Bank Name</td>
              <td></td>
            </tr>
            <tr>
              <td>Branch Name</td>
              <td></td>
            </tr>
            <tr>
              <td>City</td>
              <td></td>
            </tr>
            <tr>
              <td>Country</td>
              <td></td>
            </tr>
            <tr>
              <td>District</td>
              <td></td>
            </tr>
            <tr>
              <td>IFSC Code</td>
              <td></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td></td>
            </tr>
            <tr>
              <td>Pincode</td>
              <td></td>
            </tr>
            <tr>
              <td>State</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className='edit-details-btn'>
          <button className='btn btn-outline-dark'>Edit Details</button>
        </div>
      </div>
    </div>
  );
};

export default SavedDetails;
