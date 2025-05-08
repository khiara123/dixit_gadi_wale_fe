import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import authService from "../services/authService";

const InquiryForm = () => {
  const [toastMessge, setTostMeass] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const carType = watch("carType");

  const onSubmit = (data) => {
    setLoading(true);
    authService
      .userInquiry(data)
      .then((data) => {
        if(data) {
            setTostMeass("Thank you for Inquiry , we will contacting you soon");
            setLoading(false);
        }
      })
      .catch((err) => {
      setTostMeass("Sorry Something went wrong!");
        setIsError(true)
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!toastMessge) return;
    const timer = setTimeout(() => {
      setTostMeass("");     // Clear the message
      setIsError(false);
      reset();    // Reset the error flag
    }, 5000);
  
    return () => clearTimeout(timer); // Cleanup if toastMessage changes before 3s
  }, [toastMessge]);

  useEffect(() => {
    if (carType === "Bike/Scooty") {
      setValue("pickupCity", "Mathura");
    }
  }, [carType, setValue]);

  return (
    <div
      className="col-lg-6 fadeInLeft animated"
      data-animation="fadeInLeft"
      data-delay="1s"
      style={{ animationDelay: "1s" }}
    >
      <div className="bg-secondary rounded p-5">
        <h4 className="text-white mb-4">CONTINUE CAR & BIKE INQUIRY</h4>
       {toastMessge && <div className= {`alert  ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
          {toastMessge}
        </div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            {/* Name with icon */}
            <div className="col-12">
              <div className="input-group">
                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                  <span className="fas fa-user"></span>
                  <span className="ms-1">Name</span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z ]+$/,
                      message: "Enter a valid name",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <div className="text-start">
                  <small className="text-danger">{errors.name.message}</small>
                </div>
              )}
            </div>

            {/* Mobile Number with icon */}
            <div className="col-12">
              <div className="input-group">
                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                  <span className="fas fa-phone"></span>
                  <span className="ms-1">Mobile</span>
                </div>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  })}
                />
              </div>
              {errors.mobile && (
                <div className="text-start">
                  <small className="text-danger">{errors.mobile.message}</small>
                </div>
              )}
            </div>
            {/* Car type */}
            <div className="col-12">
              <div className="input-group">
                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                  <span className="fas fa-car"></span>
                  <span className="ms-1">Car Type</span>
                </div>
                <select
                  className="form-select"
                  {...register("carType", {
                    required: "Please select a car type",
                  })}
                >
                  <option value="">Select Your Car type</option>
                  <option value="Vintage_Car">Vintage Car</option>
                  <option value="BMW">BMW</option>
                  <option value="Inova Crysta">Inova Crysta</option>
                  <option value="XUV_700">XUV 700</option>
                  <option value="Fortuner">Fortuner</option>
                  <option value="Bike/Scooty">Bike/Scooty</option>
                </select>
              </div>
              {errors.carType && (
                <div className="text-start">
                  <small className="text-danger">
                    {errors.carType.message}
                  </small>
                </div>
              )}
            </div>

            {/* Pick up location */}
            <div className="col-12">
              <div className="input-group">
                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                  <span className="fas fa-map-marker-alt"></span>
                  <span className="ms-1">Pick Up</span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter a City"
                  {...register("pickupCity", {
                    required: "Pick up city is required",
                    
                  })}
                  value={carType === "Bike/Scooty" ? "Mathura" : undefined}
                  readOnly={carType === "Bike/Scooty"}
                />
              </div>
              {errors.pickupCity && (
                <div className="text-start">
                  <small className="text-danger">
                    {errors.pickupCity.message}
                  </small>
                </div>
              )}
            </div>

            {/* Drop off location */}
            {carType !== "Bike/Scooty" && (
              <div className="col-12">
                <div className="input-group">
                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                    <span className="fas fa-map-marker-alt"></span>
                    <span className="ms-1">Drop off</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter a City"
                    {...register("dropoffCity", {
                      required: "Drop off city is required",
                    })}
                  />
                </div>
                {errors.dropoffCity && (
                  <div className="text-start">
                    <small className="text-danger">
                      {errors.dropoffCity.message}
                    </small>
                  </div>
                )}
              </div>
            )}
            {/* Pick up date and time */}
            <div className="col-12">
              <div className="input-group">
                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                  <span className="fas fa-calendar-alt"></span>
                  <span className="ms-1">Pick Up</span>
                </div>
                <input
                  className="form-control"
                  type="date"
                  {...register("pickupDate", {
                    required: "Pick up date is required",
                    validate: {
                        minDate: (value) => {
                          return value >= today || "Pick up date cannot be in the past";
                        },
                      },
                  })}
                  min={today}
                />
              </div>
              {errors.pickupDate && (
                <div className="text-start">
                  <small className="text-danger">
                    {errors.pickupDate?.message}
                  </small>
                </div>
              )}
            </div>

            {/* Drop off date and time */}
            <div className="col-12">
              <div className="input-group">
                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                  <span className="fas fa-calendar-alt"></span>
                  <span className="ms-1">Drop off</span>
                </div>
                <input
                  className="form-control"
                  type="date"
                  {...register("dropoffDate", {
                    required: "Drop off date is required",
                    validate: {
                        minDropoff: (value) => {
                          const pickupDateValue = watch("pickupDate");
                          return (
                            value >= pickupDateValue ||
                            "Drop off date cannot be before pickup date"
                          );
                        },
                      },
                  })}
                  min={watch("pickupDate") || today}
                />
              </div>
              {errors.dropoffDate && (
                <div className="text-start">
                  <small className="text-danger">
                    {errors.dropoffDate?.message}
                  </small>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="col-12">
              <button type="submit" className="btn btn-light w-100 py-2" disabled ={loading}>
                INQUIRY NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
