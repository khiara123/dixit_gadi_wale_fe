import { configureStore, } from '@reduxjs/toolkit';
import  authReducer   from '../features/user/authSlice'
import employeeReducer from '../features/employee/employeeSlice';

export default configureStore({
  reducer: {
    user: authReducer,
    employee: employeeReducer
  }
})