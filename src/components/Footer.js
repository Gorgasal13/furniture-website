import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footersec">
        <div className="footercon">
          <div className="footer-content">
            <h1 className="footer-title">Furniture</h1>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="social-media">
              <div>
                <FaFacebook size={25} className="footer-icon" />
              </div>
              <div>
                <FaInstagram size={25} className="footer-icon" />
              </div>
              <div>
                <FaPinterest size={25} className="footer-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="footercon">
          <div className="footer-content">
            <h2>Quick links</h2>
            <span>Image Licensin</span>
            <span>Style Guide</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="footercon">
          <div className="footer-content">
            <h2>Shop Category</h2>
            <span>Image Licensin</span>
            <span>Style Guide</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="footercon">
          <div className="footer-content">
            <h2>Pertners</h2>
            <span>Image Licensin</span>
            <span>Style Guide</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>
      <footer className="lastone">
        Copyright &#169; 2024 Furniture. All right received.
      </footer>
    </>
  );
};

export default Footer;
