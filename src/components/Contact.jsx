/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import { Seo } from "../shared/Seo";

const Contact = () => {
  return (
    <>
    {/* SEO */}
       <Seo
              title="Dixit Gadi wale | Trusted Car Rentals in Mathura | Bike Rent Mathura | Vintage Car in Mathura"
              description="Book car and bike rentals in mathura easily with Dixit Gadiwale. Affordable, reliable, and available 24/7."
              url="https://dixitgadiwale.com"
              image="https://dixitgadiwale.com/img/carousel-2.jpg"
            />
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
            Contact Us
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
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize text-primary mb-3">
              Contact Us
            </h1>
            <p className="mb-0">
              Have questions or need assistance? Our team is here to help! Reach
              out to us anytime — we’re just a call or message away. Whether
              you’re curious about our services, need support with your booking,
              or simply want to explore insurance options, we’d love to hear
              from you.
            </p>
          </div>
          <div className="row g-5">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-5">
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="contact-add-item p-4 h-100 d-flex flex-column justify-content-between">
                    <div className="contact-icon mb-4">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <div>
                      <h4>Address</h4>
                      <p className="mb-0">
                        C-11 Opp. B.S.A. Engineering College, Mathura
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="contact-add-item p-4 h-100 d-flex flex-column justify-content-between">
                    <div className="contact-icon mb-4">
                      <i className="fas fa-envelope fa-2x"></i>
                    </div>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-0">dixitgadiwale@gmail.com</p>
                    </div>
                  </div>
                </div>

                
                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="contact-add-item p-4 h-100 d-flex flex-column justify-content-between">
                    <div className="contact-icon mb-4">
                      <i className="fa fa-phone-alt fa-2x"></i>
                    </div>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-0">+91826600600</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="contact-add-item p-4 h-100 d-flex flex-column justify-content-between">
                    <div className="contact-icon mb-4">
                      <i className="fab fa-firefox-browser fa-2x"></i>
                    </div>
                    <div>
                      <h4>WebSite</h4>
                      <p className="mb-0">www.dixitgadiwale.com</p>
                    </div>
                  </div>
                </div>
               
              
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-secondary p-5 rounded">
                <h4 className="text-primary mb-4">Send Your Message</h4>
                <form>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                        />
                        <label for="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="project"
                          placeholder="Project"
                        />
                        <label for="project">Your Project</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "160px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-light w-100 py-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-xl-1 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex flex-xl-column align-items-center justify-content-center">
                <Link className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-0 me-0 me-xl-0">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-5 bg-light rounded">
                <div className="bg-white rounded p-4 mb-4">
                  <h4 className="mb-3">Our Branch 01</h4>
                  <div className="d-flex align-items-center flex-shrink-0 mb-3">
                    <p className="mb-0 text-dark me-2">Address:</p>
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <p className="mb-0">C-11 Opps. B.S.A Engineering College, Mathura </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-dark me-2">Telephone:</p>
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    <p className="mb-0">+918266006000</p>
                  </div>
                </div>
                <div className="bg-white rounded p-4 mb-4">
                  <h4 className="mb-3">Our Branch 02</h4>
                  <div className="d-flex align-items-center mb-3">
                    <p className="mb-0 text-dark me-2">Address:</p>
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <p className="mb-0">Dixit Gadi wale, Palikheda , Mathura</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-dark me-2">Telephone:</p>
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    <p className="mb-0">
                      +918266001000
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded p-4 mb-0">
                  <h4 className="mb-3">Our Branch 03</h4>
                  <div className="d-flex align-items-center mb-3">
                    <p className="mb-0 text-dark me-2">Address:</p>
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <p className="mb-0">17 A1 Chanda Green Mathura</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-dark me-2">Telephone:</p>
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    <p className="mb-0">+918265950000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.7002013996994!2d77.63788877571976!3d27.478591335543335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397373efbc422089%3A0x3b7c06529f1e123e!2sDIXIT%20GADI%20WALE%20WEDDING%20VINTAGE%20CAR!5e0!3m2!1sen!2sin!4v1744882264485!5m2!1sen!2sin"
                  className="rounded w-100"
                  style={{ height: "400px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contact;
