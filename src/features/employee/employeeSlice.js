import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {

  },
  reducers: {
    setEmployeeData: (state, action) => {
      state.employee = action.payload;
    },
    getEmployeeById: (state, action) => {
        state.employee.data = state?.employee?.data.map((emp) => {
          if(emp._id === action.payload._id) {
                Object.keys(emp).map((key) => {
                   return emp[key] = action.payload[key]
               })
          }
          return emp;
        })
     },
   
     removeEmployee: (state, action) => {
       state.employee = state.employee.filter((emp) => emp._id !== action.payload);
     },
     addEmployeeAction: (state, action) => {
      state.employee.push(action.payload)
     }
  }
  
})

// Action creators are generated for each case reducer function
export const { setEmployeeData, getEmployeeById, removeEmployee, addEmployeeAction } = employeeSlice.actions

export default employeeSlice.reducer