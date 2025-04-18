import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useFieldArray } from 'react-hook-form'
const AcadmicInfo = ({register, errors, control}) => {
  const {fields, append} = useFieldArray({control, name: 'acadmics'})
  const addItem = () => {
    append({degree: '', institution: '', year: ''});
  }
  return (
    <>
  <div className="space-y-12">
   <div className="pb-12 pt-4">
     <div className='header-part px-0'>
      <div className='flex flex-row justify-between items-center'>
         <div>
         <h2 className="text-base font-semibold leading-7 text-gray-900">Acadmic Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please fill all the Acadmic details of the employee.</p>
         
         </div>
         <div className='mt-2'>
         <IoMdAddCircleOutline style={{color:  'rgb(248 113 113 )', cursor: 'pointer', fontSize: '22px'}} onClick={addItem} />
         </div>
      </div>
      <p className="border-b border-gray-900/10 mt-2"></p>
     </div>
    
     
     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
       {fields.map((field, index) => (
         
        <>
           <div class="sm:col-span-2">
          {index === 0 ? <label for={`degree${index}`} class="block text-sm font-medium leading-6 text-gray-900">Degree</label> : '' }
          <div class="mt-2">
            <select id={`degree${index}`} name={`degree${index}`} {...register(`acadmics.${index}.degree`, {required: 'Please select degree'})} autocomplete="degree-name" class="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
              <option value=""></option> 
              <option value="High School">High School</option>
              <option value="Intermideate">Intermideate</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
          {errors && errors?.acadmics && errors?.acadmics[index]?.degree?.message && <p className='text-red-600'>{errors?.acadmics[index]?.degree?.message}</p> }
      </div>

      <div className="sm:col-span-2">
          {index === 0 ? <label for={`institution${index}`} className="block text-sm font-medium leading-6 text-gray-900">Institute</label> : ''}
          <div className="mt-2">
            <input type="text" name={`institution${index}`} id={`institution${index}`} {...register(`acadmics.${index}.institution`, {required: 'Please enter institute'})} autocomplete="given-name" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
          </div>
          {errors && errors?.acadmics && errors?.acadmics[index]?.institution?.message && <p className='text-red-600'>{errors?.acadmics[index]?.institution?.message}</p> }
        </div>
      <div class="sm:col-span-2">
          {index === 0 ? <label for={`year${index}`} class="block text-sm font-medium leading-6 text-gray-900">Passing Year</label> : ''}
          <div class="mt-2">
            <select id={`year${index}`} name={`year${index}`} {...register(`acadmics.${index}.year`, {required: 'Please select passing year'})} autocomplete="passsingYear-name" class="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
              <option value=""></option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          {errors && errors?.acadmics && errors?.acadmics[index]?.year?.message && <p className='text-red-600'>{errors?.acadmics[index]?.year?.message}</p> }
      </div>
        </>
       ))}
    
     </div>
   </div>
 </div>
   </>
  )
}

export default AcadmicInfo