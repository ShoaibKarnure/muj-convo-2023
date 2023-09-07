import React from "react";

const CommForm = () => {
  return (
    <>
      <div className='right-div'>
        <form>
          <div className='comm-div'>
            <h2>Communication Details</h2>
            <div className='comm-inp-div'>
              <div className='comm-inp'>
                <input
                  type='number'
                  class='form-control'
                  placeholder='Phone Number'
                  id='phone'
                  min='1000000000'
                  max='9999999999'
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Address'
                  id='address'
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='City'
                  id='city'
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='State'
                  id='state'
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  type='number'
                  class='form-control'
                  placeholder='Pincode'
                  id='pincode'
                  required
                />
              </div>
              <div className='comm-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Country'
                  id='country'
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
                  type='text'
                  class='form-control'
                  placeholder='Account Holder Name'
                  id='AccHolderName'
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Account Number'
                  id='AccNum'
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Bank Name'
                  id='bankName'
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Bank Branch'
                  id='bankBranch'
                  required
                />
              </div>

              <div className='refund-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Bank Address'
                  id='bankAddress'
                  required
                />
              </div>
              <div className='refund-inp'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='IFSC Code'
                  id='IFSC'
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
              <button className='btn btn-outline-dark'>Save Details</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommForm;
