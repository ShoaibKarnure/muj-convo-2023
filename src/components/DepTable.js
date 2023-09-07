import React from "react";

const DepTable = () => {
  return (
    <div>
      <div className='table'>
        <h1>All Dues</h1>
        <br />
        <div>
          <div>
            <table class='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Details</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>___</td>
                  <td>___</td>
                  <td>___</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepTable;
