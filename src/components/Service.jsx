import React from "react";
import { Link } from "react-router-dom";
import { CentalServices } from "./CentalServices";
import {Seo} from '../shared/Seo';

const Service = () => {
  return (
    <>
    {/* SEO */}
      <Seo
                  title="Dixit Gadi wale | Trusted Car Rentals in Mathura | Bike Rent Mathura | Vintage Car in Mathura | Best Service in car and bike rental in mathura"
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
            Our Services
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
            <li className="breadcrumb-item active text-primary">Service</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}
      <CentalServices />
    </>
  );
};

export default Service;
