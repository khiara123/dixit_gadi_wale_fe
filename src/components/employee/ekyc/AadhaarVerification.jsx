import React from "react";
import { useNavigate } from 'react-router-dom';

const AadhaarVerification = ({ getrateOtp }) => {
  const navigate = useNavigate();

  const genrateOtp = () => {
    getrateOtp();
  }

  const onCancel = () => {
    navigate('/employee');
  }
  
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="bg-white rounded-3 shadow-lg w-100" style={{ maxWidth: '900px', height: '500px' }}>
        <div className="p-4 p-sm-5">
          {/* Aadhaar Image */}
          <div className="d-flex justify-content-center mb-4">
            <img
              src="/images/Aadhaar.png"
              alt="Aadhaar"
              className="w-25"
            />
          </div>

          {/* Heading */}
          <h2 className="h4 text-center text-dark mb-3">
            Please enter your Aadhaar / VID Number
          </h2>
          <p className="small text-center text-muted mb-4">
            We will send you an OTP on your registered mobile number. It will reduce the number of fraudulent claims and help in effective settlement of genuine claims.
          </p>

          {/* Input */}
          <input
            type="text"
            placeholder="12 Digit Aadhaar / VID Number"
            className="form-control mb-4"
          />

          {/* Checkbox */}
          <div className="d-flex align-items-start gap-2 mb-4">
            <input
              type="checkbox"
              id="agree"
              className="mt-1"
            />
            <label htmlFor="agree" className="small text-muted">
              I authorize to use my Aadhaar details for authentication purposes and I accept
            </label>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-primary flex-fill" onClick={genrateOtp}>
              Send OTP
            </button>
            <button className="btn btn-warning flex-fill" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadhaarVerification;
