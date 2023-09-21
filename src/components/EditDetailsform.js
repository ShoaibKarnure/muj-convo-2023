import React from "react";
import vector from "../assets/medium-wave.png";
import {
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";

const EditDetailsform = () => {
  return (
    <>
      <div className="dash-layer">
        <div className="dash-super">
          <div className="dash-mainy">
            <div className="formGroupDiv" style={{ width: "100%" }}>
              <FormGroup>
                <form>
                  <h2 style={{ textAlign: "center" }}>Communication Details</h2>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Phone Number
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="name"
                      variant="outlined"
                      // type={ques.type}
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Address
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="address"
                      variant="outlined"
                      // type={ques.type}
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      City
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="city"
                      variant="outlined"
                      // type={ques.type}
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      District
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="district"
                      variant="outlined"
                      // type={ques.type}
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Pincode
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="pincode"
                      variant="outlined"
                      type="number"
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      State
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="state"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Country
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="country"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }}>Refund Details</h2>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Account Holder Name
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="account-holder-name"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Account Number
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="account-number"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Bank Name
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="bank-name"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Bank Branch Name
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="bank-branch-name"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      Bank Address
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="bank-address"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div className="ques-div">
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      IFSC Code
                    </p>
                    <TextField
                      fullWidth
                      required
                      name="ifsc-code"
                      variant="outlined"
                      //   type='number'
                      value=""
                      // onChange={handleChange}
                      placeholder="Answer"
                      label="Required"
                    />
                  </div>
                  <div class="refund-inp">
                    <label class="input-group-text" for="aadhaar-front">
                      <strong> Aadhar Front Picture</strong>
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="aadhaar-front"
                      placeholder="Aadhaar Front Picture"
                      required
                    />
                  </div>
                  <div class="refund-inp">
                    <label class="input-group-text" for="aadhaar-back">
                      <strong> Aadhar Back Picture</strong>
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="aadhaar-back"
                      placeholder="Aadhaar Back Picture"
                      required
                    />
                  </div>
                  <div class="refund-inp">
                    <label class="input-group-text" for="canceled-cheque">
                      <strong>Canceled Cheque Picture</strong>
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="canceled-cheque"
                      placeholder="Cancelled Cheque Picture"
                      required
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" ,marginTop:'40px'}}>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  type="submit"
                //   onClick={handleSubmit}
                >
                  <span style={{ fontSize: "1.1rem" }}>
                    Save Details
                  </span>
                </Button>
              </div>
                </form>
              </FormGroup>
              
            </div>
          </div>
        </div>
        <img src={vector} alt="" className="dash-vector" />
      </div>
    </>
  );
};

export default EditDetailsform;
