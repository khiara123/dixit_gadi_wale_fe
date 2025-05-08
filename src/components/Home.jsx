/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import FactCounter from "./FactCounter";
import CentalAbout from "./CentalAbout";
import Features from "./Features";
import CarSteps from "./CarSteps";
import BlogSection from "./blog/BlogSection";
import { TeamSupport } from "./TeamSupport";
import { CentalServices } from "./CentalServices";
import  Seo  from '../shared/Seo';
import  InquiryForm from './InquiryForm'

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
                   <InquiryForm/>
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
                    <InquiryForm/>
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
