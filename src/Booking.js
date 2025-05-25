import React from 'react';
import welcomeImage from './assets/booking.jpg'; // Adjust the path to your image
import './Booking.css';

const Booking = () => {
  return (
    <div>
      <section
        className="full-width-banner"
        style={{ backgroundImage: `url(${welcomeImage})` }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <p className="banner-text">
              When you choose <strong>Telaco Cleaning Services</strong>, you’re partnering with a team committed to professionalism, efficiency, and excellence.
              No matter the job, we’ve got you covered.
              <br /><br />
              Let us handle the dirt while you enjoy the sparkle! Contact Telaco Cleaning Services today and experience the difference.
            </p>
          </div>
        </div>
      </section>

      <section className="branch-section">
        <h2 className="branch-heading">Our Service Locations</h2>
        <p className="branch-subtext">Proudly serving clients across Nairobi’s leading suburbs and towns.</p>

        <div className="branch-grid">
          {["Ruiru", "Ruaka", "Banana", "Ndenderu", "Wangige", "Kikuyu", "Kinoo", "Rironi"].map((location, index) => (
            <div className="branch-card" key={index}>
              <i className="fas fa-map-marker-alt branch-icon"></i>
              <h3>{location}</h3>
              <p>Quality cleaning services available in {location} and nearby areas.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Thick red horizontal line */}
      <div className="red-divider"></div>


      <section className="booking-section">
      <h2 className="booking-title">Book a Cleaning Service</h2>
      <form className="booking-form">
        <input type="text" name="fullName" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />

        <select name="serviceType" required>
          <option value="">Select Service Type</option>
          <option>House Cleaning</option>
          <option>Office Cleaning</option>
          <option>Carpet Cleaning</option>
          <option>Sofa Cleaning</option>
          <option>Dining Seats Cleaning</option>
          <option>Mattress Cleaning</option>
          <option>Fumigation Services</option>
          <option>Post-Construction Cleaning</option>
          <option>Window Cleaning</option>
          <option>Car Interior Cleaning</option>
          <option>Window Blinds Cleaning</option>
          <option>Wooden Floor Sanding and Polishing</option>
          <option>High Pressure Cleaning</option>
          <option>Laundry Services</option>
          <option>Sanitary Waste Disposal</option>
        </select>

        <select name="location" required>
          <option value="">Select Service Location</option>
          <option>Ruiru</option>
          <option>Ruaka</option>
          <option>Banana</option>
          <option>Ndenderu</option>
          <option>Wangige</option>
          <option>Kikuyu</option>
          <option>Kinoo</option>
          <option>Rironi</option>
        </select>

        <div className="form-group">
  <label htmlFor="preferredDate">Preferred Date <span className="hint">(YYYY-MM-DD)</span></label>
  <input
    type="date"
    id="preferredDate"
    name="preferredDate"
    required
  />
</div>

<div className="form-group">
  <label htmlFor="preferredTime">Preferred Time <span className="hint">(HH:MM)</span></label>
  <input
    type="time"
    id="preferredTime"
    name="preferredTime"
    required
  />
</div>


        <button type="submit">Submit Booking</button>
      </form>
    </section>
    </div>
  );
};

export default Booking;
