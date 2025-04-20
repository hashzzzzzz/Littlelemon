import React from 'react';
import './Footer.css';
import foteri from '../assets/footer.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img className="footfoto" src={foteri} alt="Footer logo" />
        </div>
        
        <div className="sitemap">
          <h4>Sitemap</h4>
          <div className="sitemap-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Reservations</a>
          </div>
        </div>
        
        <div className="contact-us">
          <h4>Contact Us</h4>
          <div className="contact-details">
            <p>Location:Restaurant 75</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@littlelemon.com</p>
          </div>
        </div>
        
        <div className="social-media">
          <h4>Connect with Us</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
