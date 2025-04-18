import React from "react";
import CentalAbout from "./CentalAbout";
import FactCounter from "./FactCounter";
import Features from "./Features";
import CarSteps from "./CarSteps";
import { TeamSupport } from "./TeamSupport";
import { Banner } from "./Banner";
import { Link } from "react-router-dom";

const About = () => {
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
            About Us
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
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>
     
      <CentalAbout />
      <FactCounter />
      <Features />
      <CarSteps />
      <TeamSupport />
    </>
  );
};

export default About;
