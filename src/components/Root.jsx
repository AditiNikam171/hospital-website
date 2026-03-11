// Root.jsx
import { Link, Outlet } from "react-router-dom";
import { Heart } from "lucide-react";
import "./Root.css"; // we'll add styles here

export function Root() {
  const navLinks = [
    { path: "/", label: "Overview" },
    { path: "/services", label: "Services" },
    { path: "/doctors", label: "Doctors" },
    { path: "/diagnosis", label: "Diagnosis" },
  ];

  return (
    <div className="root-container">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <Heart className="logo-icon" />
              <span>HealthCare Plus</span>
            </Link>
          </div>

          <nav className="nav">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-item">
              <div className="footer-logo">
                <Heart className="footer-heart" />
                <span>HealthCare Plus</span>
              </div>
              <p>Providing excellence in healthcare services since 1985.</p>
            </div>

            <div className="footer-item">
              <h3>Quick Links</h3>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-item">
              <h3>Contact</h3>
              <ul>
                <li>123 Medical Center Drive</li>
                <li>Healthcare City, HC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Emergency: 911</li>
              </ul>
            </div>

            <div className="footer-item">
              <h3>Hours</h3>
              <ul>
                <li>Emergency: 24/7</li>
                <li>Outpatient: Mon-Fri 8AM-6PM</li>
                <li>Specialists: By Appointment</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 HealthCare Plus Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}