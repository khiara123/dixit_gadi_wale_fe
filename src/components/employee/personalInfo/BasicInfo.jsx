// import React, { useEffect, useState } from 'react'
// import classes from './BasicInfo.module.css'
// const BasicInfo = ({register, errors,uploadProfile, isEdit,profilePhoto}) => {
//     const [imageSrc , setImageSrc] = useState('')
//     useEffect (() => {
//         if(isEdit) {
//             setImageSrc(profilePhoto);
//         }
//     },  [profilePhoto, isEdit]) 
//     const handleFileChange =  (e) => {
//         if(e.target.files[0] ) {
//              const reader = new FileReader();
//              let base64 = null;
//               reader.onload =  (e) => {
//                  base64 =  e.target.result;
//                  if(base64) {
//                     uploadProfile(base64);
//                     setImageSrc(base64);
//                  }
//              }
//               reader.readAsDataURL(e.target.files[0])
            
//         }
//     }

//    const validateFile = (file) => {
//     if(!isEdit) {
//         if(file.length === 0) {
//             return 'Please upload a file'
//           } else {
//             const allowFormat = ['image/jpeg','image/jpg', 'image/png'];
//             if(!allowFormat.includes(file[0].type)) return 'Please upload JPEG, PNG format'
//           }
//     } else{
//         const allowFormat = ['image/jpeg','image/jpg', 'image/png'];
//             if(!allowFormat.includes(file[0].type)) return 'Please upload JPEG, PNG format'
//     }
          
//    }

   
//   return (
//     <>
//     <div className="space-y-12">
//     <div className="pb-12 pt-4">
//       <div className='header-part px-0'>
//       <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//       <p className="mt-1 text-sm leading-6 text-gray-600">Please fill all the basic details of the customer.</p>
//       <p className={classes.borderout}></p>
//       </div>
     
//       <div className={`${isEdit ? 'col-span-6': 'col-span-full'} mt-4`}>
//           <label for="profilePhoto" className="block text-sm font-medium leading-6 text-gray-900">Profile photo</label>
//           <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//             <div className="text-center">
//               {isEdit ? <img src={imageSrc} className='h-44 w-40' alt='userprofile'/> :<svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                 <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
//               </svg>}
//               <div className="mt-4  text-sm leading-6 text-gray-600">
//                 <label for="profilePhoto" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
//                   {isEdit ? <><span>Change Profile Photo</span>
//                   <input id="profilePhoto" name="profilePhoto" {...register("profilePhoto", {validate: validateFile})} onChange= {handleFileChange} type="file" className="sr-only"/></> : <> <span>Upload a Profile Phpto</span>
//                   <input id="profilePhoto" name="profilePhoto" {...register("profilePhoto", {validate: validateFile})} onChange= {handleFileChange} type="file" className="sr-only"/></>}
//                 </label>
//               </div>
//               <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 1MB</p>
//             </div>
//           </div>
//           {errors && errors?.profilePhoto?.message && <p className='text-red-600'>{errors?.profilePhoto?.message}</p> }
//         </div>
//       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//         <div className="sm:col-span-3">
//           <label for="firstName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
//           <div className="mt-2">
//             <input type="text" name="firstName" id="firstName" {...register("firstName", { required: 'Please enter first name',  pattern: {value: /^[A-Za-z]+$/, message: 'Please enter valid name'}})} autocomplete="given-name" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.firstName?.message && <p className='text-red-600'>{errors?.firstName?.message}</p> }
//         </div>

//         <div className="sm:col-span-3">
//           <label for="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
//           <div className="mt-2">
//             <input type="text" name="lastName" id="lastName" {...register("lastName", { required: 'Please enter last name',  pattern: {value: /^[A-Za-z]+$/, message: 'Please enter valid name'}})}autocomplete="family-name" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.lastName?.message && <p className='text-red-600'>{errors?.lastName?.message}</p> }
//         </div>
//         <div className="sm:col-span-3">
//           <label for="dateOfBirth" className="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
//           <div className="mt-2">
//             <input id="dateOfBirth" name="dateOfBirth" type="date" {...register("dateOfBirth", { required: 'Please enter date of birth'})} autocomplete="date" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.dateOfBirth?.message && <p className='text-red-600'>{errors?.dateOfBirth?.message}</p> }
//         </div>
//         <div className="sm:col-span-3">
//           <label for="mobileNumber" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
//           <div className="mt-2">
//             <input id="mobileNumber" name="mobileNumber" type="text" {...register("mobileNumber", { required: 'Please enter mobile number'})} autocomplete="mobileNumber" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.mobileNumber?.message && <p className='text-red-600'>{errors?.mobileNumber?.message}</p> }
//         </div>
//         <div className="sm:col-span-3">
//           <label for="alternateMobileNumber" className="block text-sm font-medium leading-6 text-gray-900">Alternate Mobile Number</label>
//           <div className="mt-2">
//             <input id="alternateMobileNumber" name="alternateMobileNumber" type="text" {...register("alternateMobileNumber", { required: 'Please enter alternate mobile number'})} autocomplete="alternateMobileNumber" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.alternateMobileNumber?.message && <p className='text-red-600'>{errors?.alternateMobileNumber?.message}</p> }
//         </div>
//         <div className="sm:col-span-3">
//           <label for="addharNumber" className="block text-sm font-medium leading-6 text-gray-900">Addhar Number</label>
//           <div className="mt-2">
//             <input id="addharNumber" name="addharNumber" type="text" {...register("addharNumber", { required: 'Please enter addhar number'})} autocomplete="addharNumber" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.addharNumber?.message && <p className='text-red-600'>{errors?.addharNumber?.message}</p> }
//         </div>
//         <div className="sm:col-span-3">
//           <label for="dlNumber" className="block text-sm font-medium leading-6 text-gray-900">DL Number</label>
//           <div className="mt-2">
//             <input id="dlNumber" name="dlNumber" type="text" {...register("dlNumber", { required: 'Please enter Driver License number'})} autocomplete="dlNumber" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.dlNumber?.message && <p className='text-red-600'>{errors?.dlNumber?.message}</p> }
//         </div>
        
//         <div class="sm:col-span-3 flex gap-x-3">
//               <div class="flex h-6 items-center">
//                 <input id="isActive" name="isActive" {...register("isActive", { setValueAs: value => !! value})} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
//               </div>
//               <div class="text-sm leading-6">
//                 <label for="candidates" class="font-medium text-gray-900">Active Customer</label>
//                 <p class="text-gray-500">Customer is active on ride</p>
//               </div>
//             </div>
//       </div>
//     </div>
//   </div>
//   </>
//   )
// }

// export default BasicInfo

// import React, { useEffect, useState } from 'react';


// const BasicInfo = ({ register, errors, uploadProfile, isEdit, profilePhoto }) => {
//   const [imageSrc, setImageSrc] = useState('');

//   useEffect(() => {
//     if (isEdit) {
//       setImageSrc(profilePhoto);
//     }
//   }, [profilePhoto, isEdit]);

//   const handleFileChange = (e) => {
//     console.log("e.target.files[0]", e.target.files[0])
//     if (e.target.files[0]) {
//       const reader = new FileReader();
//       let base64 = null;
//       reader.onload = (e) => {
//         base64 = e.target.result;
//         if (base64) {
//           uploadProfile(base64);
//           setImageSrc(base64);
//         }
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const validateFile = (file) => {
//         if(!isEdit) {
//             if(file.length === 0) {
//                 return 'Please upload a file'
//               } else {
//                 const allowFormat = ['image/jpeg','image/jpg', 'image/png'];
//                 if(!allowFormat.includes(file[0].type)) return 'Please upload JPEG, PNG format'
//               }
//         } else{
//             const allowFormat = ['image/jpeg','image/jpg', 'image/png'];
//                 if(!allowFormat.includes(file[0].type)) return 'Please upload JPEG, PNG format'
//         }
              
//        };

//   return (
//     <div className="container mt-4">
//       <h4>Personal Information</h4>
//       <p className="text-muted">Please fill all the basic details of the customer.</p>
//       <hr />

//       {/* Profile Photo Upload */}
// <div className="mb-4">
//   <label htmlFor="profilePhoto" className="form-label fw-bold">Profile Photo</label>
//   <div className="d-flex align-items-center flex-column text-center">
//     <div
//       className="rounded-circle border border-secondary d-flex justify-content-center align-items-center overflow-hidden mb-2"
//       style={{
//         width: '140px',
//         height: '140px',
//         cursor: 'pointer',
//         backgroundColor: '#f8f9fa',
//       }}
//       onClick={() => document.getElementById('profilePhotoInput').click()}
//     >
//       {imageSrc ? (
//         <img
//           src={imageSrc}
//           alt="Profile"
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       ) : (
//         <i className="bi bi-person-circle text-secondary" style={{ fontSize: '5rem' }}></i>
//       )}
//     </div>

//     <input
//   id="profilePhotoInput"
//   name="profilePhoto"
//   type="file"
//   className="d-none"
//   {...register("profilePhoto", {
//     validate: validateFile,
//     onChange: (e) => {
//       handleFileChange(e);
//     },
//   })}
// />
//     <button
//       className="btn btn-outline-primary btn-sm"
//       type="button"
//       onClick={() => document.getElementById('profilePhotoInput').click()}
//     >
//       {isEdit ? 'Change Photo' : 'Upload Photo'}
//     </button>

//     <div className="form-text">PNG, JPG up to 1MB</div>
//     {errors?.profilePhoto?.message && <div className="text-danger mt-2">{errors.profilePhoto.message}</div>}
//   </div>
// </div>

//       <div className="row g-3">
//         <div className="col-md-6">
//           <label htmlFor="firstName" className="form-label">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             className="form-control"
//             {...register("firstName", {
//               required: 'Please enter first name',
//               pattern: { value: /^[A-Za-z]+$/, message: 'Please enter valid name' }
//             })}
//           />
//           {errors?.firstName?.message && <div className="text-danger">{errors.firstName.message}</div>}
//         </div>

//         <div className="col-md-6">
//           <label htmlFor="lastName" className="form-label">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             className="form-control"
//             {...register("lastName", {
//               required: 'Please enter last name',
//               pattern: { value: /^[A-Za-z]+$/, message: 'Please enter valid name' }
//             })}
//           />
//           {errors?.lastName?.message && <div className="text-danger">{errors.lastName.message}</div>}
//         </div>

//         <div className="col-md-6">
//           <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
//           <input
//             type="date"
//             id="dateOfBirth"
//             className="form-control"
//             {...register("dateOfBirth", { required: 'Please enter date of birth' })}
//           />
//           {errors?.dateOfBirth?.message && <div className="text-danger">{errors.dateOfBirth.message}</div>}
//         </div>

//         <div className="col-md-6">
//           <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             className="form-control"
//             {...register("mobileNumber", { required: 'Please enter mobile number' })}
//           />
//           {errors?.mobileNumber?.message && <div className="text-danger">{errors.mobileNumber.message}</div>}
//         </div>

//         <div className="col-md-6">
//           <label htmlFor="alternateMobileNumber" className="form-label">Alternate Mobile Number</label>
//           <input
//             type="text"
//             id="alternateMobileNumber"
//             className="form-control"
//             {...register("alternateMobileNumber", { required: 'Please enter alternate mobile number' })}
//           />
//           {errors?.alternateMobileNumber?.message && <div className="text-danger">{errors.alternateMobileNumber.message}</div>}
//         </div>

//         <div className="col-md-6">
//           <label htmlFor="addharNumber" className="form-label">Aadhaar Number</label>
//           <input
//             type="text"
//             id="addharNumber"
//             className="form-control"
//             {...register("addharNumber", { required: 'Please enter Aadhaar number' })}
//           />
//           {errors?.addharNumber?.message && <div className="text-danger">{errors.addharNumber.message}</div>}
//         </div>

//         <div className="col-md-6">
//           <label htmlFor="dlNumber" className="form-label">DL Number</label>
//           <input
//             type="text"
//             id="dlNumber"
//             className="form-control"
//             {...register("dlNumber", { required: 'Please enter DL number' })}
//           />
//           {errors?.dlNumber?.message && <div className="text-danger">{errors.dlNumber.message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicInfo;

import React, { useEffect, useState } from 'react';
import { differenceInYears } from 'date-fns';

const BasicInfo = ({ register, errors, uploadProfile, isEdit, profilePhoto }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (isEdit) {
      setImageSrc(profilePhoto);
    }
  }, [profilePhoto, isEdit]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        if (base64) {
          uploadProfile(base64);
          setImageSrc(base64);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validateFile = (file) => {
    const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!isEdit && file.length === 0) {
      return 'Please upload a file';
    }
    if (file.length > 0 && !allowedFormats.includes(file[0].type)) {
      return 'Please upload JPEG, PNG format';
    }
  };

  return (
    <div className="container mt-4">
      <h4>Personal Information</h4>
      <p className="text-muted">Please fill all the basic details of the customer.</p>
      <hr />

      {/* Profile Photo Upload */}
      <div className="mb-4">
        <label htmlFor="profilePhoto" className="form-label fw-bold">Profile Photo</label>
        <div className="d-flex align-items-center flex-column text-center">
          <div
            className="rounded-circle border border-secondary d-flex justify-content-center align-items-center overflow-hidden mb-2"
            style={{
              width: '140px',
              height: '140px',
              cursor: 'pointer',
              backgroundColor: '#f8f9fa',
            }}
            onClick={() => document.getElementById('profilePhotoInput').click()}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <i className="bi bi-person-circle text-secondary" style={{ fontSize: '5rem' }}></i>
            )}
          </div>

          <input
            id="profilePhotoInput"
            name="profilePhoto"
            type="file"
            className="d-none"
            {...register("profilePhoto", {
              validate: validateFile,
              onChange: (e) => {
                handleFileChange(e);
              },
            })}
          />
          <button
            className="btn btn-outline-primary btn-sm"
            type="button"
            onClick={() => document.getElementById('profilePhotoInput').click()}
          >
            {isEdit ? 'Change Photo' : 'Upload Photo'}
          </button>
          <div className="form-text">PNG, JPG up to 1MB</div>
          {errors?.profilePhoto?.message && <div className="text-danger mt-2">{errors.profilePhoto.message}</div>}
        </div>
      </div>

      {/* Input Fields */}
      <div className="row g-3">
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            {...register("firstName", {
              required: 'Please enter first name',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Name should not contain special characters or numbers'
              }
            })}
          />
          {errors?.firstName?.message && <div className="text-danger">{errors.firstName.message}</div>}
        </div>

        {/* Last Name */}
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            {...register("lastName", {
              required: 'Please enter last name',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Name should not contain special characters or numbers'
              }
            })}
          />
          {errors?.lastName?.message && <div className="text-danger">{errors.lastName.message}</div>}
        </div>

        {/* Date of Birth */}
        <div className="col-md-6">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            className="form-control"
            {...register("dateOfBirth", {
              required: 'Please enter date of birth',
              validate: (value) => {
                const age = differenceInYears(new Date(), new Date(value));
                return age >= 18 || 'Candidate must be at least 18 years old';
              }
            })}
          />
          {errors?.dateOfBirth?.message && <div className="text-danger">{errors.dateOfBirth.message}</div>}
        </div>

        {/* Mobile Number */}
        <div className="col-md-6">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            className="form-control"
            {...register("mobileNumber", {
              required: 'Please enter mobile number',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit Indian mobile number'
              }
            })}
          />
          {errors?.mobileNumber?.message && <div className="text-danger">{errors.mobileNumber.message}</div>}
        </div>

        {/* Alternate Mobile Number */}
        <div className="col-md-6">
          <label htmlFor="alternateMobileNumber" className="form-label">Alternate Mobile Number</label>
          <input
            type="text"
            id="alternateMobileNumber"
            className="form-control"
            {...register("alternateMobileNumber", {
              required: 'Please enter alternate mobile number',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit Indian mobile number'
              }
            })}
          />
          {errors?.alternateMobileNumber?.message && <div className="text-danger">{errors.alternateMobileNumber.message}</div>}
        </div>

        {/* Aadhaar Number */}
        <div className="col-md-6">
          <label htmlFor="addharNumber" className="form-label">Aadhaar Number</label>
          <input
            type="text"
            id="addharNumber"
            className="form-control"
            {...register("addharNumber", {
              required: 'Please enter Aadhaar number',
              pattern: {
                value: /^\d{12}$/,
                message: 'Enter a valid 12-digit Aadhaar number'
              }
            })}
          />
          {errors?.addharNumber?.message && <div className="text-danger">{errors.addharNumber.message}</div>}
        </div>

        {/* Driving License Number */}
        <div className="col-md-6">
          <label htmlFor="dlNumber" className="form-label">DL Number</label>
          <input
            type="text"
            id="dlNumber"
            className="form-control"
            {...register("dlNumber", {
              required: 'Please enter DL number',
              pattern: {
                value: /^[A-Z]{2}\d{2}[ ]?\d{11}$/,
                message: 'Enter a valid Indian DL number (e.g., MH14 20110000000)'
              }
            })}
          />
          {errors?.dlNumber?.message && <div className="text-danger">{errors.dlNumber.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
