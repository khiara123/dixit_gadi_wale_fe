import React, { useState, useEffect, useContext } from "react";
import { useForm } from 'react-hook-form';
import { differenceInHours, parseISO } from 'date-fns';
import BasicInfo from "./personalInfo/BasicInfo";
import AddressInfo from "./adressInfo/AddressInfo";
import ProfessionalInfo from "./professionalInfo/ProfessionalInfo";
import AadhaarVerification from "./ekyc/AadhaarVerification";
import routeAuthenticator from "../../shared/Auth";
import employeeService from "../../services/employeeService";
import OtpVerification from "./ekyc/OtpVerification";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addEmployeeAction } from "../../features/employee/employeeSlice";
import BookingInfo from "./bookingInfo/BookingInfo";
import Loader from "../../shared/Loader";
import { EmployeeContext } from './EmployeeContext';

const AddEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notifyParent } = useContext(EmployeeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      profilePhoto: '',
      dateOfBirth: '',
      isActive: true,
      mobileNumber: '',
      alternateMobileNumber: '',
      addharNumber: '',
      dlNumber: '',
      address: {
        street1: '',
        street2: '',
        city: '',
        state: '',
        postalCode: '',
      },
      bookingInformation: {
        pickupDateAndTime: '',
        dropDateAndTime: '',
        vichelName: '',
        vichelNumber: '',
        chargePerDay: '500',
        refundableAmount: '1000',
        totalPayable: '1500'
      },
      tripInformation: [{
        hotelName: '',
        roomNumber: '',
        checkedInDate: '',
        checkoutDate: ''
      }],
    }
  });

  const bookingInformation = watch('bookingInformation');
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [isAdharSubmitted, setIsAdharSubmitted] = useState(false);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const handleProfile = async (data) => {
    await setFile(data);
  };

  useEffect(() => {
    if (bookingInformation.pickupDateAndTime && bookingInformation.dropDateAndTime) {
      const parsedPickup = parseISO(bookingInformation.pickupDateAndTime);
      const parsedDrop = parseISO(bookingInformation.dropDateAndTime);
      let hours = differenceInHours(parsedDrop, parsedPickup);
      if (hours > 24) {
        hours = Math.max(0, hours - 2);
      }
      const days = Math.max(1, Math.ceil(hours / 24));
      const totalPayable = days * parseInt(bookingInformation.chargePerDay) + parseInt(bookingInformation.refundableAmount);
      setValue('bookingInformation.totalPayable', totalPayable);
    }
  }, [bookingInformation.pickupDateAndTime, bookingInformation.dropDateAndTime, bookingInformation.chargePerDay, bookingInformation.refundableAmount, setValue]);

  const otpSubmit = () => {
    const data = {};
    setIsLoading(true);
    employeeService.genrateOtp(data).then((data) => {
      if (data) {
        setIsAdharSubmitted(true);
        toast.success("We have sent the OTP to your registered mobile number");
      }
      setIsLoading(false);
    }).catch(() => setIsLoading(false));
  };

  const verifyOtp = () => {
    const data = {};
    setIsLoading(true);
    employeeService.verifyOtp(data).then((data) => {
      if (data) {
        setIsOtpSubmitted(true);
      }
      setIsLoading(false);
    }).catch(() => setIsLoading(false));
  };

  const onCancel = () => {
    setIsOtpSubmitted(false);
    setIsAdharSubmitted(false);
  };

  const onSubmit = (data) => {
    data.profilePhoto = file;
    setIsLoading(true);
    employeeService.addEmployee(data).then((data) => {
      if (data) {
        toast.success("Employee is added successfully");
        notifyParent();
        navigate('/employee');
      }
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
      toast.error("Something went wrong");
    });
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}

      {!isAdharSubmitted && <AadhaarVerification getrateOtp={otpSubmit} />}

      {(isAdharSubmitted && !isOtpSubmitted) && <OtpVerification otpVerify={verifyOtp} />}

      {(isAdharSubmitted && isOtpSubmitted) && (
        <div className="container bg-white shadow rounded p-4 my-4">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <BasicInfo register={register} errors={errors} uploadProfile={handleProfile} watch = {watch} />
            <AddressInfo register={register} errors={errors} watch = {watch} />
            <BookingInfo register={register} errors={errors} watch = {watch} />
            <ProfessionalInfo register={register} errors={errors} control={control} watch = {watch} />

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Customer
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

const ProtecteAddEmployee = routeAuthenticator(AddEmployee);
export default ProtecteAddEmployee;
