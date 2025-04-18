import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // smooth scroll
    });
  };
  return (
    <div>
      {showButton &&
       <Link
       onClick={scrollToTop}
       className="btn btn-secondary btn-lg-square rounded-circle back-to-top"
     >
       <i className="fa fa-arrow-up"></i>
     </Link>
      }
     
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">About Us</h4>
                  <p className="mb-3">
                  We are a trusted name in vehicle rentals and general insurance, committed to delivering seamless mobility solutions and reliable coverage.
                  </p>
                </div>
              
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link to={"about"}>
                  <i className="fas fa-angle-right me-2"></i> About
                </Link>
                <Link to={"services"}>
                  <i className="fas fa-angle-right me-2"></i> Services
                </Link>
                <Link to={"#"}>
                  <i className="fas fa-angle-right me-2"></i> Team
                </Link>
                
                <Link to={"contact"}>
                  <i className="fas fa-angle-right me-2"></i> Contact us
                </Link>
                
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Business Hours</h4>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Mon - Saturday:</h6>
                  <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Sunday:</h6>
                  <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                </div>
             
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <Link to={"#"}>
                  <i className="fa fa-map-marker-alt me-2"></i> C-11 Opp. B.S.A, Engineering College, Mathura
                </Link>
                <Link to={"mailto:info@example.com"}>
                  <i className="fas fa-envelope me-2"></i> dixitgadiwale@gmail.com
                </Link>
                <Link to={"tel:+012 345 67890"}>
                  <i className="fas fa-phone me-2"></i> +918266006000
                </Link>
                <Link to={"tel:+012 345 67890"} className="mb-3">
                  <i className="fas fa-print me-2"></i> +918266001000
                </Link>
                <div className="d-flex">
                  <Link className="btn btn-secondary btn-md-square rounded-circle me-3">
                    <i className="fab fa-facebook-f text-white"></i>
                  </Link>
                  <Link className="btn btn-secondary btn-md-square rounded-circle me-3">
                    <i className="fab fa-twitter text-white"></i>
                  </Link>
                  <Link className="btn btn-secondary btn-md-square rounded-circle me-3">
                    <i className="fab fa-instagram text-white"></i>
                  </Link>
                  <Link className="btn btn-secondary btn-md-square rounded-circle me-0">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <Link to={"#"} className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>www.dixitgadiwale.com
                </Link>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              Designed By{" "}
              <Link className="border-bottom text-white">Coder Ankit</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
    </div>
  );
};

export default Footer;
