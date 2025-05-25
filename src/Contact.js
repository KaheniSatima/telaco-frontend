import React from 'react';
import contactImage from './assets/welcome.jpg'; // Adjust path as necessary
import './Contact.css'; // Make sure styles are in here

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div
        className="contact-banner"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="contact-banner-overlay">
          <div className="banner-left">
            <h1>TELACO CLEANING SERVICES</h1>
<p className="banner-message">
  We’d love to hear from you! Whether you need residential or commercial cleaning,
  want to inquire about our services, request a quote, or simply have a question —
  Telaco Cleaning Services is here to help. Get in touch with us today!
</p>

            <p className="banner-contact">
              telacocleaning@gmail.com &nbsp; | &nbsp; +254 700508171
            </p>
          </div>
          <div className="banner-right">
            <i className="fas fa-comments fa-4x banner-icon"></i>
            <p className="banner-note">We would be happy to serve you or hear from you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
