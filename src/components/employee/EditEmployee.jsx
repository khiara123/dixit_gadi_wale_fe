// import React, { useEffect, useState } from "react";
// import { useForm } from 'react-hook-form';
// import BasicInfo from "./personalInfo/BasicInfo";
// import AddressInfo from "./adressInfo/AddressInfo";
// import AcadmicInfo from "./acadmicInfo/AcadmicInfo";
// import ProfessionalInfo from "./professionalInfo/ProfessionalInfo"
// import BookingInfo from "./bookingInfo/BookingInfo";
// import routeAuthenticator from "../../shared/Auth";
// import employeeService from "../../services/employeeService";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getEmployeeById} from "../../features/employee/employeeSlice";
// import { useDispatch, useSelector} from 'react-redux';
// import Loader from "../../shared/Loader";


// const EditEmployee = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const employeeList = useSelector((state) => state.employee.employee)
//   const [profilePhoto, setProfilePhoto] = useState('')
//   const {id} = useParams();
  
//   const {register, handleSubmit,formState: { errors }, control, reset} = useForm({defaultValues: {
//     firstName: '',
//     lastName: '',
//     profilePhoto: '',
//     dateOfBirth: '',
//     isActive: true,
//     mobileNumber: '',
//     alternateMobileNumber: '',
//     addharNumber: '',
//     dlNumber: '',
//     address: {
//       street1: '',
//       street2: '',
//       city: '',
//       state: '',
//       postalCode: '',
//     },
//     bookingInformation: {
//       pickupDateAndTime: '',
//       dropDateAndTime: '',
//       vichelName: '',
//       vichelNumber: '',
//       chargePerDay: '',
//       refundableAmount: '',
//       totalPayable: ''
//     },
//     tripInformation: [{
//        hotelName: '',
//        roomNumber: '',
//        checkedInDate: '',
//        checkoutDate: ''
//     }]
//   }});

//   const [file, setFile] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const employeeById = employeeList?.data?.find((employee) => employee._id === id);
//     setProfilePhoto(employeeById?.profilePhoto)
//     if (employeeById) {
//       const dataURLtoBlob = (dataURL) => {
//         const arr = dataURL.split(',');
//         const mime = arr[0].match(/:(.*?);/)[1];
//         const bstr = atob(arr[1]);
//         let n = bstr.length;
//         const u8arr = new Uint8Array(n);
//         while (n--) {
//           u8arr[n] = bstr.charCodeAt(n);
//         }
//         return new Blob([u8arr], { type: mime });
//       };
//       const blob = dataURLtoBlob(employeeById.profilePhoto)
//       const file = new File([blob], 'profile_picture.png', {type: 'image/png'});
//       const fileList = new DataTransfer();
//       fileList.items.add(file);
//       const updatedEmployee = {...employeeById, profilePhoto: fileList.files};
//       reset(updatedEmployee);

//     }
//   }, [id, employeeList,reset,profilePhoto]) 

//   const handleProfile = async (data) => {
//       await setFile(data);
//   }
  
//   const onSubmit = async(data) => {
//     if(!file) {
//       data.profilePhoto = profilePhoto;
//       // const reader = new FileReader();
//       //        let base64 = null;
//       //         reader.onload =  (e) => {
//       //            base64 =  e.target.result;
//       //           data.profilePhoto = base64;
//       //        }
//       //         reader.readAsDataURL(data.profilePhoto[0])
//     } else {
//       data.profilePhoto = file;
//     }
//     setIsLoading(true);
//     const employeeResponse =  await employeeService.editEmployee(id, data);
//         if(employeeResponse.status === 200) {
//           dispatch(getEmployeeById(data));
//             toast.success("Employee is Edited Successfully");
//             setIsLoading(false);
//             navigate('/employee');
//         } else {
//           toast.error("Somthing went wrong");
//           setIsLoading(false);
//         }
//   };

//     const oncancel =() => {
//       navigate('/employee');
//     }
  
//   return (
//     <div className="p-10 my-10 max-w-6xl mx-auto bg-white md:shadow-lg">
//      {isLoading && <Loader isLoading = {isLoading}/>}
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <BasicInfo register = {register} errors = {errors} uploadProfile = {handleProfile} isEdit= {true} profilePhoto = {profilePhoto}/>
//         <AddressInfo register = {register} errors = {errors} />
//         <BookingInfo  register = {register} errors = {errors}/>
//         <ProfessionalInfo register = {register} errors = {errors} control = {control}/>
//         <div className="flex items-center justify-end gap-x-6">
//           <button
//             type="button"
//             className="text-sm font-semibold leading-6 text-gray-900"
//             onClick={oncancel}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Save Customer
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// const ProtecteEditEmployee = routeAuthenticator(EditEmployee)
// export default ProtecteEditEmployee


import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import BasicInfo from "./personalInfo/BasicInfo";
import AddressInfo from "./adressInfo/AddressInfo";
import AcadmicInfo from "./acadmicInfo/AcadmicInfo";
import ProfessionalInfo from "./professionalInfo/ProfessionalInfo";
import BookingInfo from "./bookingInfo/BookingInfo";
import routeAuthenticator from "../../shared/Auth";
import employeeService from "../../services/employeeService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getEmployeeById } from "../../features/employee/employeeSlice";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../../shared/Loader";

const EditEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employee.employee);
  const [profilePhoto, setProfilePhoto] = useState('');
  const { id } = useParams();

  const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
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
        chargePerDay: '',
        refundableAmount: '',
        totalPayable: ''
      },
      tripInformation: [{
        hotelName: '',
        roomNumber: '',
        checkedInDate: '',
        checkoutDate: ''
      }]
    }
  });

  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const employeeById = employeeList?.data?.find((employee) => employee._id === id);
    setProfilePhoto(employeeById?.profilePhoto);
    if (employeeById) {
      const dataURLtoBlob = (dataURL) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      };
      const blob = dataURLtoBlob(employeeById.profilePhoto);
      const file = new File([blob], 'profile_picture.png', { type: 'image/png' });
      const fileList = new DataTransfer();
      fileList.items.add(file);
      const updatedEmployee = { ...employeeById, profilePhoto: fileList.files };
      reset(updatedEmployee);
    }
  }, [id, employeeList, reset, profilePhoto]);

  const handleProfile = async (data) => {
    await setFile(data);
  };

  const onSubmit = async (data) => {
    if (!file) {
      data.profilePhoto = profilePhoto;
    } else {
      data.profilePhoto = file;
    }

    setIsLoading(true);
    const employeeResponse = await employeeService.editEmployee(id, data);
    if (employeeResponse.status === 200) {
      dispatch(getEmployeeById(data));
      toast.success("Employee is Edited Successfully");
      setIsLoading(false);
      navigate('/employee');
    } else {
      toast.error("Somthing went wrong");
      setIsLoading(false);
    }
  };

  const oncancel = () => {
    navigate('/employee');
  };

  return (
    <div className="container mt-4">
      {isLoading && <Loader isLoading={isLoading} />}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white border rounded p-4 shadow-sm mb-4">
        <BasicInfo
          register={register}
          errors={errors}
          uploadProfile={handleProfile}
          isEdit={true}
          profilePhoto={profilePhoto}
        />
        <AddressInfo register={register} errors={errors} />
        <BookingInfo register={register} errors={errors} />
        <ProfessionalInfo register={register} errors={errors} control={control} />
        <div className="d-flex justify-content-end mt-3 gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={oncancel}
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
  );
};

const ProtecteEditEmployee = routeAuthenticator(EditEmployee);
export default ProtecteEditEmployee;

