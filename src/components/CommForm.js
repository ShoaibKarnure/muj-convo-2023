import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
const CommForm = ({ singleUser }) => {
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const [formData, setFormData] = useState({
    country: singleUser.country || "",
    phone: singleUser.phone || "",
    state: singleUser.state || "",
    city: singleUser.city || "",
    district: singleUser.district || "",
    address: singleUser.address || "",
    pincode: singleUser.pincode || "",
    checked: false,
    account_holder_name: singleUser.account_holder_name || "",
    bank_address: singleUser.bank_address || "",
    account_number: singleUser.account_number || "",
    bank_name: singleUser.bank_name || "",
    branch_name: singleUser.branch_name || "",
    ifsc_code: singleUser.ifsc_code || "",
    aadhar_front_picture: singleUser.aadhar_front_picture || "",
    aadhar_back_picture: singleUser.aadhar_back_picture || "",
    cancel_check: singleUser.cancel_check || "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    try {
      const response = axios.post(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/auth/add-communication-data",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className='right-div'>
        <form>
          <div className='comm-div'>
            <h2>Communication Details</h2>
            <div className='comm-inp-div'>
              <div className='comm-inp'>
                <input
                  name='phone'
                  type='number'
                  class='form-control'
                  placeholder='Phone Number'
                  id='phone'
                  min='1000000000'
                  max='9999999999'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  name='address'
                  type='text'
                  class='form-control'
                  placeholder='Address'
                  id='address'
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  name='city'
                  type='text'
                  class='form-control'
                  placeholder='City'
                  id='city'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  name='state'
                  type='text'
                  class='form-control'
                  placeholder='State'
                  id='state'
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  name='pincode'
                  type='number'
                  class='form-control'
                  placeholder='Pincode'
                  id='pincode'
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  name='country'
                  type='text'
                  class='form-control'
                  placeholder='Country'
                  id='country'
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className='refund-div'>
            <h2>Refund Details</h2>

            <div className='refund-inp-div'>
              <div className='refund-inp'>
                <input
                  name='account_holder_name'
                  type='text'
                  class='form-control'
                  placeholder='Account Holder Name'
                  id='AccHolderName'
                  value={formData.account_holder_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  name='account_number'
                  type='text'
                  class='form-control'
                  placeholder='Account Number'
                  id='AccNum'
                  value={formData.account_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  name='bank_name'
                  type='text'
                  class='form-control'
                  placeholder='Bank Name'
                  id='bankName'
                  value={formData.bank_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  name='branch_name'
                  type='text'
                  class='form-control'
                  placeholder='Bank Branch'
                  id='bankBranch'
                  value={formData.branch_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='refund-inp'>
                <input
                  name='bank_address'
                  type='text'
                  class='form-control'
                  placeholder='Bank Address'
                  id='bankAddress'
                  value={formData.bank_address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  name='ifsc_code'
                  type='text'
                  class='form-control'
                  placeholder='IFSC Code'
                  id='IFSC'
                  value={formData.ifsc_code}
                  onChange={handleChange}
                  required
                />
              </div>

              <div class='refund-inp'>
                <label class='input-group-text' for='aadhaar-front'>
                  Aadhar Front Picture
                </label>
                <input
                  type='file'
                  class='form-control'
                  id='aadhaar-front'
                  placeholder='Aadhaar Front Picture'
                  required
                />
              </div>
              <div class='refund-inp'>
                <label class='input-group-text' for='aadhaar-back'>
                  Aadhar Back Picture
                </label>
                <input
                  type='file'
                  class='form-control'
                  id='aadhaar-back'
                  placeholder='Aadhaar Back Picture'
                  required
                />
              </div>
              <div class='refund-inp'>
                <label class='input-group-text' for='canceled-cheque'>
                  Canceled Cheque Picture
                </label>
                <input
                  type='file'
                  class='form-control'
                  id='canceled-cheque'
                  placeholder='Cancelled Cheque Picture'
                  required
                />
              </div>
            </div>
            <div className='save-btn'>
              <button className='btn btn-outline-dark' onClick={handleSubmit}>
                Save Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommForm;
