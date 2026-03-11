// Overview.jsx
import { Bed, Users, Stethoscope, Clock, Shield } from "lucide-react";
import "./Overview.css";
import doctorsImg from "../assets/Hospital_04_.jpg";

export function Overview() {
  const stats = [
    { icon: Bed, label: "Hospital Beds", value: "200" },
    { icon: Users, label: "Medical Staff", value: "60+" },
    { icon: Stethoscope, label: "Specialties", value: "15" },
    { icon: Clock, label: "Years of Service", value: "40+" },
  ];

  const accreditations = [
    { name: "JCI Accredited", description: "Joint Commission International" },
    { name: "ISO 9001:2015", description: "Quality Management Certified" },
    { name: "NABH Certified", description: "National Accreditation Board" },
    { name: "Green Hospital", description: "Environmental Excellence" },
  ];

  return (
    <div className="overview">

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1769147555720-71fc71bfc216"
          alt="Hospital building"
          className="hero-img"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to HealthCare Plus</h1>
          <p>Providing compassionate, cutting-edge medical care to our community for over 40 years</p>
          <div className="hero-buttons">
            <button className="btn-primary">Find a Doctor</button>
            <button className="btn-secondary">Emergency Services</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>Excellence in Healthcare Since 1985</h2>
            <p>HealthCare Plus Hospital has been at the forefront of medical innovation and patient care for over four decades.</p>
            <p>With 200 modern hospital beds and a dedicated team of over 60 healthcare professionals.</p>
            <p>Our multidisciplinary approach ensures that every patient receives personalized care.</p>
          </div>
          <div className="intro-image">
            <img src={doctorsImg} alt="Doctors team" />
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="accreditations-section">
        <h2>Accreditations & Certifications</h2>
        <p>Our commitment to quality is recognized worldwide</p>
        <div className="accreditations-container">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="accreditation-card">
              <div className="accreditation-icon">
                <Shield />
              </div>
              <h3>{accreditation.name}</h3>
              <p>{accreditation.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Need Medical Assistance?</h2>
        <p>Our team is available 24/7 for emergency services and consultations</p>
        <div className="cta-buttons">
          <button className="btn-primary">Book an Appointment</button>
          <button className="btn-secondary">Call: (555) 123-4567</button>
        </div>
      </section>

    </div>
  );
}