import React, { useState } from 'react';

const OtpVerification = ({ otpVerify }) => {
    const verifyOtp = () => {
        otpVerify();
    };

    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center p-4">
            <div className="bg-white rounded shadow w-100" style={{ maxWidth: '900px', height: '500px', padding: '2rem' }}>
                {/* OTP Illustration */}
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src="/images/Aadhaar.png"
                        alt="OTP Verification"
                        style={{ width: '144px', height: 'auto', objectFit: 'contain' }}
                    />
                </div>

                {/* Heading */}
                <h2 className="text-center fw-semibold mb-2">Enter the OTP sent to your mobile</h2>
                <p className="text-center text-muted mb-4">
                    We've sent a 6-digit OTP to your registered mobile number. Please enter it below to verify your identity.
                </p>

                {/* OTP Input */}
                <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    maxLength="6"
                    className="form-control text-center mb-4 fs-4"
                />

                {/* Buttons */}
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-primary flex-fill"
                        onClick={verifyOtp}
                    >
                        Verify OTP
                    </button>
                    <button className="btn btn-warning text-white flex-fill">
                        Resend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
