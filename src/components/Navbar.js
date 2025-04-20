import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import logo from "../assets/Logo.svg";
import "./Navbari.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navi">
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo" />

        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={`texti ${isOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><Link to="/booking">Reservations</Link></li> {/* ✅ Link to BookingPage */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
