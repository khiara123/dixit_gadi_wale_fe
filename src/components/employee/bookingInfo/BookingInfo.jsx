// import React from 'react'

// const BookingInfo = ({register, errors}) => {
//   return (
//     <>
//      <div className="space-y-12">
//     <div className="pb-12 pt-4">
//       <div className='header-part px-0'>
//       <h2 className="text-base font-semibold leading-7 text-gray-900">Booking Information</h2>
//       <p className="mt-1 text-sm leading-6 text-gray-600">Please fill all the booking details of the customer.</p>
//       <p className="border-b border-gray-900/10 mt-2"></p>
//       </div>
     
      
//       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//         <div className="sm:col-span-3">
//           <label for="pickupDateAndTime" className="block text-sm font-medium leading-6 text-gray-900">Pickup Date & Time</label>
//           <div className="mt-2">
//             <input type="datetime-local" name="pickupDateAndTime" id="pickupDateAndTime" {...register("bookingInformation.pickupDateAndTime", { required: 'Please enter pickup date and time'})} autocomplete="bookingInformation" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.pickupDateAndTime?.message && <p className='text-red-600'>{errors?.bookingInformation?.pickupDateAndTime?.message}</p> }
//         </div>

//         <div className="sm:col-span-3">
//           <label for="dropDateAndTime" className="block text-sm font-medium leading-6 text-gray-900">Drop Date & Time</label>
//           <div className="mt-2">
//             <input type="datetime-local" name="dropDateAndTime" id="dropDateAndTime" {...register("bookingInformation.dropDateAndTime", { required: 'Please enter drop date and time'})} autocomplete="dropDateAndTime" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.dropDateAndTime?.message && <p className='text-red-600'>{errors?.bookingInformation?.dropDateAndTime?.message}</p> }
//         </div>
//         <div className="sm:col-span-3 sm:col-start-1">
//           <label for="vichelName" className="block text-sm font-medium leading-6 text-gray-900">Vichel Name</label>
//           <div className="mt-2">
//             <input type="text" name="vichelName" id="vichelName" autocomplete="vichelName" {...register("bookingInformation.vichelName", { required: 'Please enter vichel name'})} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.vichelName?.message && <p className='text-red-600'>{errors?.bookingInformation?.vichelName?.message}</p> }
//         </div>

//         <div className="sm:col-span-3">
//           <label for="vichelNumber" className="block text-sm font-medium leading-6 text-gray-900">Vichel Number</label>
//           <div className="mt-2">
//             <input type="text" name="vichelNumber" id="vichelNumber" {...register("bookingInformation.vichelNumber", { required: 'Please enter vichel number'})} autocomplete="vichelNumber" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.vichelNumber?.message && <p className='text-red-600'>{errors?.bookingInformation?.vichelNumber?.message}</p> }
//         </div>

//         <div className="sm:col-span-2">
//           <label for="chargePerDay" className="block text-sm font-medium leading-6 text-gray-900">Charge Per Day</label>
//           <div className="mt-2">
//             <input type="number" name="chargePerDay" id="chargePerDay" {...register("bookingInformation.chargePerDay", { required: 'Please enter charge per day'})} autocomplete="chargePerDay" className="no-spinner block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.chargePerDay?.message && <p className='text-red-600'>{errors?.bookingInformation?.chargePerDay?.message}</p> }
//         </div>
//         <div className="sm:col-span-2">
//           <label for="refundableAmount" className="block text-sm font-medium leading-6 text-gray-900">Refundable Amount</label>
//           <div className="mt-2">
//             <input type="number" name="refundableAmount" id="refundableAmount" {...register("bookingInformation.refundableAmount", { required: 'Please enter refundable amount'})} autocomplete="refundableAmount" className="no-spinner block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.refundableAmount?.message && <p className='text-red-600'>{errors?.bookingInformation?.refundableAmount?.message}</p> }
//         </div>
//         <div className="sm:col-span-2">
//           <label for="totalPayable" className="block text-sm font-medium leading-6 text-gray-900">Total Payable</label>
//           <div className="mt-2">
//             <input type="number" name="totalPayable" id="totalPayable" {...register("bookingInformation.totalPayable", { required: 'Please enter total payable amount'})} autocomplete="totalPayable" className="no-spinner block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.bookingInformation?.totalPayable?.message && <p className='text-red-600'>{errors?.bookingInformation?.totalPayable?.message}</p> }
//         </div>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default BookingInfo

// import React from 'react';

// const BookingInfo = ({ register, errors }) => {
//   return (
//     <>
//       <div className="container py-4">
//         <div className="mb-4">
//           <h2 className="h5">Booking Information</h2>
//           <p className="text-muted">Please fill all the booking details of the customer.</p>
//           <hr />
//         </div>

//         <div className="row gy-3">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label htmlFor="pickupDateAndTime">Pickup Date & Time</label>
//               <input
//                 type="datetime-local"
//                 id="pickupDateAndTime"
//                 className="form-control"
//                 {...register("bookingInformation.pickupDateAndTime", {
//                   required: 'Please enter pickup date and time',
//                 })}
//               />
//               {errors?.bookingInformation?.pickupDateAndTime?.message && (
//                 <div className="text-danger">{errors.bookingInformation.pickupDateAndTime.message}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="form-group">
//               <label htmlFor="dropDateAndTime">Drop Date & Time</label>
//               <input
//                 type="datetime-local"
//                 id="dropDateAndTime"
//                 className="form-control"
//                 {...register("bookingInformation.dropDateAndTime", {
//                   required: 'Please enter drop date and time',
//                 })}
//               />
//               {errors?.bookingInformation?.dropDateAndTime?.message && (
//                 <div className="text-danger">{errors.bookingInformation.dropDateAndTime.message}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="form-group">
//               <label htmlFor="vichelName">Vehicle Name</label>
//               <input
//                 type="text"
//                 id="vichelName"
//                 className="form-control"
//                 {...register("bookingInformation.vichelName", {
//                   required: 'Please enter vehicle name',
//                 })}
//               />
//               {errors?.bookingInformation?.vichelName?.message && (
//                 <div className="text-danger">{errors.bookingInformation.vichelName.message}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="form-group">
//               <label htmlFor="vichelNumber">Vehicle Number</label>
//               <input
//                 type="text"
//                 id="vichelNumber"
//                 className="form-control"
//                 {...register("bookingInformation.vichelNumber", {
//                   required: 'Please enter vehicle number',
//                 })}
//               />
//               {errors?.bookingInformation?.vichelNumber?.message && (
//                 <div className="text-danger">{errors.bookingInformation.vichelNumber.message}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="form-group">
//               <label htmlFor="chargePerDay">Charge Per Day</label>
//               <input
//                 type="number"
//                 id="chargePerDay"
//                 className="form-control"
//                 {...register("bookingInformation.chargePerDay", {
//                   required: 'Please enter charge per day',
//                 })}
//               />
//               {errors?.bookingInformation?.chargePerDay?.message && (
//                 <div className="text-danger">{errors.bookingInformation.chargePerDay.message}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="form-group">
//               <label htmlFor="refundableAmount">Refundable Amount</label>
//               <input
//                 type="number"
//                 id="refundableAmount"
//                 className="form-control"
//                 {...register("bookingInformation.refundableAmount", {
//                   required: 'Please enter refundable amount',
//                 })}
//               />
//               {errors?.bookingInformation?.refundableAmount?.message && (
//                 <div className="text-danger">{errors.bookingInformation.refundableAmount.message}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="form-group">
//               <label htmlFor="totalPayable">Total Payable</label>
//               <input
//                 type="number"
//                 id="totalPayable"
//                 className="form-control"
//                 {...register("bookingInformation.totalPayable", {
//                   required: 'Please enter total payable amount',
//                 })}
//               />
//               {errors?.bookingInformation?.totalPayable?.message && (
//                 <div className="text-danger">{errors.bookingInformation.totalPayable.message}</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookingInfo;

import React, { useEffect, useState } from 'react';

const BookingInfo = ({ register, errors, setValue, getValues, watch }) => {
  const [minDateTime, setMinDateTime] = useState('');

  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // local timezone adjustment
    setMinDateTime(now.toISOString().slice(0, 16));
  }, []);

  const pickupDateTime = watch("bookingInformation.pickupDateAndTime");

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="h5">Booking Information</h2>
        <p className="text-muted">Please fill all the booking details of the customer.</p>
        <hr />
      </div>

      <div className="row gy-3">
        {/* Pickup Date & Time */}
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="pickupDateAndTime">Pickup Date & Time</label>
            <input
              type="datetime-local"
              id="pickupDateAndTime"
              className="form-control"
              min={minDateTime}
              {...register("bookingInformation.pickupDateAndTime", {
                required: 'Please enter pickup date and time',
                validate: value => {
                  const now = new Date();
                  const inputDate = new Date(value);
                  return inputDate >= now || 'Pickup date/time must be in the future';
                }
              })}
            />
            {errors?.bookingInformation?.pickupDateAndTime?.message && (
              <div className="text-danger">{errors.bookingInformation.pickupDateAndTime.message}</div>
            )}
          </div>
        </div>

        {/* Drop Date & Time */}
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="dropDateAndTime">Drop Date & Time</label>
            <input
              type="datetime-local"
              id="dropDateAndTime"
              className="form-control"
              min={pickupDateTime || minDateTime}
              {...register("bookingInformation.dropDateAndTime", {
                required: 'Please enter drop date and time',
                validate: value => {
                  const pickup = new Date(pickupDateTime);
                  const drop = new Date(value);
                  return drop > pickup || 'Drop date/time must be after pickup date/time';
                }
              })}
            />
            {errors?.bookingInformation?.dropDateAndTime?.message && (
              <div className="text-danger">{errors.bookingInformation.dropDateAndTime.message}</div>
            )}
          </div>
        </div>

        {/* Vehicle Name */}
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="vichelName">Vehicle Name</label>
            <input
              type="text"
              id="vichelName"
              className="form-control"
              maxLength={50}
              {...register("bookingInformation.vichelName", {
                required: 'Please enter vehicle name',
                pattern: {
                  value: /^[A-Za-z0-9 ]+$/,
                  message: 'Vehicle name must not contain special characters'
                },
                maxLength: {
                  value: 50,
                  message: 'Vehicle name must be 50 characters or less'
                }
              })}
            />
            {errors?.bookingInformation?.vichelName?.message && (
              <div className="text-danger">{errors.bookingInformation.vichelName.message}</div>
            )}
          </div>
        </div>

        {/* Vehicle Number */}
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="vichelNumber">Vehicle Number</label>
            <input
              type="text"
              id="vichelNumber"
              className="form-control"
              placeholder="e.g. MH12AB1234"
              {...register("bookingInformation.vichelNumber", {
                required: 'Please enter vehicle number',
                pattern: {
                  value: /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/,
                  message: 'Enter valid Indian vehicle number (e.g., MH12AB1234)'
                }
              })}
            />
            {errors?.bookingInformation?.vichelNumber?.message && (
              <div className="text-danger">{errors.bookingInformation.vichelNumber.message}</div>
            )}
          </div>
        </div>

        {/* Charge Per Day */}
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="chargePerDay">Charge Per Day</label>
            <input
              type="number"
              id="chargePerDay"
              className="form-control"
              {...register("bookingInformation.chargePerDay", {
                required: 'Please enter charge per day',
              })}
            />
            {errors?.bookingInformation?.chargePerDay?.message && (
              <div className="text-danger">{errors.bookingInformation.chargePerDay.message}</div>
            )}
          </div>
        </div>

        {/* Refundable Amount */}
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="refundableAmount">Refundable Amount</label>
            <input
              type="number"
              id="refundableAmount"
              className="form-control"
              {...register("bookingInformation.refundableAmount", {
                required: 'Please enter refundable amount',
              })}
            />
            {errors?.bookingInformation?.refundableAmount?.message && (
              <div className="text-danger">{errors.bookingInformation.refundableAmount.message}</div>
            )}
          </div>
        </div>

        {/* Total Payable */}
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="totalPayable">Total Payable</label>
            <input
              type="number"
              id="totalPayable"
              className="form-control"
              {...register("bookingInformation.totalPayable", {
                required: 'Please enter total payable amount',
              })}
            />
            {errors?.bookingInformation?.totalPayable?.message && (
              <div className="text-danger">{errors.bookingInformation.totalPayable.message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
