import React from "react";

export const CentalServices = () => {
  return (
    <>
      {/* <!-- Services Start --> */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Dixit Gadi Wale <span className="text-primary">Services</span>
            </h1>
            <p className="mb-0">
            Making Your Ride Smoother, Safer, and Smarter
            Explore a range of thoughtfully crafted services that go beyond just rentals. 
            At Dixit Gadi Wale, we focus on enhancing your experience from booking to drop-off.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-phone-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Phone Reservation</h5>
                <p className="mb-0">
                Need a vehicle on the go? Just give us a call. Our reservation team is available to book your ride instantly — no apps, no hassle.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-money-bill-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Special Rates</h5>
                <p className="mb-0">
                Enjoy exclusive pricing for long-term rentals, corporate tie-ups, and festive seasons. More days, less pay — that’s our deal!
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fas fa-motorcycle fa-2x"></i>
                </div>
                <h5 className="mb-3">Delivery Scooty Rentals</h5>
                <p className="mb-0">
                Special rental plans for delivery partners of Zomato, Swiggy, Blinkit, and more. Get reliable scooties with easy documentation
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-umbrella fa-2x"></i>
                </div>
                <h5 className="mb-3">General Insurance</h5>
                <p className="mb-0">
                our general insurance services cover everything from vehicle protection to comprehensive policies for individual and commercial clients
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-car-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Vintage Car</h5>
                <p className="mb-0">
                Make your special moments unforgettable with our elegant vintage car rentals — perfect for weddings, photo shoots, and grand entries.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-solid fa-hotel fa-2x"></i>
                </div>
                <h5 className="mb-3">Hotel Booking</h5>
                <p className="mb-0">
                Enjoy a comfortable stay with our hotel booking services. We offer trusted accommodations to match your travel and budget needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}
    </>
  );
};
