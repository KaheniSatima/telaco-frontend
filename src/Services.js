import React from "react";
import "./Services.css";

// Import all your images
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
import welcomeImage from './assets/services.jpg'; 

const services = [
  {
    title: "House Cleaning",
    img: houseCleaning,
    desc: "Our top-to-bottom house cleaning service ensures every room is spotless, fresh, and inviting. Perfect for busy families or a seasonal refresh."
  },
  {
    title: "Office Cleaning",
    img: officeCleaning,
    desc: "Boost productivity with a consistently clean workspace. We tailor office cleaning schedules to your business hours for minimal disruption."
  },
  {
    title: "Carpet Cleaning",
    img: carpetCleaning,
    desc: "We use deep-cleaning technology to eliminate stains, odors, and allergens from your carpets, restoring their appearance and freshness."
  },
  {
    title: "Sofa Cleaning",
    img: sofaCleaning,
    desc: "Extend the life of your sofas with our gentle yet effective upholstery cleaning. We remove dirt, stains, and bacteria safely."
  },
  {
    title: "Dining Seats Cleaning",
    img: diningCleaning,
    desc: "Maintain a spotless dining space with clean, sanitized dining chairs—ideal for homes, restaurants, or event venues."
  },
  {
    title: "Mattress Cleaning",
    img: mattressCleaning,
    desc: "Sleep healthier with our deep mattress cleaning. We remove dust mites, allergens, and odors for a refreshed rest experience."
  },
  {
    title: "Fumigation Services",
    img: fumigation,
    desc: "Protect your space from pests with our professional fumigation. Safe for families, pets, and effective against insects and rodents."
  },
  {
    title: "Post-Construction Cleaning",
    img: postConstruction,
    desc: "From construction debris to polished surfaces, we prepare your new space for move-in with thorough cleaning and sanitizing."
  },
  {
    title: "Window Cleaning",
    img: windowCleaning,
    desc: "Let the light shine in! We provide streak-free, spotless window cleaning for homes and commercial buildings."
  },
  {
    title: "Car Interior Cleaning",
    img: carInterior,
    desc: "Get a showroom-quality clean with our car interior service. We handle seats, dashboards, carpets, and more."
  },
  {
    title: "Window Blinds Cleaning",
    img: blindsCleaning,
    desc: "Eliminate dust and allergens from blinds of any kind. We use gentle, effective methods to restore their original look."
  },
  {
    title: "Floor Sanding and Polishing",
    img: floorPolishing,
    desc: "Restore the natural shine of your floors with sanding and polishing. Great for both residential and office spaces."
  },
  {
    title: "High Pressure Cleaning",
    img: pressureCleaning,
    desc: "Remove grime, mold, and tough dirt from exterior surfaces, driveways, and walls with our industrial-grade pressure cleaning."
  },
  {
    title: "Laundry Services",
    img: laundry,
    desc: "Enjoy fresh, clean clothes with our pickup and delivery laundry service. Fast, reliable, and eco-friendly."
  },
  {
    title: "Sanitary Waste Disposal",
    img: wasteDisposal,
    desc: "We offer compliant, hygienic disposal solutions for sanitary waste—ideal for commercial premises and sensitive environments."
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="services-page">
        <h2 className="services-header">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
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
    </>
  );
};

export default ServicesPage;
