import React from "react";
import logo from "../assets/Logo.svg";
import './Navbari.css'


const Navbar = ()=>{
return(
<nav className="navi">
    <ul className="elementet">
        <li><img src={logo}></img></li>
        <div className="texti">
        <li>< a href="#">Home</a></li>
        <li>< a href="#">About</a></li>
        <li>< a href="#">Menu</a></li>
        <li>< a href="#">Reservations</a></li>
        <li>< a href="#">Order Online</a></li>
        <li>< a href="#">Login</a></li>
        </div>
    </ul>
</nav>
)
};
export default Navbar