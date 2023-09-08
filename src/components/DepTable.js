import React from "react";

const DepTable = ({ dues, setDues }) => {
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
                {dues.map((due) => {
                  return (
                    <tr>
                      <td>{due.amount_due || "__"}</td>
                      <td>{due.details || "__"}</td>
                      <td>
                        {due.is_clear === undefined
                          ? "__"
                          : due.is_clear
                          ? "cleared"
                          : "clear"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepTable;
