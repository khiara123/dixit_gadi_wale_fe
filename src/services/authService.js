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


const authService  = {loginUser, verifyUser}


export default  authService;
