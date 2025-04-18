import React from "react";

const Features = () => {
  return (
    <>
      {/* <!-- Features Start --> */}
      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Dixit Gadi wale <span className="text-primary">Features</span>
            </h1>
            <p className="mb-0">
            We are your trusted partner for reliable car and bike rentals, designed to make your journeys smooth and stress-free. 
            Whether you're planning a weekend getaway, a business trip, or just need a ride for daily commuting, 
            we offer a wide range of vehicles to match your needs.
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-trophy fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">First Class services</h5>
                      <p className="mb-0">
                      We offer high-quality cars and bikes that are well-maintained and ready for any journey. 
                      Enjoy a comfortable, stylish, and worry-free ride every time you rent with us. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-road fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">24/7 road assistance</h5>
                      <p className="mb-0">
                      Your safety and peace of mind matter to us. In case of any breakdown or emergency, 
                      our support team is available 24/7 to assist you—no matter where you are. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <img
                src="/img/features-img.png"
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
                alt="Img"
              />
            </div>
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Quality at Minimum</h5>
                      <p className="mb-0">
                      We provide competitive pricing without compromising on quality. 
                      Choose from a wide range of vehicles that suit your budget and travel needs.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="fa fa-tag fa-2x"></span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Free Pick-Up & Drop-Off</h5>
                      <p className="mb-0">
                      Enjoy the convenience of our free pick-up and drop-off service at your preferred location.
                      Whether it’s your home, office, we’ll deliver the vehicle where you need it, when you need it.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="fa fa-map-pin fa-2x"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}
    </>
  );
};

export default Features;
