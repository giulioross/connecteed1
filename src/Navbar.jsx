import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/Vector.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // piccola animazione in ingresso
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`navbar-glass${visible ? " navbar-visible" : ""}`}>
      <div className="navbar-glass-inner">
        <div className="navbar-left">
          <img src={logo} alt="Connecteed logo" className="navbar-logo" />
          <span className="navbar-title">Connecteed</span>
        </div>

        <ul className="navbar-menu">
          <li>Azienda</li>
          <li>Servizi</li>
          <li>Settori</li>
          <li>Feed Manager</li>
          <li>I nostri lavori</li>
        </ul>

        <div className="navbar-right">
          <button className="navbar-contact">Contattaci</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
