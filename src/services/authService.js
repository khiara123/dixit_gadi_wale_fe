import apiMethod from "./apiService";
import API_END_POINT from "../config/urls";
const loginUser =  async (user) => {
    const inputUser  = {
        email : user.userName,
        password: user.password
    }
    const userResponse =   await apiMethod.post(API_END_POINT.LOGIN, inputUser);
    return userResponse;
};

const verifyUser =  async () => {
    const user =   await apiMethod.get(API_END_POINT.VERIFY_USER);
      const userResponse  = await user;
    return userResponse;
};

const userInquiry = async (payload) => {
    try {
      const userInquiryResponse =   await apiMethod.post(API_END_POINT.INQUIRY_USER, payload);
      const data =await userInquiryResponse;
      console.log("data", data);
      if(data.status ===200) {
        return data
      }
       throw new Error("somethig went wrong");
    } catch (error) {
      throw new Error("somethig went wrong");
    }
  }


const authService  = {loginUser, verifyUser, userInquiry}


export default  authService;
