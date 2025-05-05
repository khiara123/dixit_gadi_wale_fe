import React from "react";
import { Link } from "react-router-dom";
import Seo from '../shared/Seo';

const TermAndCondition = () => {
  return (
    <>
      {/* SEO */}
      <Seo
        title="Terms and Conditions | Dixit Gadiwale Car & Bike Rentals in Mathura"
        description="Read the terms and conditions for booking cars, bikes, and vintage vehicles with Dixit Gadiwale. Trusted vehicle rental services in Mathura."
        url="https://www.dixitgadiwale.com/terms-and-conditions"
        image="https://dixitgadiwale.com/img/carousel-2.jpg"
      />

      {/* Term and condition breadcrumb */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Terms and Conditions
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link>Pages</Link>
            </li>
            <li className="breadcrumb-item active text-primary">Term & conditions</li>
          </ol>
        </div>
      </div>

      {/* SEO-rich Terms & Conditions content */}
      <div className="container my-5">
  <div className="row">
    <div className="col-md-12">
      <h2 className="mb-4">Terms and Conditions for Car & Bike Rental in Mathura</h2>
      <p className="text-muted">
        These Terms and Conditions apply to all vehicle rental services provided by <strong>Dixit Gadiwale</strong>, the leading provider of <strong>car and bike rentals in Mathura</strong>. Whether you're hiring a scooter for local travel in Vrindavan or booking a vintage car for a wedding in Mathura, please read these conditions carefully.
      </p>

      <h5>1. Booking Process & Confirmation</h5>
      <p>
        To rent a bike or car in Mathura, customers must book through our website or verified WhatsApp channel. Bookings for chauffeur-driven cars, self-drive cars, and vintage wedding cars must be confirmed with full or partial payment. Upon confirmation, a booking ID and service details will be emailed to the registered address.
        <br />
        Booking well in advance is advised for high-demand days such as Holi, Janmashtami, and weekends in Vrindavan or Govardhan.
      </p>

      <h5>2. Vehicle Pickup & Return in Mathura</h5>
      <p>
        Vehicles can be picked up from our designated locations in Mathura or delivered to specific addresses within city limits. At the end of the rental period, vehicles must be returned to the agreed location in the same condition as delivered. For long-distance or outstation returns, additional logistics fees may apply.
        <br />
        All rentals in Mathura and nearby areas are time-tracked, and late returns may incur extra charges.
      </p>

      <h5>3. Documents Required for Bike/Car Rentals</h5>
      <p>
        Renters must submit a valid driver's license and one government-issued ID proof (Aadhaar, Voter ID, or Passport) to rent a car or bike in Mathura. For vintage car bookings, an additional verification step is required due to the high value and unique usage.
        <br />
        International travelers renting from our service must provide passport and visa details.
      </p>

      <h5>4. Cancellation and Refund Policy</h5>
      <p>
        Free cancellation is allowed up to 24 hours before the rental period. In case of a late cancellation or no-show, only 50% of the rental fee may be refunded. No refunds are available for weather-related delays unless services are fully canceled by Dixit Gadiwale.
        <br />
        Refunds for rentals like <strong>vintage wedding cars in Mathura</strong> are processed within 7 business days.
      </p>

      <h5>5. Types of Vehicles Offered</h5>
      <p>
        Our fleet includes:
        <ul>
          <li>Self-drive hatchbacks and sedans for city use</li>
          <li>Scooters and motorbikes for short rentals in Mathura and Vrindavan</li>
          <li>Vintage cars for weddings and photoshoots (chauffeur-only)</li>
          <li>Outstation cars with experienced drivers for trips across Uttar Pradesh</li>
        </ul>
        All our vehicles are GPS-enabled and fully sanitized before each ride.
      </p>

      <h5>6. Responsibility & Insurance</h5>
      <p>
        Basic third-party insurance is provided for all <strong>car and bike rentals in Mathura</strong>. Damages due to negligence, off-road use, or traffic rule violations will be charged to the renter. Customers must immediately report accidents or breakdowns by calling our 24/7 support line.
      </p>

      <h5>7. Service Areas</h5>
      <p>
        We serve all major areas of Mathura including <strong>Mathura, Vrindavan, Dwarkadhish, Govardhan, Barsana, Dauji, and Chhata</strong>. For locations beyond city limits, additional pickup/drop charges may apply. Our <strong>bike rentals in Vrindavan</strong> are especially popular among solo tourists and temple visitors.
      </p>

      <h5>8. Cleanliness & Safety</h5>
      <p>
        Each vehicle is cleaned and disinfected after every ride. Smoking, alcohol consumption, or transporting illegal substances is strictly prohibited. Safety helmets are provided with every two-wheeler rental at no extra cost.
      </p>

      <h5>9. Contact Us</h5>
      <p>
        For queries about bookings, bulk rentals, or <strong>custom vintage car packages in Mathura</strong>, please reach out:
        <br />
        📧 <a href="mailto:dixitgadiwale@gmail.com"> dixitgadiwale@gmail.com</a> | ☎️ +91-8266006000
        <br />
        📍 Dixit Gadiwale Office, C-11 Opp. B.S.A,
        Engineering College, Mathura
      </p>

      <p className="mt-4">
        Thank you for choosing <strong>Dixit Gadiwale</strong> — your most trusted platform for <strong>affordable, reliable car and bike rentals in Mathura</strong>.
      </p>
    </div>
  </div>
</div>


    </>
  );
};

export default TermAndCondition;
