/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import FactCounter from "./FactCounter";
import CentalAbout from "./CentalAbout";
import Features from "./Features";
import CarSteps from "./CarSteps";
import BlogSection from "./blog/BlogSection";
import { TeamSupport } from "./TeamSupport";
import { CentalServices } from "./CentalServices";
import  Seo  from '../shared/Seo';

const Home = () => {
  return (
    <div> 
      {/* SEO component */}
      <Seo
        title="Dixit Gadi wale | Trusted Car Rentals in Mathura | Bike Rent Mathura "
        description="Book car and bike rentals in mathura easily with Dixit Gadiwale. Affordable, reliable, and available 24/7."
        url="https://www.dixitgadiwale.com"
        image="https://dixitgadiwale.com/img/carousel-2.jpg"
      />
      {/* <!-- Carousel Start --> */}
      <div className="header-carousel">
        <div
          id="carouselId"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="First slide"
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
              aria-label="Second slide"
            ></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="img/carousel-2.jpg"
                className="img-fluid w-100"
                alt="First slide"
              />
              <div className="carousel-caption">
                <div className="container py-4">
                  <div className="row g-5">
                    <div
                      className="col-lg-6 fadeInLeft animated"
                      data-animation="fadeInLeft"
                      data-delay="1s"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="bg-secondary rounded p-5">
                        <h4 className="text-white mb-4">
                          CONTINUE CAR  & BIKE INQUIRY
                        </h4>
                        <form>
                          <div className="row g-3">
                            <div className="col-12">
                              <select
                                defaultValue={"1"}
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option>Select Your Car type</option>
                                <option value="1">VW Golf VII</option>
                                <option value="2">Audi A1 S-Line</option>
                                <option value="3">Toyota Camry</option>
                                <option value="4">BMW 320 ModernLine</option>
                              </select>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-map-marker-alt"></span>{" "}
                                  <span className="ms-1">Pick Up</span>
                                </div>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter a City "
                                  aria-label="Enter a City "
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <Link className="text-start text-white d-block mb-2">
                                Need a different drop-off location?
                              </Link>
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-map-marker-alt"></span>
                                  <span className="ms-1">Drop off</span>
                                </div>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter a City "
                                  aria-label="Enter a City"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-calendar-alt"></span>
                                  <span className="ms-1">Pick Up</span>
                                </div>
                                <input className="form-control" type="date" />
                                <select
                                  defaultValue={"1"}
                                  className="form-select ms-3"
                                  aria-label="Default select example"
                                >
                                  <option>12:00AM</option>
                                  <option value="1">1:00AM</option>
                                  <option value="2">2:00AM</option>
                                  <option value="3">3:00AM</option>
                                  <option value="4">4:00AM</option>
                                  <option value="5">5:00AM</option>
                                  <option value="6">6:00AM</option>
                                  <option value="7">7:00AM</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-calendar-alt"></span>
                                  <span className="ms-1">Drop off</span>
                                </div>
                                <input className="form-control" type="date" />
                                <select
                                  defaultValue={"1"}
                                  className="form-select ms-3"
                                  aria-label="Default select example"
                                >
                                  <option>12:00AM</option>
                                  <option value="1">1:00AM</option>
                                  <option value="2">2:00AM</option>
                                  <option value="3">3:00AM</option>
                                  <option value="4">4:00AM</option>
                                  <option value="5">5:00AM</option>
                                  <option value="6">6:00AM</option>
                                  <option value="7">7:00AM</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="btn btn-light w-100 py-2">
                              INQUIRY NOW
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                      data-animation="fadeInRight"
                      data-delay="1s"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="text-start">
                        <h1 className="display-5 text-white">
                          Get 10% off your rental Plan your trip now
                        </h1>
                        <p>Travel safe with Dixit Gadi wale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-1.jpg"
                className="img-fluid w-100"
                alt="First slide"
              />
              <div className="carousel-caption">
                <div className="container py-4">
                  <div className="row g-5">
                    <div
                      className="col-lg-6 fadeInLeft animated"
                      data-animation="fadeInLeft"
                      data-delay="1s"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="bg-secondary rounded p-5">
                        <h4 className="text-white mb-4">
                          CONTINUE CAR & Bike INQUIRY
                        </h4>
                        <form>
                          <div className="row g-3">
                            <div className="col-12">
                              <select
                                defaultValue={"1"}
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option>Select Your Car & Bike type</option>
                                <option value="1">VW Golf VII</option>
                                <option value="2">Audi A1 S-Line</option>
                                <option value="3">Toyota Camry</option>
                                <option value="4">BMW 320 ModernLine</option>
                              </select>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-map-marker-alt"></span>
                                  <span className="ms-1">Pick Up</span>
                                </div>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter a City"
                                  aria-label="Enter a City"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <Link className="text-start text-white d-block mb-2">
                                Need a different drop-off location?
                              </Link>
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-map-marker-alt"></span>
                                  <span className="ms-1">Drop off</span>
                                </div>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter a City"
                                  aria-label="Enter a City"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-calendar-alt"></span>
                                  <span className="ms-1">Pick Up</span>
                                </div>
                                <input className="form-control" type="date" />
                                <select
                                  defaultValue={"1"}
                                  className="form-select ms-3"
                                  aria-label="Default select example"
                                >
                                  <option>12:00AM</option>
                                  <option value="1">1:00AM</option>
                                  <option value="2">2:00AM</option>
                                  <option value="3">3:00AM</option>
                                  <option value="4">4:00AM</option>
                                  <option value="5">5:00AM</option>
                                  <option value="6">6:00AM</option>
                                  <option value="7">7:00AM</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-calendar-alt"></span>
                                  <span className="ms-1">Drop off</span>
                                </div>
                                <input className="form-control" type="date" />
                                <select
                                  defaultValue={"1"}
                                  className="form-select ms-3"
                                  aria-label="Default select example"
                                >
                                  <option>12:00AM</option>
                                  <option value="1">1:00AM</option>
                                  <option value="2">2:00AM</option>
                                  <option value="3">3:00AM</option>
                                  <option value="4">4:00AM</option>
                                  <option value="5">5:00AM</option>
                                  <option value="6">6:00AM</option>
                                  <option value="7">7:00AM</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="btn btn-light w-100 py-2">
                              INQUIRY NOW
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                      data-animation="fadeInRight"
                      data-delay="1s"
                      href="#"
                    >
                      <div className="text-start">
                        <h1 className="display-5 text-white">
                          Get 10% off your rental! Choose Your Model{" "}
                        </h1>
                        <p>Travel safe with Dixit Gadi wale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      <Features />

      <CentalAbout />

      <FactCounter />
      <BlogSection />
      <CentalServices />

     

      <CarSteps />

      

     

      <TeamSupport />

     
    </div>
  );
};

export default Home;
