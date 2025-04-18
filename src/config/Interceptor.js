import Axios from 'axios';
import appConstant from '../constant/constant';
import storageService from '../services/storageService';

const axiosInstance = Axios.create({
    // node base url 
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_ENDPOINT,

});

axiosInstance.defaults.headers = {
    //auth token injection
}

axiosInstance.interceptors.request.use(
    (config) => {
         if(!appConstant.EXCLUED_TOKEN_URL.includes(config.url)) {
             const tokenStr = storageService.getItem('token');
             config.headers.Authorization = `Bearer ${tokenStr}`
         }
        return config;
    },
    (error) => {
        throw new Error(error.request.data.message);
    }
);

axiosInstance.interceptors.response.use(
    
    (response) => {
    const contentType = response.headers['content-type'];
    if (contentType && contentType.includes('application/pdf')) {
        console.log("its come hereeee")
      return response;
    }
        return response.data;
    },
    (error) => {
         if(error.response.status === 401) {
         }
        return error.response;
    }
);

export default axiosInstance
