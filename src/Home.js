import React from "react";
import { Link } from "react-router-dom";
import './Home.css';


// Import service images
import houseCleaning from "./assets/home-cleaning.jpeg";
import officeCleaning from "./assets/office-cleaning.jpeg";
import carpetCleaning from "./assets/carpet-cleaning.jpeg";
import sofaCleaning from "./assets/sofa-cleaning.jpeg";
import diningCleaning from "./assets/dining-cleaning.jpeg";
import mattressCleaning from "./assets/matress-cleaning.jpeg";
import fumigation from "./assets/fumigation.jpeg";
import postConstruction from "./assets/post-construction.jpeg";
import windowCleaning from "./assets/window-cleaning.jpeg";
import carInterior from "./assets/car-interior.jpeg";
import blindsCleaning from "./assets/blinds-cleaning.jpeg";
import floorPolishing from "./assets/floor-polishing.jpeg";
import pressureCleaning from "./assets/pressure-cleaning.jpeg";
import laundry from "./assets/laundry.jpeg";
import wasteDisposal from "./assets/waste-disposal.jpeg";

// Testimonials array
const testimonials = [
  {
    profile: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
    name: "John Doe",
    date: "May 10, 2025",
    message: "Amazing cleaning services! The team was professional and thorough."
  },
  {
    profile: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
    name: "Jane Smith",
    date: "May 18, 2025",
    message: "Superb attention to detail. My office looks brand new!"
  },
  {
    profile: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
    name: "Ali Hassan",
    date: "May 20, 2025",
    message: "Highly recommend Telaco. Great value and professional service!"
  },
  {
    profile: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
    name: "Linda Mwangi",
    date: "May 21, 2025",
    message: "Efficient and friendly staff. They exceeded my expectations."
  },
  {
    profile: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
    name: "Carlos Rivera",
    date: "May 22, 2025",
    message: "My carpet looks new again! Excellent service and timely delivery."
  },
  {
    profile: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
    name: "Amina Yusuf",
    date: "May 23, 2025",
    message: "I was impressed by their professionalism and attention to detail."
  }
];

const services = [
  { title: "House Cleaning", img: houseCleaning, desc: "Thorough, top-to-bottom home cleaning." },
  { title: "Office Cleaning", img: officeCleaning, desc: "Maintain a productive, clean workspace." },
  { title: "Carpet Cleaning", img: carpetCleaning, desc: "Deep carpet cleaning for a fresh feel." },
  { title: "Sofa Cleaning", img: sofaCleaning, desc: "Revive your sofas with our cleaning touch." },
  { title: "Dining Seats Cleaning", img: diningCleaning, desc: "Spotless dining areas for family time." },
  { title: "Mattress Cleaning", img: mattressCleaning, desc: "Sanitized, fresh-smelling mattresses." },
  { title: "Fumigation Services", img: fumigation, desc: "Safe and effective pest control." },
  { title: "Post-Construction Cleaning", img: postConstruction, desc: "From debris to dazzling clean." },
  { title: "Window Cleaning", img: windowCleaning, desc: "Streak-free, crystal-clear windows." },
  { title: "Car Interior Cleaning", img: carInterior, desc: "Your car, clean inside and out." },
  { title: "Window Blinds Cleaning", img: blindsCleaning, desc: "Dust-free, fresh window blinds." },
  { title: "Floor Sanding and Polishing", img: floorPolishing, desc: "Restore the shine of your wooden floors." },
  { title: "High Pressure Cleaning", img: pressureCleaning, desc: "Blast away grime and dirt instantly." },
  { title: "Laundry Services", img: laundry, desc: "Convenient, clean laundry service." },
  { title: "Sanitary Waste Disposal", img: wasteDisposal, desc: "Hygienic disposal you can trust." }
];

export default function HomePage() {
  return (
    <div className="home-container">
  {/* Hero Section */}
  <section className="hero-banner-section">
    <div className="hero-overlay">
      <div className="hero-content">
        <h1 className="hero-title">Is your home or office in need of a fresh start?</h1>
        <p className="hero-description">
          At Telaco Cleaning Services, we transform spaces into spotless havens, giving you the freedom to focus on what matters most.
        </p>
        <Link to="/booking" className="book-button">
          Book Now
        </Link>
      </div>
    </div>
  </section>



      {/* Red Line */}
      <div className="red-line" />

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <img src={service.img} alt={service.title} className="service-image" />
              <div className="service-card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Red Horizontal Line before Testimonials */}
      <div className="testimonial-divider"></div>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map((t, index) => (
            <div className="testimonial-box" key={index}>
              <div className="testimonial-header">
                <img src={t.profile} alt={t.name} className="testimonial-img" />
                <div>
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-date">{t.date}</p>
                </div>
              </div>
              <div className="testimonial-rating">{"★".repeat(5)}</div>
              <p className="testimonial-message">{t.message}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
