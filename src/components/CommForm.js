import React from "react";

const CommForm = () => {
  return (
    <>
      <div className="right-div">
        <div className="comm-div">
          <h2>Communication Details</h2>
          <div className="comm-inp-div">
            <div className="comm-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Phone Number"
                id="phone"
              />
            </div>
            <div className="comm-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Address"
                id="address"
              />
            </div>
            <div className="comm-inp">
              <input
                type="text"
                class="form-control"
                placeholder="City"
                id="city"
              />
            </div>
            <div className="comm-inp">
              <input
                type="text"
                class="form-control"
                placeholder="State"
                id="state"
              />
            </div>
            <div className="comm-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Pincode"
                id="pincode"
              />
            </div>
            <div className="comm-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Country"
                id="country"
              />
            </div>
          </div>
        </div>
        <div className="refund-div">
          <h2>Refund Details</h2>
          <div className="refund-inp-div">
            <div className="refund-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Account Holder Name"
                id="AccHolderName"
              />
            </div>
            <div className="refund-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Account Number"
                id="AccNum"
              />
            </div>
            <div className="refund-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Bank Name"
                id="bankName"
              />
            </div>
            <div className="refund-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Bank Branch"
                id="bankBranch"
              />
            </div>

            <div className="refund-inp">
              <input
                type="text"
                class="form-control"
                placeholder="Bank Address"
                id="bankAddress"
              />
            </div>
            <div className="refund-inp">
              <input
                type="text"
                class="form-control"
                placeholder="IFSC Code"
                id="IFSC"
              />
            </div>

            <div class="refund-inp">
              <label class="input-group-text" for="aadhaar-front">
                Aadhar Front Picture
              </label>
              <input
                type="file"
                class="form-control"
                id="aadhaar-front"
                placeholder="Aadhaar Front Picture"
              />
            </div>
            <div class="refund-inp">
              <label class="input-group-text" for="aadhaar-back">
                Aadhar Back Picture
              </label>
              <input
                type="file"
                class="form-control"
                id="aadhaar-back"
                placeholder="Aadhaar Back Picture"
              />
            </div>
            <div class="refund-inp">
              <label class="input-group-text" for="canceled-cheque">
                Canceled Cheque Picture
              </label>
              <input
                type="file"
                class="form-control"
                id="canceled-cheque"
                placeholder="Cancelled Cheque Picture"
              />
            </div>
          </div>
        </div>
        <div className="save-btn">
          <button className="btn btn-outline-dark">Save Details</button>
        </div>
      </div>
    </>
  );
};

export default CommForm;
