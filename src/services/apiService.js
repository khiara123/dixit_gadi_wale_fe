
import axiosInstance from '../config/Interceptor';

const get =  (url, queryParams ="") => {
    const res = axiosInstance
        .get(url, {
            params: queryParams,
            headers: {},
        });
    return res;
};

const post = (
    url,
    body,
    queryParams ="",
) => {
     const res = axiosInstance
        .post(url, body, {
            params: queryParams,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                
            },
          
        })
        return res;
};

const postBlob = (url, body, queryParams = "") => {
    const res = axiosInstance.post(url, body, {
        params: queryParams,
        responseType: 'blob',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/pdf',
        },
    });
    return res;
};

const put = (
    url,
    body = {},
    queryParams = "",
) => {
    const res = axiosInstance
        .put(url, body, {
            params: queryParams,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        return res;
};

const deleteRequest = (
    url,
    body ={},
    queryParams = "",
) => {
    const res = axiosInstance
        .delete(url, body, {
            params: queryParams,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        return res;
};

const apiMethod = { get, post, put, deleteRequest, postBlob }

export default apiMethod;
