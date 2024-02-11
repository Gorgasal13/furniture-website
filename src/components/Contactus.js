import React, { useEffect, useState } from "react";

import "./contactus.css";
import { IoHomeOutline } from "react-icons/io5";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";

const Contactus = () => {
  return (
    <section className="contactussec">
      <div className="backimg">
        <h1>Contact Us</h1>
        <p>Home > Contact</p>
      </div>
      <div className="formcon">
        <div className="formdiv">
          <h1>Get In Touch</h1>
          <form className="contactform">
            <textarea cols={50} rows={5} />
            <div className="inputs">
              <input name="name" type="text" placeholder="YOUR NAME" />
              <input name="email" type="text" placeholder="YOUR EMAIL" />
            </div>
            <input type="text" name="subject" placeholder="CHOOSE SUBJECT" />
            <a href="#" className="discover-more-link-four">
              Send
            </a>
          </form>
        </div>
        <div className="contact-small-info">
          <div className="contact-title">
            <IoHomeOutline size={40} />
            <div>
              <h3>Tbilisi,Georgia</h3>
              <span>St 31,CA 9213</span>
            </div>
          </div>
          <div className="contact-title">
            <GiSmartphone size={40} />
            <div>
              <h3>+995 4524 344 2344</h3>
              <span>Mon to Fri 9am to 6pm</span>
            </div>
          </div>
          <div className="contact-title">
            <MdOutlineMail size={40} />
            <div>
              <h3>User@gmail.com</h3>
              <span>Send us your query anytime!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;

<section className="contactussec">
  <div className="backimg">
    <h1>Contact Us</h1>
    <p>Home > Contact</p>
  </div>
  <div className="formcon">
    <div className="formdiv">
      <h1>Get In Touch</h1>
      <form className="contactform">
        <textarea cols={50} rows={5} />
        <div className="inputs">
          <input name="name" type="text" placeholder="YOUR NAME" />
          <input name="email" type="text" placeholder="YOUR EMAIL" />
        </div>
        <input type="text" name="subject" placeholder="CHOOSE SUBJECT" />
        <a href="#" className="discover-more-link-four">
          Send
        </a>
      </form>
    </div>
    <div className="contact-small-info">
      <div className="contact-title">
        <IoHomeOutline size={40} />
        <div>
          <h3>Tbilisi,Georgia</h3>
          <span>St 31,CA 9213</span>
        </div>
      </div>
      <div className="contact-title">
        <GiSmartphone size={40} />
        <div>
          <h3>+995 4524 344 2344</h3>
          <span>Mon to Fri 9am to 6pm</span>
        </div>
      </div>
      <div className="contact-title">
        <MdOutlineMail size={40} />
        <div>
          <h3>User@gmail.com</h3>
          <span>Send us your query anytime!</span>
        </div>
      </div>
    </div>
  </div>
</section>;
