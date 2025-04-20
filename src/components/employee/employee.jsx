import React, { useState, useContext } from "react";
import routeAuthenticator from "../../shared/Auth";
import { useDispatch, useSelector } from "react-redux";
import { removeEmployee as removeEmp } from "../../features/employee/employeeSlice";
import { useEffect } from "react";
import employeeService from "../../services/employeeService";
import Table from "../../shared/Table";
import { toast } from "react-toastify";
import Loader from "../../shared/Loader";
import { EmployeeContext } from "./EmployeeContext";

const Employee = () => {
  const employeeList = useSelector((state) => state.employee.employee);
  const { notifyParent } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // const fetchEmployee = async () => {
  //   const employeeResponse = await employeeService.getAllEmployee();
  //   if (employeeResponse && employeeResponse.length > 0) {
  //     setEmployee(employeeResponse);
  //     dispatch(setEmployeeData(employeeResponse))
  //   } else {
  //     setEmployee(null);
  //   }
  //   return employeeResponse;
  // };
  useEffect(() => {
    if (employeeList && employeeList?.data.length == 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    setEmployee(employeeList?.data);
  }, [employeeList, employeeList?.data?.length]);

  const removeEmployee = (id) => {
    setIsLoading(true);
    const removeEmployeeData = async () => {
      const employeeResponse = await employeeService.removeEmployee(id);
      //console.log("remove employee ", employeeResponse)
      if (employeeResponse?.employee) {
        setIsLoading(false);
        notifyParent();
        toast.success("Employee is removed Successfully");
        //dispatch(removeEmp(employeeResponse?.employee?._id))
      } else {
        toast.error("Somthing went wrong");
        setIsLoading(false);
      }
    };
    removeEmployeeData();
  };

  const onPageChange = (page) => {
   notifyParent(page, 10)
  };

  const printEmployee = (id) => {
    setIsLoading(true);
    console.log("is Loding", isLoading)
    const employeeResponse = employeeService.printEmployee(id);
    employeeResponse
      .then((data) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const onSearch = (searchText) => {
     console.log("search text", searchText);
  }

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      {employee && employee.length ? (
        <Table
          employeeData={employee}
          remove={removeEmployee}
          printEmployee={printEmployee}
          employeeList={employeeList}
          pageChange={onPageChange}
          onSearch ={onSearch}
        ></Table>
      ) : (
        <Loader isLoading={true} />
      )}
    </>
  );
};
const ProtecteEmployee = routeAuthenticator(Employee);
export default ProtecteEmployee;
