import React from 'react';
import logo from '../../img/logo_white.png';
const Footer = () => {
  return (
    <footer id="contact">
      <div class="container">
        <div class="footer-logo">
          <img src={logo} />
        </div>
        <h1>
          We collaborate with ambitious brands and people. Let's build something
          great together.
        </h1>
        <p>
          <i class="fas fa-phone" /> 6366-4444
        </p>
        <p>
          <i class="fas fa-map-marker-alt" /> Blk 165A Teck Whye Crescent
          #06-341, Singapore 688165
        </p>
        <p>
          <i class="fas fa-envelope" /> info@lavvilio.com
        </p>
        <div class="socialicons">
          <ul>
            <li>
              <a>
                <span />
              </a>
            </li>
            <li>
              <a>
                <span />
              </a>
            </li>
            <li>
              <a>
                <span />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
