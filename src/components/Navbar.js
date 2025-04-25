import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import { Link as ScrollLink } from "react-scroll"; // ✅ Import Link from react-scroll
import logo from "../assets/Logo.svg";
import "./Navbari.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navi">
      <div className="nav-container">
        <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul className={`texti ${isOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
          <li><ScrollLink to="menu" smooth={true} duration={500}>Menu</ScrollLink></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
