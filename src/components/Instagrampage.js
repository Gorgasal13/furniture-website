import React from "react";

import { FaInstagram } from "react-icons/fa";

import "./instagra.css";

const Instagrampage = () => {
  return (
    <section className="inspirepage">
      <div className="inspirecon">
        <FaInstagram size={80} className="insta-icon" />
        <h1 className="insta-title">Get Inspired with Instagram</h1>
        <p className="insta-p">
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
        <button className="discover-more-link-three">Learn More</button>
      </div>
      <div className="inspirecon" id="insta-con">
        <div className="overlay">
          <FaInstagram size={40} />
        </div>
      </div>
      <div className="inspirecon" id="insta-con">
        <div className="overlay">
          <FaInstagram size={40} />
        </div>
      </div>
    </section>
  );
};

export default Instagrampage;
