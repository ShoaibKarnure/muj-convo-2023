import React from "react";

const SavedDetails = ({ singleUser, setSingleUser }) => {
  return (
    <div className="table-responsive saved-table-div">
      <div className="savedDeet-div ">
        <h2
          style={{ textAlign: "center", margin: "10px", marginBottom: "20px" }}
        >
          Communication & Refund Details
        </h2>
        <table className="table table-striped table-borderless">
          <tbody>
            <tr className="table-dark">
              <th scope="col">Field</th>
              <th scope="col">Details</th>
            </tr>
            <tr>
              <th>Address</th>
              <td></td>
            </tr>
            <tr>
              <th>Bank Address</th>
              <td></td>
            </tr>
            <tr>
              <th>Bank Name</th>
              <td></td>
            </tr>
            <tr>
              <th>Branch Name</th>
              <td></td>
            </tr>
            <tr>
              <th>City</th>
              <td></td>
            </tr>
            <tr>
              <th>Country</th>
              <td></td>
            </tr>
            <tr>
              <th>District</th>
              <td></td>
            </tr>
            <tr>
              <th>IFSC Code</th>
              <td></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td></td>
            </tr>
            <tr>
              <th>Pincode</th>
              <td></td>
            </tr>
            <tr>
              <th>State</th>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="edit-details-btn">
          <button className="btn btn-outline-dark">Edit Details</button>
        </div>
      </div>
    </div>
  );
};

export default SavedDetails;
