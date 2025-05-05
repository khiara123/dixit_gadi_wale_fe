/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

export const TeamSupport = () => {
  return (
    <>
      {/* <!-- Team Start --> */}
      <div className="container-fluid team py-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Customer<span className="text-primary"> Suport</span> Center
            </h1>
            <p className="mb-0">
            We believe every customer deserves a stress-free rental experience. Whether you're hitting the road for adventure or getting around town, our team is here to support you every step of the way
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img
                    src="/img/team-1.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                </div>
                <div className="team-content pt-4">
                  <h4>Narendra Dixit</h4>
                  <p>Founder</p>
                  <div className="team-icon d-flex justify-content-center">
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img
                    src="/img/team-2.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                </div>
                <div className="team-content pt-4">
                  <h4>Vinod Dixit</h4>
                  <p>Director</p>
                  <div className="team-icon d-flex justify-content-center">
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img
                    src="/img/team-3.png"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                </div>
                <div className="team-content pt-4">
                  <h4>Rinki Dixit</h4>
                  <p>Manager</p>
                  <div className="team-icon d-flex justify-content-center">
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img
                    src="/img/team-4.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                </div>
                <div className="team-content pt-4">
                  <h4>KV Singh</h4>
                  <p>Service Partner</p>
                  <div className="team-icon d-flex justify-content-center">
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="btn btn-square btn-light rounded-circle mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
};
