// import React , {useState} from "react";
// import { useDispatch} from 'react-redux'
// import { useForm } from "react-hook-form";
// import { setUser } from "../features/user/authSlice";
// import authService from "../services/authService";
// import routeAuthenticator from "../shared/Auth";
// import storageService from "../services/storageService";
// import { useNavigate } from "react-router-dom";
// import Loader from "../shared/Loader";
// import { toast } from "react-toastify";
// const Login = () => {
//     const { register, handleSubmit, formState } = useForm();
//     const [isLoading, setIsLoading] = useState(false);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const {errors} = formState;

//     const onSubmit = async (data) => {
//          setIsLoading(true);
//           const userData = await authService.loginUser(data);
//           if(userData.message === 'success') {
//             dispatch(setUser({...userData?.data, isLoggedIn: true}));
//             storageService.setItem('token', userData?.token);
//             storageService.setItem("currentUser", JSON.stringify({...userData?.data, isLoggedIn: true}));
//             setIsLoading(false);
//             navigate('/employee');
//           } else  {
//             setIsLoading(false);
//             toast.error("User name or password is in correct");
//              // TODO : validation service 
//           }
//       }
    


//   return (
//     <>
//       <div className="mt-0 flex flex-col md:flex-row">
//         <div className="md:w-2/3">
//           <img
//             className="h-auto md:opacity-100"
//             src="../images/loginform.jpg"
//             alt="login_page"
//           />
//         </div>
//         <div className="p-10 mx-auto text-center px-10">
//           <div className="text-left">
//             <p className="text-3xl font-serif font-extrabold text-gray-500">
//               Login
//             </p>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <div className="text-left mt-10">
//               <label className="font-serif font-xl font-bold text-gray-500 mb-5">
//                 User Name
//               </label>
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name = 'userName'
//                 id = "userName" 
//                 className="p-4 w-full outline-none  shadow-lg bg-slate-100  placeholder:p-4 focus:outline-nones text-gray-400"
//                 placeholder="Enter your user name"
//                 {...register("userName", {
//                     required: "Please enter user name",
                   
//                 })}
//               ></input>
//               <p className="text-red-700 mt-2 pl-2">{errors?.userName?.message}</p>
//             </div>
//             <div className="text-left mt-10">
//               <label className="font-serif font-xl font-bold text-gray-500 mb-5">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id='password'
//                 className="p-4 w-full outline-none  shadow-lg bg-slate-100  placeholder:p-4 focus:outline-nones text-gray-400"
//                 placeholder="Enter your password"
//                 name= 'password'
//                 autoComplete="off"
//                 {...register("password", {
//                     required:  "Password is required",
//                 })}
//               ></input>
//                <p className="text-red-700 mt-2 pl-2">{errors?.password?.message}</p>
//             </div>
//             <div className="text-left flex items-center mt-2">
//               <input type="checkbox" className="mr-3 w-5 h-5" checked></input>
//               <label className="font-serif font-xl font-normal text-gray-500 ">
//                 Remember me?
//               </label>
//             </div>
//             <div className="text-left mt-10">
//               <button
//                 type="submit"
//                 className=" w-full px-10 py-4 rounded-lg bg-red-400 hover:text-red-400 hover:bg-slate-100 text-white hover:border hover:border-red-400"
//               >
//                 Login
//               </button>
//             </div>
//             <div className="text-right">
//               <label className="font-serif font-xl font-normal text-gray-500 ">
//                 Forgot password ?
//               </label>
//             </div>
//             <div className="border-t-2 w-full mt-10 relative">
//             <div className="absolute  text-gray-500 left-[50%] top-[-20px] p-1 bg-slate-100 border-2 rounded-lg">
//                 OR
//             </div> 
//           </div>
//           <div className="container mt-10">
//                   <div className="mb-9 flex items-center justify-center">
//                     <a
//                       href="#!"
//                       className="mr-4 p-3 border rounded-full border-red-400 hover:bg-red-400 hover:text-white text-neutral-800 dark:text-neutral-200"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                       </svg>
//                     </a>
                   
//                     <a
//                       href="#!"
//                       className="mr-4 p-3 border rounded-full border-red-400  hover:bg-red-400 hover:text-white text-neutral-800 dark:text-neutral-200"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                         />
//                       </svg>
//                     </a>
                    
//                     <a
//                       href="#!"
//                       className="mr-4 p-3 border rounded-full border-red-400  hover:bg-red-400 hover:text-white text-neutral-800 dark:text-neutral-200"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                       </svg>
//                     </a>
//                   </div>
//           </div>

//           <div>
//             <p  className="text-gray-500 cursor-pointer hover:text-blue-500">New User ?</p>
//           </div>
//           </form>
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { useForm } from "react-hook-form";
// import { setUser } from "../features/user/authSlice";
// import authService from "../services/authService";
// import routeAuthenticator from "../shared/Auth";
// import storageService from "../services/storageService";
// import { useNavigate } from "react-router-dom";
// import Loader from "../shared/Loader";
// import { toast } from "react-toastify";

// const Login = () => {
//   const { register, handleSubmit, formState } = useForm();
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { errors } = formState;

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     const userData = await authService.loginUser(data);
//     if (userData.message === 'success') {
//       dispatch(setUser({ ...userData?.data, isLoggedIn: true }));
//       storageService.setItem('token', userData?.token);
//       storageService.setItem("currentUser", JSON.stringify({ ...userData?.data, isLoggedIn: true }));
//       setIsLoading(false);
//       navigate('/employee');
//     } else {
//       setIsLoading(false);
//       toast.error("User name or password is incorrect");
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid mt-0">
//         <div className="row">
//           <div className="col-md-7 p-0">
//             <img
//               src="../images/loginform.jpg"
//               alt="login_page"
//               className="img-fluid h-100 w-100 object-fit-cover"
//             />
//           </div>
//           <div className="col-md-5 p-5 d-flex flex-column justify-content-center align-items-center">
//             <div className="w-100">
//               <h2 className="mb-4 text-secondary fw-bold">Login</h2>
//               <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                 <div className="mb-4">
//                   <label className="form-label fw-bold text-secondary">User Name</label>
//                   <input
//                     autoComplete="off"
//                     type="text"
//                     id="userName"
//                     className="form-control bg-light shadow-sm"
//                     placeholder="Enter your user name"
//                     {...register("userName", {
//                       required: "Please enter user name",
//                     })}
//                   />
//                   {errors?.userName && (
//                     <div className="text-danger mt-1">{errors.userName.message}</div>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label fw-bold text-secondary">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     autoComplete="off"
//                     className="form-control bg-light shadow-sm"
//                     placeholder="Enter your password"
//                     {...register("password", {
//                       required: "Password is required",
//                     })}
//                   />
//                   {errors?.password && (
//                     <div className="text-danger mt-1">{errors.password.message}</div>
//                   )}
//                 </div>

//                 <div className="form-check mb-3">
//                   <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
//                   <label className="form-check-label text-secondary" htmlFor="rememberMe">
//                     Remember me?
//                   </label>
//                 </div>

//                 <div className="d-grid mb-3">
//                   <button type="submit" className="btn btn-danger">
//                     Login
//                   </button>
//                 </div>

//                 <div className="text-end mb-3">
//                   <a href="#!" className="text-secondary text-decoration-none">Forgot password?</a>
//                 </div>

//                 <div className="position-relative my-4">
//                   <hr />
//                   <div className="position-absolute top-50 start-50 translate-middle bg-white px-3 border rounded-pill text-secondary">
//                     OR
//                   </div>
//                 </div>

//                 <div className="d-flex justify-content-center gap-3 mb-4">
//                   {/* Facebook */}
//                   <a
//                     href="#!"
//                     className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
//                   >
//                     <i className="fab fa-facebook-f"></i>
//                   </a>

//                   {/* Google */}
//                   <a
//                     href="#!"
//                     className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
//                   >
//                     <i className="fab fa-google"></i>
//                   </a>

//                   {/* LinkedIn */}
//                   <a
//                     href="#!"
//                     className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>

//                 <p className="text-center text-secondary">
//                   New User?{" "}
//                   <a href="#!" className="text-decoration-none text-primary">
//                     Register
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { setUser } from "../features/user/authSlice";
import authService from "../services/authService";
import routeAuthenticator from "../shared/Auth";
import storageService from "../services/storageService";
import { useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const userData = await authService.loginUser(data);
    if (userData.message === 'success') {
      dispatch(setUser({ ...userData?.data, isLoggedIn: true }));
      storageService.setItem('token', userData?.token);
      storageService.setItem("currentUser", JSON.stringify({ ...userData?.data, isLoggedIn: true }));
      setIsLoading(false);
      navigate('/employee');
    } else {
      setIsLoading(false);
      toast.error("User name or password is incorrect");
    }
  };

  return (
    <>
      <div className="container-fluid mt-0">
        <div className="row">
          {/* Left Image Section */}
          <div className="col-md-8 p-0">
            <img
              src="../images/loginform.jpg"
              alt="login_page"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          
          {/* Right Login Form Section */}
          <div className="col-md-4 p-5 d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <h2 className="mb-4 text-secondary fw-bold">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-bold text-secondary">User Name</label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="userName"
                    className="form-control bg-light shadow-sm"
                    placeholder="Enter your user name"
                    {...register("userName", {
                      required: "Please enter user name",
                    })}
                  />
                  {errors?.userName && (
                    <div className="text-danger mt-1">{errors.userName.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold text-secondary">Password</label>
                  <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    className="form-control bg-light shadow-sm"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors?.password && (
                    <div className="text-danger mt-1">{errors.password.message}</div>
                  )}
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                  <label className="form-check-label text-secondary" htmlFor="rememberMe">
                    Remember me?
                  </label>
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </div>

                <div className="text-end mb-3">
                  <a href="#!" className="text-secondary text-decoration-none">Forgot password?</a>
                </div>

                <div className="position-relative my-4">
                  <hr />
                  <div className="position-absolute top-50 start-50 translate-middle bg-white px-3 border rounded-pill text-secondary">
                    OR
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-3 mb-4">
                  {/* Social Media Login Buttons */}
                  <a
                    href="#!"
                    className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    href="#!"
                    className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    href="#!"
                    className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>

                <p className="text-center text-secondary">
                  New User?{" "}
                  <a href="#!" className="text-decoration-none text-primary">
                    Register
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


