import React from "react";
import { Link } from "react-router-dom";
import Seo from '../shared/Seo';



const SecurityPolicy = () => {
    return (
      <>
      {/* SEO */}
        <Seo
                    title="Dixit Gadi wale | Trusted Car Rentals in Mathura | Bike Rent Mathura | Vintage Car in Mathura | Best Service in car and bike rental in mathura"
                    description="Book car and bike rentals in mathura easily with Dixit Gadiwale. Affordable, reliable, and available 24/7."
                    url="https://www.dixitgadiwale.com"
                    image="https://dixitgadiwale.com/img/carousel-2.jpg"
                  />

        {/* Term and condition  */}
         <div className="container-fluid bg-breadcrumb">
                <div
                  className="container text-center py-5"
                  style={{ maxWidth: "900px" }}
                >
                  <h4
                    className="text-white display-4 mb-4 wow fadeInDown"
                    data-wow-delay="0.1s"
                  >
                 Privacy & Security 
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
                    <li className="breadcrumb-item active text-primary">Security Policy</li>
                  </ol>
                </div>
              </div>
              <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4">Customer Privacy & Security Assurance</h2>
            <p className="text-muted">
              At <strong>Dixit Gadiwale</strong>, your privacy is our priority. Whether you're booking a self-drive car, a scooter for Vrindavan darshan, or a vintage wedding car, we ensure your data is handled with the utmost care.
            </p>

            <h5>1. What Information Do We Collect?</h5>
            <p>
              When you rent a car or bike from us in Mathura, we may collect personal details including:
              <ul>
                <li>Name and contact number</li>
                <li>Email address</li>
                <li>Government ID (e.g., Aadhaar, Driving License)</li>
                <li>Pickup & drop location</li>
              </ul>
              This information is used solely for the purpose of completing your rental transaction.
            </p>

            <h5>2. Data Storage & Security</h5>
            <p>
              All customer data is stored on secure, encrypted servers hosted in India. We use industry-standard security practices including SSL encryption to protect data during transmission. Our payment gateways are PCI-DSS compliant.
            </p>

            <h5>3. Use of Personal Information</h5>
            <p>
              Your data is used only for:
              <ul>
                <li>Confirming car/bike rental bookings</li>
                <li>Providing customer service and support</li>
                <li>Sending updates on your trip via SMS/email</li>
              </ul>
              We never sell, trade, or rent your personal data to third parties.
            </p>

            <h5>4. Cookies and Tracking</h5>
            <p>
              Our website may use cookies to personalize your experience and track booking analytics. These cookies do not collect personal info unless explicitly shared by you. You may choose to disable cookies in your browser settings.
            </p>

            <h5>5. Third-Party Services</h5>
            <p>
              We may integrate with trusted third-party services for payments (like Razorpay), map navigation, or WhatsApp bookings. All third-party partners are vetted for compliance with data security standards in India.
            </p>

            <h5>6. User Consent & Control</h5>
            <p>
              By booking a ride with us, you agree to our use of your information as described. You have the right to:
              <ul>
                <li>Request a copy of your data</li>
                <li>Ask us to delete or correct your data</li>
                <li>Withdraw your consent at any time</li>
              </ul>
              To request changes, email us at <a href="mailto:dixitgadiwale@gmail.com">dixitgadiwale@gmail.com</a>.
            </p>

            <h5>7. Privacy in Car & Bike Rentals</h5>
            <p>
              Whether you're booking a <strong>bike for sightseeing in Vrindavan</strong> or a <strong>chauffeur-driven wedding car in Mathura</strong>, we ensure your trip details, location, and documents remain confidential. Your data will never be shared with any unauthorized person.
            </p>

            <h5>8. Children & Rentals</h5>
            <p>
              Our rentals are only available to individuals aged 18 and above with valid government-issued ID. We do not knowingly collect personal information from minors.
            </p>

            <h5>9. Policy Updates</h5>
            <p>
              We may revise this Privacy & Security Policy from time to time. Updates will be posted on this page with a revised date.
            </p>

            <h5>10. Contact Information</h5>
            <p>
              If you have any questions regarding privacy or data use, reach out to us:
              <br />
              📧 <a href="mailto:dixitgadiwale@gmail.com">dixitgadiwale@gmail.com</a> | ☎️ +91-8266006000
              📍 Dixit Gadiwale Office, C-11 Opp. B.S.A,
              Engineering College, Mathura, UP - 281004
            </p>

            <p className="mt-4">
              Thank you for trusting <strong>Dixit Gadiwale</strong> — your secure and reliable choice for <strong>car and bike rental services in Mathura</strong>.
            </p>
          </div>
        </div>
      </div>
    
      </>
    );
  };
  
  export default SecurityPolicy;
