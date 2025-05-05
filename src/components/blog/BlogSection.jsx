import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Travel Tips & Rental Guides</h2>
        <p className="text-muted">
          Stay informed with expert travel tips, local attractions, and everything you need to know about renting cars and bikes in Mathura & Vrindavan.
        </p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/mathura-bike-rental.png"
              className="card-img-top"
              alt="Bike Rental in Mathura"
            />
            <div className="card-body">
              <h5 className="card-title">Top 5 Benefits of Renting a Bike in Mathura</h5>
              <p className="card-text">
                Discover why two-wheelers are the perfect way to explore Mathura's narrow lanes, temples, and scenic spots.
              </p>
              <Link to="/blog/bike-rental-benefits" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/car-hire-mathura.png"
              className="card-img-top"
              alt="Car Hire in Mathura"
            />
            <div className="card-body">
              <h5 className="card-title">Why Choose Dixit Gadiwale for Your Mathura Trip</h5>
              <p className="card-text">
                Learn how we provide a seamless car rental experience with affordable pricing, trusted service, and 24/7 availability.
              </p>
              <Link to="/blog/why-choose-us" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/mathura-local-attractions.jpeg"
              className="card-img-top"
              alt="Mathura Sightseeing"
              style={{height: "250px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Must-Visit Places in Mathura with a Rented Vehicle</h5>
              <p className="card-text">
                Plan your visit to Mathura and Vrindavan better with our list of top spiritual and scenic destinations made easy with rental access.
              </p>
              <Link to="/blog/top-places-to-visit" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
