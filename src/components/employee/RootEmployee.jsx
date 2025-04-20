import React from 'react'
import routeAuthenticator from '../../shared/Auth';
import { useDispatch} from 'react-redux';
import { setEmployeeData } from "../../features/employee/employeeSlice";
import { useEffect, useState } from "react";
import employeeService from "../../services/employeeService";
import { EmployeeContext } from './EmployeeContext';
import { Outlet } from 'react-router-dom';
const RootEmployee = () => {
  const [employee, setEmployee] = useState(null);
  const dispatch = useDispatch();
  const fetchEmployee = async (page=1 ,limit= 10) => {
    const employeeResponse = await employeeService.getAllEmployee(page ,limit);
    if (employeeResponse && employeeResponse?.data) {
      setEmployee(employeeResponse?.data);
      dispatch(setEmployeeData(employeeResponse))
    } else {
      setEmployee(null);
    }
    return employeeResponse;
  };
  useEffect(() => {
    fetchEmployee();
  }, []);


  const handleChildEvent = (page= 1 , limit =10) => {
    fetchEmployee( page , limit);
    
  };
  return (
  <>
   <EmployeeContext.Provider value={{ notifyParent: handleChildEvent }}>
   <Outlet>
   </Outlet>
   </EmployeeContext.Provider>
  
  </>
  )
}
const ProtectedRootEmployee  = routeAuthenticator(RootEmployee)
export default ProtectedRootEmployee