import React from 'react';
import './Footer.css';
import kaheniImage from './assets/logo.jpg';


const Footer = () => {
  return (
    <>
      {/* Top border line */}
      <div className="footer-top-line"></div>

      <footer className="footer">
        <div className="footer-content-grid">
          
          {/* Left: Image + Name */}
          <div className="footer-brand">
            <img src={kaheniImage} alt="Kaheni Peter" className="footer-logo" />
            <h3>TELACO CLEANING SERVICES</h3>
          </div>

          {/* MY VISION */}
          <div className="footer-vision">
            <h4>OUR VISION</h4>
            <p>To be the top cleaning service provider, delivering excellence, customer satisfaction, and sustainable solutions through innovation, dedicated teams, and a strong focus on hygiene and comfort.</p>
          </div>

          {/* CONTACT ME */}
          <div className="footer-contact">
            <h4>CONTACT ME</h4>
            <p><i className="fas fa-phone-alt"></i> 0700 508 171</p>
        <p><i className="fas fa-envelope"></i> telacocleaning@gmail.com</p>
        <p><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</p>
          </div>

          {/* Connect With Me */}
          <div className="footer-social">
            <h4>CONNECT WITH ME</h4>
            <div className="social-icons">
              <a href="tel:+254700508171" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone-alt"></i></a>
          <a href="https://wa.me/254700508171" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="footer-bottom">
          <p>© 2025 | <strong>TELACO CLEANING SERVICES</strong> | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
