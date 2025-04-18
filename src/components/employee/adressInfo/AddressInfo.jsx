// import React from 'react'

// const AddressInfo = ({register, errors}) => {
//   return (
//     <>
//      <div className="space-y-12">
//     <div className="pb-12 pt-4">
//       <div className='header-part px-0'>
//       <h2 className="text-base font-semibold leading-7 text-gray-900">Address Information</h2>
//       <p className="mt-1 text-sm leading-6 text-gray-600">Please fill all the address details of the customer.</p>
//       <p className="border-b border-gray-900/10 mt-2"></p>
//       </div>
     
      
//       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//         <div className="sm:col-span-3">
//           <label for="street1" className="block text-sm font-medium leading-6 text-gray-900">Address line1</label>
//           <div className="mt-2">
//             <input type="text" name="street1" id="street1" {...register("address.street1", { required: 'Please enter address line 1'})} autocomplete="given-name" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.address?.street1?.message && <p className='text-red-600'>{errors?.address?.street1?.message}</p> }
//         </div>

//         <div className="sm:col-span-3">
//           <label for="street2" className="block text-sm font-medium leading-6 text-gray-900">Address line2</label>
//           <div className="mt-2">
//             <input type="text" name="street2" id="street2" {...register("address.street2", { setValueAs: value => value})} autocomplete="family-name" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//         </div>
//         <div className="sm:col-span-2 sm:col-start-1">
//           <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
//           <div className="mt-2">
//             <input type="text" name="city" id="city" autocomplete="address-level2" {...register("address.city", { required: 'Please enter city'})} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.address?.city?.message && <p className='text-red-600'>{errors?.address?.city?.message}</p> }
//         </div>

//         <div className="sm:col-span-2">
//           <label for="state" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
//           <div className="mt-2">
//             <input type="text" name="state" id="state" {...register("address.state", { required: 'Please enter state'})} autocomplete="state-level1" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.address?.state?.message && <p className='text-red-600'>{errors?.address?.state?.message}</p> }
//         </div>

//         <div className="sm:col-span-2">
//           <label for="postalCode" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
//           <div className="mt-2">
//             <input type="text" name="postalCode" id="postalCode" {...register("address.postalCode", { required: 'Please enter postal code', pattern: {
//             value: /^[0-9]*$/,
//             message: 'Only number is allowed',
//         }, minLength: {value: 6 , message: 'Minimum 6 char allowed'}})} autocomplete="postalCode-code" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
//           </div>
//           {errors && errors?.address?.postalCode?.message && <p className='text-red-600'>{errors?.address?.postalCode?.message}</p> }
//         </div>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default AddressInfo


import React from 'react';

const AddressInfo = ({ register, errors }) => {
  return (
    <>
      <div className="container py-4">
        <div className="mb-4">
          <h2 className="h5 fw-semibold text-dark">Address Information</h2>
          <p className="text-muted small mb-1">Please fill all the address details of the customer.</p>
          <hr />
        </div>

        <div className="row g-3">
          {/* Address Line 1 */}
          <div className="col-md-6">
            <label htmlFor="street1" className="form-label fw-semibold">Address Line 1</label>
            <input
              type="text"
              className={`form-control ${errors?.address?.street1 ? 'is-invalid' : ''}`}
              id="street1"
              autoComplete="address-line1"
              {...register("address.street1", {
                required: 'Please enter address line 1',
              })}
            />
            {errors?.address?.street1?.message && (
              <div className="invalid-feedback">{errors.address.street1.message}</div>
            )}
          </div>

          {/* Address Line 2 */}
          <div className="col-md-6">
            <label htmlFor="street2" className="form-label fw-semibold">Address Line 2</label>
            <input
              type="text"
              className="form-control"
              id="street2"
              autoComplete="address-line2"
              {...register("address.street2", {
                setValueAs: value => value,
              })}
            />
          </div>

          {/* City */}
          <div className="col-md-4">
            <label htmlFor="city" className="form-label fw-semibold">City</label>
            <input
              type="text"
              className={`form-control ${errors?.address?.city ? 'is-invalid' : ''}`}
              id="city"
              autoComplete="address-level2"
              {...register("address.city", {
                required: 'Please enter city',
              })}
            />
            {errors?.address?.city?.message && (
              <div className="invalid-feedback">{errors.address.city.message}</div>
            )}
          </div>

          {/* State */}
          <div className="col-md-4">
            <label htmlFor="state" className="form-label fw-semibold">State / Province</label>
            <input
              type="text"
              className={`form-control ${errors?.address?.state ? 'is-invalid' : ''}`}
              id="state"
              autoComplete="address-level1"
              {...register("address.state", {
                required: 'Please enter state',
              })}
            />
            {errors?.address?.state?.message && (
              <div className="invalid-feedback">{errors.address.state.message}</div>
            )}
          </div>

          {/* Postal Code */}
          <div className="col-md-4">
            <label htmlFor="postalCode" className="form-label fw-semibold">ZIP / Postal Code</label>
            <input
              type="text"
              className={`form-control ${errors?.address?.postalCode ? 'is-invalid' : ''}`}
              id="postalCode"
              autoComplete="postal-code"
              {...register("address.postalCode", {
                required: 'Please enter postal code',
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers are allowed',
                },
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters allowed',
                },
              })}
            />
            {errors?.address?.postalCode?.message && (
              <div className="invalid-feedback">{errors.address.postalCode.message}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressInfo;
