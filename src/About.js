import React from "react";
import './About.css';
import {
  FaUserTie,
  FaMoneyBillWave,
  FaLeaf,
  FaSmile,
  FaCalendarAlt,
  FaCogs,
  FaPhoneAlt,
  FaTools,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import logoImg from './assets/logo.jpg';
import welcomeImage from './assets/welcome.jpg'; 

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <div className="underline" />

      <section className="about-info-section">
  <div className="about-overlay">
    <div className="about-info-content">
      <p>
        Telaco Cleaning Services is a trusted provider of professional cleaning solutions for homes,
        offices, and commercial spaces. With a commitment to quality, safety, and customer satisfaction,
        we ensure every space we touch is left spotless, healthy, and refreshed. Our team is trained,
        reliable, and passionate about delivering services that meet the highest standards.
      </p>
    </div>
  </div>
</section>



      <div className="about-content">
        {/* Mission Section */}
        <div className="about-section">
          <FaBullseye className="about-icon" />
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            To deliver high-quality, eco-friendly, and
            reliable cleaning solutions that exceed our clients’ expectations. We are committed to
            creating healthier living and working environments through professionalism, integrity,
            and innovation.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-section">
          <FaEye className="about-icon" />
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            To be the leading cleaning service provider known for excellence, customer satisfaction,
            and sustainability. We envision transforming the cleaning industry with smart solutions,
            dedicated teams, and an unwavering focus on hygiene and comfort.
          </p>
        </div>
      </div>

      {/* Thick red horizontal line */}
      <div className="red-divider"></div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="choose-header underline-header">Why Choose Us</h2>
        <div className="choose-us-container">
          <div className="choose-column">
            <div className="choose-item">
              <div className="icon-and-title">
                <FaUserTie className="choose-icon" />
                <h3>Experienced Staff</h3>
              </div>
              <p>Our team is made up of trained professionals committed to excellence.</p>
            </div>

            <div className="choose-item">
              <div className="icon-and-title">
                <FaMoneyBillWave className="choose-icon" />
                <h3>Transparent Pricing</h3>
              </div>
              <p>No hidden costs—what you see is what you pay.</p>
            </div>

            <div className="choose-item">
              <div className="icon-and-title">
                <FaLeaf className="choose-icon" />
                <h3>Eco-friendly Products</h3>
              </div>
              <p>We use safe, environmentally friendly cleaning solutions.</p>
            </div>

            <div className="choose-item">
              <div className="icon-and-title">
                <FaSmile className="choose-icon" />
                <h3>Satisfaction Guarantee</h3>
              </div>
              <p>Your happiness with our service is always guaranteed.</p>
            </div>
          </div>

          <div className="choose-image">
            <img src={logoImg} alt="Telaco Cleaning Services Logo" />
          </div>

          <div className="choose-column">
            <div className="choose-item">
              <div className="icon-and-title">
                <FaCalendarAlt className="choose-icon" />
                <h3>Flexible Scheduling</h3>
              </div>
              <p>We work around your schedule with convenient booking options.</p>
            </div>

            <div className="choose-item">
              <div className="icon-and-title">
                <FaCogs className="choose-icon" />
                <h3>Customized Plans</h3>
              </div>
              <p>Cleaning packages tailored to your unique needs.</p>
            </div>

            <div className="choose-item">
              <div className="icon-and-title">
                <FaPhoneAlt className="choose-icon" />
                <h3>24/7 Support</h3>
              </div>
              <p>We're always available to assist you—day or night.</p>
            </div>

            <div className="choose-item">
              <div className="icon-and-title">
                <FaTools className="choose-icon" />
                <h3>Modern Equipment</h3>
              </div>
              <p>Advanced tools and technology for a more effective clean.</p>
            </div>
          </div>
        </div>
      </section>

      <section
  className="full-width-banner"
  style={{ backgroundImage: `url(${welcomeImage})` }}
>
  <div className="banner-overlay">
    <div className="banner-content">
      <p className="banner-text">
        When you choose <strong>Telaco Cleaning Services</strong>, you’re partnering with a team committed to professionalism, efficiency, and excellence. No matter the job, we’ve got you covered.
        <br /><br />
        Let us handle the dirt while you enjoy the sparkle! Contact Telaco Cleaning Services today and experience the difference.
      </p>
      <button className="banner-button">Book Now</button>
    </div>
  </div>
</section>
    </div>
  );
}
