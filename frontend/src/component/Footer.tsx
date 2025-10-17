import React from "react";
import '../component.styles/Footer.scss'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-box">
        <div className="footer-logo">
          <h3>Habit</h3>
          <p>Find your perfect place with ease.</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaInstagram /></span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Habit. All rights reserved.</p>
      </div>
    </footer>
  );
};
