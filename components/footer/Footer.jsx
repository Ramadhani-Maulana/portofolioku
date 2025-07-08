/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ramadhani Maulana Raharjo</h1>

        <ul className="footer__list">
          <li><a href="#home" className="footer__link">Home</a></li>
          <li><a href="#projects" className="footer__link">Projects</a></li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
          <li><a href="#experience" className="footer__link">Experience</a></li>
          <li><a href="#qualification" className="footer__link">Education</a></li>
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#contact" className="footer__link">Contact</a></li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/rmdhanimr_/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://in.linkedin.com/in/ramadhanimr" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="https://github.com/Ramadhani-Maulana" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; 2025 Ramadhani Maulana Raharjo. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
