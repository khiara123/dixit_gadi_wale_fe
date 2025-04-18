// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const ErrorComponent = () => {
//    const navigate = useNavigate();

//    const gotoHome = () => {
//       navigate('/login');
//    }
   
//   return (
//    <div className='errorContainer max-w-6xl mx-auto'>
//     <div className='flex items-center justify-center h-screen'> 
//            <div className='text-center p-24 mb-10 bg-slate-50 shadow-2xl border border-blue-200'>
//             <h1 className='text-6xl text-gray-300 font-bold font-serif mb-6'>OOPS!</h1>
//              <p className='mb-4 text-gray-500 font-serif italic'>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR YOU ARE NOT AUTHERISEZ FOR VISIT THIS PAGE</p>
//              <button onClick= {gotoHome} className='px-10 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-400 duration-200 shadow-lg tracking-wide font-bold'>CLICK HERE TO LOGIN</button>         
//            </div>
//      </div>
     
//    </div>
//   )
// }

// export default ErrorComponent

import React from "react";
import { Link, useNavigate } from "react-router-dom";
const ErrorComponent = () => {
     const navigate = useNavigate();
  
     const gotoHome = () => {
        navigate('/login');
     }
  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            404 Pages
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link>Pages</Link>
            </li>
            <li className="breadcrumb-item active text-primary">404 Page</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- 404 Start --> */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <button onClick= {gotoHome} className="btn btn-primary rounded-pill py-3 px-5">
                Go Back To login
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 404 End --> */}
    </>
  );
};

export default ErrorComponent;
