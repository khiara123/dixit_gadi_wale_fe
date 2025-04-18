import React, { useState } from "react";
import {NavLink , useNavigate} from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux';
import { Menu, X } from "lucide-react"; 
import { removeUser } from "../features/user/authSlice";

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const currentUser = useSelector((state) => state.user.currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 
 const handleLogOut = () => {
    dispatch(removeUser());
    navigate('/login');
 }
  return (
    
    <header className="bg-white border-b-2 shadow-lg sticky top-0">
       <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div
            className="row gx-0 align-items-center"
            style={{ height: "45px" }}
          >
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                
                <a href="tel:+01234567890" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +918266006000
                </a>
                <a href="mailto:example@gmail.com" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>
                 dixitgadiwale@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <NavLink className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink className="btn btn-light btn-sm-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand p-0">
              <h1 className="display-6 text-primary">
                <i className="fas fa-car-alt me-3"></i>Dixit Gadi wale
              </h1>
              {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
              <NavLink
            to=""
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
           Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="services"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
             Service
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
          {!currentUser?.isLoggedIn && (
            <NavLink
              to="login"
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
            >
              Sign In
            </NavLink>
          )}
            {currentUser?.isLoggedIn && (<NavLink
            to="employee"
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
          >
           Customer
          </NavLink>
          )}
        
        {currentUser?.isLoggedIn && ( <NavLink
            to= "#"
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            onClick={handleLogOut}
          >
           LogOut
          </NavLink>
           )}

              </div>
            </div>
          </nav>
        </div>
      </div>
      
     

     
    </header>
  );
};

export default Header;
