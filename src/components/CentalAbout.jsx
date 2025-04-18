/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const CentalAbout = () => {
  return (
    <>
      {/* <!-- About Start --> */}
      <div className="container-fluid overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">
                    DGW <span className="text-primary">About</span>
                  </h1>
                  <p className="mb-0">
                  We don’t just rent cars or bikes — we power your journey with trust, comfort, and experience.
                  Every ride with Dixit Gadi Wale is more than just transportation, it’s a promise of safety, style, and reliability.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img
                          src="/img/about-icon-1.png"
                          className="img-fluid w-50 h-50"
                          alt="Icon"
                        />
                      </div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">
                      To be India’s most loved and trusted vehicle rental brand, empowering every journey with simplicity and class.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img
                          src="/img/about-icon-2.png"
                          className="img-fluid h-50 w-50"
                          alt="Icon"
                        />
                      </div>
                      <h5 className="mb-3">Our Mision</h5>
                      <p className="mb-0">
                      To offer top-notch mobility solutions through a fleet of well-maintained vehicles, and a seamless booking experience.

                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-item my-4">
                At Dixit Gadi Wale, our passion goes beyond the road. 
                With over 5 years of trusted service, we’ve been redefining mobility across cities and moments. 
                Whether it’s a quick city hop or a long adventure, our vehicles are your perfect companion — backed by a commitment to reliability, affordability, and satisfaction.

                </p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center rounded bg-secondary p-4">
                      <h1 className="display-6 text-white">5</h1>
                      <h5 className="text-light mb-0">Years Of Experience</h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rounded">
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        Trusted by thousands of riders
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        Affordable & flexible packages
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        24x7 customer support 
                      </p>
                      <p className="mb-0">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        City-to-city rentals with ease
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <Link
                      to={'about'}
                      className="btn btn-primary rounded py-3 px-5"
                    >
                      More About Us
                    </Link>
                  </div>
                  <div className="col-lg-7">
                    <div className="d-flex align-items-center">
                      <img
                        src="/img/attachment-img.jpg"
                        className="img-fluid rounded-circle border border-2 border-secondary"
                        style={{ width: "110px", height: "110px" }}
                        alt="Image"
                      />
                      <div className="ms-4">
                        <h4>Narendra Dixit</h4>
                        <p className="mb-0">DGW Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-img">
                <div className="img-1">
                  <img
                    src="/img/about-img.jpg"
                    className="img-fluid rounded h-100 w-100"
                    alt=""
                  />
                </div>
                <div className="img-2">
                  <img
                    src="/img/about-img-1.jpg"
                    className="img-fluid rounded w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default CentalAbout;
