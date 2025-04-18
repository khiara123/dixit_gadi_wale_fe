import apiMethod from "./apiService";
import API_END_POINT from "../config/urls";


const getAllEmployee =  async (page, limit) => {
   
    const employeeResponse =   await apiMethod.get(API_END_POINT.GET_EMPLOYEE, {page, limit});
      const data =await employeeResponse
    return data;
};

const addEmployee =  async (paylaod) => {
   
  const employeeResponse =   await apiMethod.post(API_END_POINT.ADD_EMPLOYEE , paylaod);
    const data =await employeeResponse
  return data;
};

const editEmployee =  async (id, paylaod) => {
  try {
    const employeeResponse =   await apiMethod.post(`${API_END_POINT.EDIT_EMPLOYEE}/${id}`, paylaod);
    const data =await employeeResponse;
    if(data.status ===200) {
      return data
    }
     throw new Error("somethig went wrong");
  } catch (error) {
    throw new Error("somethig went wrong");
  }
};

const removeEmployee =  async (id) => {
  try {
    const employeeResponse =   await apiMethod.deleteRequest(`${API_END_POINT.REMOVE_EMPLOYEE}/${id}`);
    const data =await employeeResponse;
    if(data.status ===200) {
      return data
    }
     throw new Error("somethig went wrong");
  } catch (error) {
    console.log("errorr--> ", error);
    throw new Error("somethig went wrong");
  }
};

const printEmployee = async (id) => {
  try {
    const response = await apiMethod.postBlob(`${API_END_POINT.PRINT_EMPLOYEE}/${id}`);
    const blob = new Blob([response.data], { type: 'application/pdf' }); // ✅ use response.data here
     // Optional debug

    const url = URL.createObjectURL(blob);
    
    const newWindow = window.open(url);
    
    
    if (newWindow) {
     
      newWindow.onload = () => newWindow.print();
    } else {
      console.warn("Popup blocked or not allowed.");
    }

  } catch (error) {
    console.error("printEmployee() failed:", error);
  }
};

const genrateOtp = async (payload) => {
  try {
    const otpResponse =   await apiMethod.post(API_END_POINT.GENRATE_OPT, payload);
    const data =await otpResponse;
    if(data.status ===200) {
      return data
    }
     throw new Error("somethig went wrong");
  } catch (error) {
    throw new Error("somethig went wrong");
  }
}

const verifyOtp = async (payload) => {
  try {
    const otpResponse =   await apiMethod.post(API_END_POINT.VERIFY_OTP, payload);
    const data =await otpResponse;
    if(data.status ===200) {
      return data
    }
     throw new Error("somethig went wrong");
  } catch (error) {
    throw new Error("somethig went wrong");
  }
}


const employeeService  = {getAllEmployee,addEmployee,editEmployee, removeEmployee, printEmployee, genrateOtp, verifyOtp}


export default  employeeService;