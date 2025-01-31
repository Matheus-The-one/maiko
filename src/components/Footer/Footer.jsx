import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#" aria-label="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="row">
          Copyright © 2024 - All rights reserved || Designed By: LadyBug
        </div>
      </div>
    </footer>
  );
};

export default Footer;
