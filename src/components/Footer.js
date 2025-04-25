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
            {/* Updated href values */}
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/reservations">Reservations</a>
          </div>
        </div>
        
        <div className="contact-us">
          <h4>Contact Us</h4>
          <div className="contact-details">
            <p>Location: Restaurant 75</p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p> {/* Added tel link for phone */}
            <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p> {/* Added mailto link for email */}
          </div>
        </div>
        
        <div className="social-media">
          <h4>Connect with Us</h4>
          <div className="social-links">
            {/* Updated href values */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
