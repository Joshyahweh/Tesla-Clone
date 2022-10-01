import React from "react";
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <div>
      <header>
        <a href="http://">
          <img src={logo} alt="" />
        </a>

        <nav>
          <a href="http">Model S</a>
          <a href="http">Model 3</a>
          <a href="http">Model X</a>
          <a href="http">Model Y</a>
          <a href="http">Solar Roof</a>
          <a href="http">Solar Panels</a>
        </nav>
        <div className="right-nav">
          <a href="http">Shop</a>
          <a href="http">Account</a>
        </div>
        <span>
          <a href="http" className="menu">
            Menu
          </a>
        </span>
        <div className="menu-nav">
          <li>
            <a href="http://">Existing Inventory</a>
          </li>
          <li>
            <a href="http://">Used Inventory</a>
          </li>
          <li>
            <a href="http://">Trade-In</a>
          </li>
          <li>
            <a href="http://">Test Drive</a>
          </li>
          <li>
            <a href="http://">Insurance</a>
          </li>
          <li>
            <a href="http://">Cybertruck</a>
          </li>
          <li>
            <a href="http://">Roadster</a>
          </li>
          <li>
            <a href="http://">Semi</a>
          </li>
          <li>
            <a href="http://">Charging</a>
          </li>
          <li>
            <a href="http://">Powerwall</a>
          </li>
          <li>
            <a href="http://">Commercial Energy</a>
          </li>
          <li>
            <a href="http://">Utilitiesy</a>
          </li>
          <li>
            <a href="http://">Find Us</a>
          </li>
          <li>
            <a href="http://">Support</a>
          </li>
          <li>
            <a href="http://">Existing Inventory</a>
          </li>
        </div>

        {/* Existing Inventory
    Used Inventory
    Trade-In
    Test Drive
    Insurance
    Cybertruck
    Roadster
    Semi
    Charging
    Powerwall
    Commercial Energy
    Utilities
    Find Us
    Support */}

      </header>
    </div>
  );
};
