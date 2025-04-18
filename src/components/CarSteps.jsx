import React from "react";

const CarSteps = () => {
  return (
    <>
      {/* <!-- Car Steps Start --> */}
      <div className="container-fluid steps py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize text-white mb-3">
              Dixit Gadi wale<span className="text-primary"> Process</span>
            </h1>
            <p className="mb-0 text-white">
            From selection to ignition, getting your perfect ride is simple and seamless. Whether you're planning a spontaneous road trip, or want to explore the city in comfort — we’ve made the rental process fast, flexible, and stress-free. Here’s how it works:
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="steps-item p-4 mb-4">
                <h4>Come In Contact</h4>
                <p className="mb-0">
                Reach out to us online or visit our branch. Our friendly team is ready to assist you with everything you need.
                </p>
                <div className="setps-number">01.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="steps-item p-4 mb-4">
                <h4>Choose A Car & bike</h4>
                <p className="mb-0">
                Pick from our wide range of well-maintained, insured vehicles — whether it's for a quick ride or a weekend getaway.
                </p>
                <div className="setps-number">02.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="steps-item p-4 mb-4">
                <h4>Enjoy Driving</h4>
                <p className="mb-0">
                Hit the road with confidence. Drive safe and hassle-free while we take care of the rest.
                </p>
                <div className="setps-number">03.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Car Steps End --> */}
    </>
  );
};

export default CarSteps;
