import React from 'react';
import logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <header>
      <div class="container">
        <a href="#" className="logo">
          <img src={logo} />
        </a>
        <div className="menu-toggle menu-bar" />
        <nav>
          <ul>
            <li>
              <a id="link1" href="#">
                Home
              </a>
            </li>
            <li>
              <a id="link2" href="#about">
                About
              </a>
            </li>
            <li>
              <a id="link3" href="#services">
                Services
              </a>
            </li>
            <li>
              <a id="link4" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a id="link5" href="#pricings">
                Pricing
              </a>
            </li>
            <li>
              <a id="link6" href="#testimonial">
                Testimonials
              </a>
            </li>
            <li>
              <a id="link7" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="clearfix" />
      </div>
    </header>
  );
};
export default Navbar;
